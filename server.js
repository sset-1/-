const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const dataFile = path.join(root, "data", "listings.json");
const authorizedListingsFile = path.join(root, "data", "authorized_listings.json");
const crimeRiskFile = path.join(root, "data", "crime_risk.json");
const marketRentFile = path.join(root, "data", "market_rent.json");
const marketSaleFile = path.join(root, "data", "market_sale.json");
const port = Number(process.env.PORT || 8001);
const molitConfig = {
  serviceKey: process.env.MOLIT_SERVICE_KEY || process.env.DATA_GO_KR_SERVICE_KEY || "",
  lawdCd: process.env.MOLIT_LAWD_CD || "41111",
  dong: process.env.MOLIT_DONG || "율전동",
  rentApiUrl:
    process.env.MOLIT_RENT_API_URL ||
    "https://apis.data.go.kr/1613000/RTMSDataSvcSHRent/getRTMSDataSvcSHRent",
  saleApiUrl:
    process.env.MOLIT_SALE_API_URL ||
    "https://apis.data.go.kr/1613000/RTMSDataSvcSHTrade/getRTMSDataSvcSHTrade"
};
const authConfig = {
  required: String(process.env.AUTH_REQUIRED || "false").toLowerCase() === "true",
  supabaseUrl: (process.env.SUPABASE_URL || "https://cykwfmxllokkjcqruqvf.supabase.co").replace(/\/rest\/v1\/?$/, ""),
  publishableKey:
    process.env.SUPABASE_ANON_KEY ||
    process.env.SUPABASE_PUBLISHABLE_KEY ||
    "sb_publishable_bRp4OMwuQ7GucrB2INqwbA_9o9F8nG7"
};
const authorizedProviderConfigs = [
  {
    id: "naver",
    label: "Naver authorized feed",
    url: process.env.NAVER_LISTINGS_API_URL || "",
    key: process.env.NAVER_LISTINGS_API_KEY || "",
    authHeader: process.env.NAVER_LISTINGS_AUTH_HEADER || "Authorization",
    authPrefix: process.env.NAVER_LISTINGS_AUTH_PREFIX || "Bearer"
  },
  {
    id: "zigbang",
    label: "Zigbang authorized feed",
    url: process.env.ZIGBANG_LISTINGS_API_URL || "",
    key: process.env.ZIGBANG_LISTINGS_API_KEY || "",
    authHeader: process.env.ZIGBANG_LISTINGS_AUTH_HEADER || "Authorization",
    authPrefix: process.env.ZIGBANG_LISTINGS_AUTH_PREFIX || "Bearer"
  },
  {
    id: "broker",
    label: "Broker authorized feed",
    url: process.env.BROKER_LISTINGS_API_URL || "",
    key: process.env.BROKER_LISTINGS_API_KEY || "",
    authHeader: process.env.BROKER_LISTINGS_AUTH_HEADER || "Authorization",
    authPrefix: process.env.BROKER_LISTINGS_AUTH_PREFIX || "Bearer"
  }
];

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

function readAuthorizedListings() {
  return readJson(authorizedListingsFile, []);
}

function readJson(filePath, fallback) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    return fallback;
  }
}

function getBearerToken(req) {
  const header = req.headers.authorization || "";
  const match = header.match(/^Bearer\s+(.+)$/i);
  return match ? match[1] : "";
}

