const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const dataFile = path.join(root, "data", "listings.json");
const crimeRiskFile = path.join(root, "data", "crime_risk.json");
const marketRentFile = path.join(root, "data", "market_rent.json");
const marketSaleFile = path.join(root, "data", "market_sale.json");
const port = Number(process.env.PORT || 8001);

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml"
};

function sendJson(res, status, payload) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  res.end(JSON.stringify(payload));
}

function readListings() {
  return readJson(dataFile, []);
}

function readJson(filePath, fallback) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    return fallback;
  }
}

function normalizedText(value) {
  const text = String(value || "").trim().toLowerCase();
  const aliases = [
    ["\u5ef6\u4e16", " yonsei "],
    ["\u65b0\u6751", " sinchon "],
    ["\u68a8\u5927", " ewha "],
    ["\u9ad8\u4e3d", " korea university "],
    ["\u5b89\u5ca9", " anam "],
    ["\u9996\u5c14\u5927", " snu "],
    ["\u9996\u5c14", " seoul "],
    ["\u6c49\u9633", " hanyang "],
    ["\u5f80\u5341\u91cc", " wangsimni "],
    ["\u5f18\u76ca", " hongik "],
    ["\u5f18\u5927", " hongdae "],
    ["\u6210\u5747\u9986", " sungkyunkwan "],
    ["\u60e0\u5316", " hyehwa "],
    ["\u6817\u7530", " yuljeon "],
    ["\u6c34\u539f", " suwon "],
    ["\u5e86\u7199", " kyung hee "],
    ["\u56de\u57fa", " hoegi "],
    ["\u4e2d\u592e", " chungang "],
    ["\u9ed1\u77f3", " heukseok "],
    ["\u5efa\u56fd", " konkuk "],
    ["\u5efa\u5927", " konkuk "],
    ["\u97e9\u56fd\u5916\u56fd\u8bed", " hufs "],
    ["\u5916\u5927", " hufs "],
    ["\u4e1c\u56fd", " dongguk "],
    ["\u56fd\u6c11", " kookmin "],
    ["\u5d07\u5b9e", " soongsil "],
    ["\u91dc\u5c71", " busan "],
    ["\u5927\u5b66", " university "],
    ["\u9644\u8fd1", " nearby "],
    ["\u7ad9", " station "],
    ["\u5165\u53e3", " entrance "]
  ];

  return aliases.reduce((result, [needle, replacement]) => result.replaceAll(needle, replacement), text);
}

function textIncludes(source, target) {
  const sourceText = normalizedText(source);
  const targetText = normalizedText(target);
  const ignoredTokens = new Set(["university", "station", "near", "nearby", "entrance"]);
  const targetTokens = targetText.split(/\s+/).filter((token) => token && !ignoredTokens.has(token));
  return targetTokens.length === 0 || targetTokens.every((token) => sourceText.includes(token));
}

function matchesArea(listing, query) {
  const selectedArea = query.get("areaSelect") || "";
  const typedArea = query.get("areaInput") || "";
  const area = query.get("area") || "";
  const place = query.get("place") || "";
  const haystack = [listing.area, listing.school, listing.station, listing.address, listing.title, ...(listing.keywords || [])].join(" ");
  return [selectedArea, typedArea, area, place].every((part) => textIncludes(haystack, part));
}

function matchesRoom(listing, room) {
  if (!room || room === "all") return true;
  return listing.room === room;
}

function matchesRent(listing, maxRent) {
  if (!maxRent) return true;
  return Number(listing.monthlyRent || 0) <= maxRent;
}

function compareRent(listing, benchmark) {
  if (!benchmark?.medianMonthlyRent || !listing.monthlyRent) return null;
  const diff = Number(listing.monthlyRent) - Number(benchmark.medianMonthlyRent);
  const pct = Math.round((diff / Number(benchmark.medianMonthlyRent)) * 100);
  return {
    diff,
    pct,
    label: diff <= -5 ? "below" : diff >= 5 ? "above" : "near"
  };
}

function enrichListing(listing, context) {
  const safety = listing.districtKey ? context.crimeRisk[listing.districtKey] || null : null;
  const rentMarket = listing.marketRentKey ? context.marketRent[listing.marketRentKey] || null : null;
  const saleMarket = listing.marketSaleKey ? context.marketSale[listing.marketSaleKey] || null : null;

  return {
    ...listing,
    safety,
    rentMarket,
    saleMarket,
    rentComparison: compareRent(listing, rentMarket)
  };
}

function filterListings(query) {
  const maxRent = Number(query.get("maxRent") || 0);
  const room = query.get("room") || "all";
  const context = {
    crimeRisk: readJson(crimeRiskFile, {}),
    marketRent: readJson(marketRentFile, {}),
    marketSale: readJson(marketSaleFile, {})
  };

  return readListings()
    .filter((listing) => matchesArea(listing, query))
    .filter((listing) => matchesRoom(listing, room))
    .filter((listing) => matchesRent(listing, maxRent))
    .map((listing) => enrichListing(listing, context))
    .sort((a, b) => Number(b.verified) - Number(a.verified) || Number(a.monthlyRent) - Number(b.monthlyRent));
}

function serveStatic(req, res, pathname) {
  const relativePath = pathname === "/" ? "index.html" : pathname.slice(1);
  const filePath = path.resolve(root, relativePath);

  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }

    res.writeHead(200, { "Content-Type": mimeTypes[path.extname(filePath)] || "application/octet-stream" });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === "/api/listings") {
    sendJson(res, 200, {
      listings: filterListings(url.searchParams),
      source: "local-listings-json",
      enrichments: ["crime_risk", "market_rent", "market_sale"]
    });
    return;
  }

  if (url.pathname === "/api/safety") {
    const key = url.searchParams.get("regionKey");
    const data = readJson(crimeRiskFile, {});
    sendJson(res, key ? 200 : 400, key ? data[key] || null : { error: "regionKey is required" });
    return;
  }

  if (url.pathname === "/api/market/rent") {
    const key = url.searchParams.get("marketKey");
    const data = readJson(marketRentFile, {});
    sendJson(res, key ? 200 : 400, key ? data[key] || null : { error: "marketKey is required" });
    return;
  }

  if (url.pathname === "/api/market/sale") {
    const key = url.searchParams.get("marketKey");
    const data = readJson(marketSaleFile, {});
    sendJson(res, key ? 200 : 400, key ? data[key] || null : { error: "marketKey is required" });
    return;
  }

  serveStatic(req, res, decodeURIComponent(url.pathname));
});

server.listen(port, "127.0.0.1", () => {
  console.log(`HanStay local server running at http://127.0.0.1:${port}`);
});