async function verifySupabaseUser(req) {
  if (!authConfig.required) return null;

  const token = getBearerToken(req);
  if (!token) {
    const error = new Error("Login required");
    error.status = 401;
    throw error;
  }

  const response = await fetch(`${authConfig.supabaseUrl}/auth/v1/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
      apikey: authConfig.publishableKey,
      Accept: "application/json"
    }
  });
  const payload = await response.json().catch(() => null);

  if (!response.ok || !payload?.id) {
    const error = new Error("Invalid or expired Supabase session");
    error.status = 401;
    throw error;
  }

  return payload;
}

function encodeServiceKey(key) {
  return /%[0-9a-f]{2}/i.test(key) ? key : encodeURIComponent(key);
}

function isDealMonth(value) {
  return /^\d{6}$/.test(String(value || ""));
}

function dealMonthFromDate(date) {
  return `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, "0")}`;
}

function addMonths(date, offset) {
  return new Date(date.getFullYear(), date.getMonth() + offset, 1);
}

function getDealMonths(from, to) {
  const now = new Date();
  const start = isDealMonth(from) ? String(from) : dealMonthFromDate(addMonths(now, -12));
  const end = isDealMonth(to) ? String(to) : dealMonthFromDate(now);
  const months = [];
  let cursor = new Date(Number(start.slice(0, 4)), Number(start.slice(4, 6)) - 1, 1);
  const endDate = new Date(Number(end.slice(0, 4)), Number(end.slice(4, 6)) - 1, 1);

  while (cursor <= endDate && months.length <= 36) {
    months.push(dealMonthFromDate(cursor));
    cursor = addMonths(cursor, 1);
  }

  return months;
}

function firstValue(item, keys) {
  for (const key of keys) {
    if (item[key] !== undefined && item[key] !== null && item[key] !== "") return item[key];
  }
  return "";
}

function cleanString(value) {
  return String(value || "").trim();
}

function parseNumber(value) {
  const text = cleanString(value).replace(/,/g, "").replace(/[^0-9.-]/g, "");
  const number = Number(text);
  return Number.isFinite(number) ? number : 0;
}

function normalizeRoomType(value) {
  const text = cleanString(value).toLowerCase();
  if (["one-room", "oneroom", "one room", "원룸", "1room", "1-room"].some((item) => text.includes(item))) return "one-room";
  if (["two-room", "tworoom", "two room", "투룸", "2room", "2-room"].some((item) => text.includes(item))) return "two-room";
  if (["officetel", "오피스텔"].some((item) => text.includes(item))) return "officetel";
  if (["gosiwon", "고시원"].some((item) => text.includes(item))) return "gosiwon";
  return text || "one-room";
}

function toArray(value) {
  if (Array.isArray(value)) return value;
  if (value === undefined || value === null || value === "") return [];
  return [value];
}

function getPayloadItems(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.listings)) return payload.listings;
  if (Array.isArray(payload?.items)) return payload.items;
  if (Array.isArray(payload?.data)) return payload.data;
  if (Array.isArray(payload?.rooms)) return payload.rooms;
  if (Array.isArray(payload?.results)) return payload.results;
  return [];
}

function getNestedValue(item, keys) {
  for (const key of keys) {
    if (key.includes(".")) {
      const value = key.split(".").reduce((current, part) => current?.[part], item);
      if (value !== undefined && value !== null && value !== "") return value;
    } else if (item[key] !== undefined && item[key] !== null && item[key] !== "") {
      return item[key];
    }
  }
  return "";
}

function mapAuthorizedListing(raw, provider) {
  const room = normalizeRoomType(
    getNestedValue(raw, ["room", "roomType", "type", "room_type", "매물종류", "주택유형", "propertyType"])
  );
  const address = cleanString(getNestedValue(raw, ["address", "addr", "location", "roadAddress", "jibunAddress", "주소"]));
  const area = cleanString(getNestedValue(raw, ["area", "dong", "umdNm", "neighborhood", "법정동"]));
  const title =
    cleanString(getNestedValue(raw, ["title", "name", "listingName", "roomName", "매물명"])) ||
    `${area || address || "Authorized"} ${room}`;
  const monthlyRent = parseNumber(getNestedValue(raw, ["monthlyRent", "monthly", "rent", "월세", "price.monthlyRent"]));
  const deposit = parseNumber(getNestedValue(raw, ["deposit", "보증금", "price.deposit"]));
  const management = parseNumber(getNestedValue(raw, ["management", "maintenanceFee", "관리비", "price.management"]));
  const id = cleanString(getNestedValue(raw, ["id", "listingId", "roomId", "articleNo", "매물번호"])) || `${provider.id}-${Buffer.from(`${title}-${address}`).toString("base64url").slice(0, 16)}`;
  const image = cleanString(getNestedValue(raw, ["image", "thumbnail", "imageUrl", "photo", "photos.0", "images.0"]));
  const url = cleanString(getNestedValue(raw, ["url", "link", "detailUrl", "sourceUrl"]));
  const tags = [
    ...toArray(getNestedValue(raw, ["tags", "features", "keywords"])).flat(),
    provider.label
  ]
    .map(cleanString)
    .filter(Boolean);

  return {
    id,
    title,
    area: area || "yuljeon",
    school: cleanString(getNestedValue(raw, ["school", "schoolName"])) || "sungkyunkwan",
    station: cleanString(getNestedValue(raw, ["station", "subway", "nearestStation"])) || "sungkyunkwan university station",
    address: address || "Yuljeon-dong, Jangan-gu, Suwon",
    room,
    roomType: cleanString(getNestedValue(raw, ["roomType", "typeLabel", "주택유형"])) || (room === "one-room" ? "One-room" : room),
    monthlyRent,
    deposit,
    management,
    sourceName: cleanString(getNestedValue(raw, ["sourceName", "source"])) || provider.label,
    updatedAt: cleanString(getNestedValue(raw, ["updatedAt", "updated", "lastModified", "등록일"])) || new Date().toISOString().slice(0, 10),
    image,
    url,
    verified: Boolean(getNestedValue(raw, ["verified", "isVerified", "확인매물"])) || provider.id !== "broker",
    tags,
    keywords: [
      "sungkyunkwan",
      "suwon",
      "yuljeon",
      provider.id,
      ...toArray(getNestedValue(raw, ["keywords"])).flat()
    ].map(cleanString),
    districtKey: cleanString(getNestedValue(raw, ["districtKey"])) || "gyeonggi_suwon",
    marketRentKey: cleanString(getNestedValue(raw, ["marketRentKey"])) || "suwon_jangan_yuljeon",
    marketSaleKey: cleanString(getNestedValue(raw, ["marketSaleKey"])) || "suwon_jangan",
    authorizedSource: provider.id
  };
}

function makeAuthHeaders(provider) {
  const headers = { Accept: "application/json" };
  if (provider.key) {
    headers[provider.authHeader] = provider.authPrefix ? `${provider.authPrefix} ${provider.key}` : provider.key;
  }
  return headers;
}

function makeProviderUrl(provider, query) {
  const url = new URL(provider.url);
  const passThrough = ["area", "areaSelect", "areaInput", "place", "maxRent", "room"];
  passThrough.forEach((key) => {
    const value = query.get(key);
    if (value) url.searchParams.set(key, value);
  });
  return url.toString();
}

async function fetchAuthorizedProviderListings(provider, query) {
  if (!provider.url) return { provider: provider.id, configured: false, listings: [] };
  const response = await fetch(makeProviderUrl(provider, query), {
    headers: makeAuthHeaders(provider)
  });
  const text = await response.text();

  if (!response.ok) {
    throw new Error(`${provider.label} returned ${response.status}: ${text.slice(0, 120)}`);
  }

  const payload = JSON.parse(text);
  return {
    provider: provider.id,
    configured: true,
    listings: getPayloadItems(payload).map((item) => mapAuthorizedListing(item, provider))
  };
}

async function getAuthorizedListings(query) {
  const localProvider = { id: "local-authorized", label: "Local authorized feed" };
  const localListings = readAuthorizedListings().map((item) => mapAuthorizedListing(item, localProvider));
  const remoteResults = await Promise.allSettled(
    authorizedProviderConfigs.map((provider) => fetchAuthorizedProviderListings(provider, query))
  );
  const listings = [...localListings];
  const sources = [{ provider: "local-authorized", configured: true, count: localListings.length }];
  const errors = [];

  remoteResults.forEach((result, index) => {
    const provider = authorizedProviderConfigs[index];
    if (result.status === "fulfilled") {
      listings.push(...result.value.listings);
      sources.push({
        provider: result.value.provider,
        configured: result.value.configured,
        count: result.value.listings.length
      });
    } else {
      sources.push({ provider: provider.id, configured: Boolean(provider.url), count: 0 });
      errors.push({ provider: provider.id, error: result.reason.message });
    }
  });

  return { listings, sources, errors };
}

function median(values) {
  const sorted = values.map(Number).filter((value) => Number.isFinite(value) && value > 0).sort((a, b) => a - b);
  if (sorted.length === 0) return 0;
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[middle] : Math.round(((sorted[middle - 1] + sorted[middle]) / 2) * 10) / 10;
}

function normalizeMolitRentItem(item) {
  return {
    dong: cleanString(firstValue(item, ["umdNm", "법정동", "dong"])),
    housingType: cleanString(firstValue(item, ["houseType", "주택유형", "houseTypeNm"])),
    dealYearMonth: cleanString(firstValue(item, ["dealYearMonth", "계약년월", "dealYmd"])),
    dealDay: cleanString(firstValue(item, ["dealDay", "계약일"])),
    deposit: parseNumber(firstValue(item, ["deposit", "보증금액", "depositAmount"])),
    monthlyRent: parseNumber(firstValue(item, ["monthlyRent", "월세금액", "rentFee"])),
    areaM2: parseNumber(firstValue(item, ["area", "전용면적", "계약면적", "excluUseAr"])),
    builtYear: cleanString(firstValue(item, ["buildYear", "건축년도"])),
    raw: item
  };
}

function normalizeMolitSaleItem(item) {
  return {
    dong: cleanString(firstValue(item, ["umdNm", "법정동", "dong"])),
    housingType: cleanString(firstValue(item, ["houseType", "주택유형", "houseTypeNm"])),
    dealYearMonth: cleanString(firstValue(item, ["dealYearMonth", "계약년월", "dealYmd"])),
    dealDay: cleanString(firstValue(item, ["dealDay", "계약일"])),
    salePrice: parseNumber(firstValue(item, ["dealAmount", "거래금액", "dealAmt"])),
    areaM2: parseNumber(firstValue(item, ["area", "연면적", "대지면적", "excluUseAr"])),
    builtYear: cleanString(firstValue(item, ["buildYear", "건축년도"])),
    raw: item
  };
}

function summarizeMolitRent(items, dong) {
  const normalized = items.map(normalizeMolitRentItem).filter((item) => !dong || item.dong.includes(dong));
  const monthly = normalized.filter((item) => item.monthlyRent > 0);
  const jeonse = normalized.filter((item) => item.monthlyRent === 0 && item.deposit > 0);

  return {
    region: `LAWD_CD ${molitConfig.lawdCd}${dong ? ` ${dong}` : ""}`,
    source: "국토교통부 실거래가 OpenAPI",
    itemCount: normalized.length,
    monthlyCount: monthly.length,
    jeonseCount: jeonse.length,
    medianMonthlyRent: median(monthly.map((item) => item.monthlyRent)),
    medianMonthlyDeposit: median(monthly.map((item) => item.deposit)),
    medianMonthlyAreaM2: median(monthly.map((item) => item.areaM2)),
    medianJeonseDeposit: median(jeonse.map((item) => item.deposit)),
    medianJeonseAreaM2: median(jeonse.map((item) => item.areaM2))
  };
}

function summarizeMolitSale(items, dong) {
  const normalized = items.map(normalizeMolitSaleItem).filter((item) => !dong || item.dong.includes(dong));
  return {
    region: `LAWD_CD ${molitConfig.lawdCd}${dong ? ` ${dong}` : ""}`,
    source: "국토교통부 실거래가 OpenAPI",
    transactionCount: normalized.length,
    medianSalePrice: median(normalized.map((item) => item.salePrice)),
    medianSaleAreaM2: median(normalized.map((item) => item.areaM2))
  };
}

function getOpenApiItems(payload) {
  const items = payload?.response?.body?.items?.item;
  if (!items) return [];
  return Array.isArray(items) ? items : [items];
}

async function fetchMolitMonth(apiUrl, lawdCd, dealYmd) {
  const key = molitConfig.serviceKey;
  if (!key) {
    const error = new Error("MOLIT_SERVICE_KEY is required");
    error.status = 501;
    throw error;
  }

  const params = new URLSearchParams({
    LAWD_CD: lawdCd,
    DEAL_YMD: dealYmd,
    pageNo: "1",
    numOfRows: "1000",
    _type: "json"
  });
  const requestUrl = `${apiUrl}?${params.toString()}&serviceKey=${encodeServiceKey(key)}`;
  const response = await fetch(requestUrl, { headers: { Accept: "application/json" } });
  const text = await response.text();

  if (!response.ok) {
    throw new Error(`MOLIT API returned ${response.status}`);
  }

  try {
    return getOpenApiItems(JSON.parse(text));
  } catch (error) {
    throw new Error(`MOLIT API did not return JSON: ${text.slice(0, 120)}`);
  }
}

async function fetchMolitItems(apiUrl, query) {
  const lawdCd = query.get("lawdCd") || molitConfig.lawdCd;
  const months = getDealMonths(query.get("from"), query.get("to"));
  const monthResults = await Promise.all(months.map((dealYmd) => fetchMolitMonth(apiUrl, lawdCd, dealYmd)));
  return {
    lawdCd,
    months,
    items: monthResults.flat()
  };
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

async function filterListings(query) {
  const maxRent = Number(query.get("maxRent") || 0);
  const room = query.get("room") || "all";
  const context = {
    crimeRisk: readJson(crimeRiskFile, {}),
    marketRent: readJson(marketRentFile, {}),
    marketSale: readJson(marketSaleFile, {})
  };
  const authorized = await getAuthorizedListings(query);
  const allListings = [...readListings(), ...authorized.listings];

  return {
    listings: allListings
    .filter((listing) => matchesArea(listing, query))
    .filter((listing) => matchesRoom(listing, room))
    .filter((listing) => matchesRent(listing, maxRent))
    .map((listing) => enrichListing(listing, context))
      .sort((a, b) => Number(b.verified) - Number(a.verified) || Number(a.monthlyRent) - Number(b.monthlyRent)),
    authorizedSources: authorized.sources,
    authorizedErrors: authorized.errors
  };
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

function getErrorHint(error) {
  if (error.status === 401) return "Login with Supabase first, then retry this API request.";
  if (error.status === 403) return "Your Supabase session could not be verified.";
  if (error.status === 501) return "Set MOLIT_SERVICE_KEY or DATA_GO_KR_SERVICE_KEY before running server.js.";
  return "Check the MOLIT API URL, service key, LAWD_CD, and network connection.";
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  try {
    if (url.pathname.startsWith("/api/")) {
      await verifySupabaseUser(req);
    }

    if (url.pathname === "/api/listings") {
      const result = await filterListings(url.searchParams);
      sendJson(res, 200, {
        listings: result.listings,
        source: "local-plus-authorized-feeds",
        enrichments: ["crime_risk", "market_rent", "market_sale"],
        authorizedSources: result.authorizedSources,
        authorizedErrors: result.authorizedErrors
      });
      return;
    }

    if (url.pathname === "/api/authorized/status") {
      sendJson(res, 200, {
        localFile: {
          path: "data/authorized_listings.json",
          count: readAuthorizedListings().length
        },
        providers: authorizedProviderConfigs.map((provider) => ({
          id: provider.id,
          label: provider.label,
          configured: Boolean(provider.url),
          hasKey: Boolean(provider.key),
          authHeader: provider.authHeader
        }))
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

    if (url.pathname === "/api/molit/rent") {
      const dong = url.searchParams.get("dong") || molitConfig.dong;
      const result = await fetchMolitItems(molitConfig.rentApiUrl, url.searchParams);
      sendJson(res, 200, {
        source: "molit-openapi",
        service: "RTMSDataSvcSHRent",
        lawdCd: result.lawdCd,
        months: result.months,
        dong,
        summary: summarizeMolitRent(result.items, dong),
        items: result.items.map(normalizeMolitRentItem).filter((item) => !dong || item.dong.includes(dong)).slice(0, 80)
      });
      return;
    }

    if (url.pathname === "/api/molit/sale") {
      const dong = url.searchParams.get("dong") || "";
      const result = await fetchMolitItems(molitConfig.saleApiUrl, url.searchParams);
      sendJson(res, 200, {
        source: "molit-openapi",
        service: "RTMSDataSvcSHTrade",
        lawdCd: result.lawdCd,
        months: result.months,
        dong,
        summary: summarizeMolitSale(result.items, dong),
        items: result.items.map(normalizeMolitSaleItem).filter((item) => !dong || item.dong.includes(dong)).slice(0, 80)
      });
      return;
    }

    serveStatic(req, res, decodeURIComponent(url.pathname));
  } catch (error) {
    sendJson(res, error.status || 500, {
      error: error.message,
      hint: getErrorHint(error)
    });
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`HanStay local server running at http://127.0.0.1:${port}`);
});
