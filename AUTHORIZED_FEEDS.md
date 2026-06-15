# Authorized Listing Feeds

This project does not scrape Naver Land or Zigbang. It supports authorized feeds only: if Naver, Zigbang, or a broker gives you an approved API URL and key, `server.js` can pull that data and merge it into `/api/listings`.

## Environment Variables

```powershell
$env:NAVER_LISTINGS_API_URL="https://authorized-provider.example/naver/listings"
$env:NAVER_LISTINGS_API_KEY="provider_key"
$env:NAVER_LISTINGS_AUTH_HEADER="Authorization"
$env:NAVER_LISTINGS_AUTH_PREFIX="Bearer"

$env:ZIGBANG_LISTINGS_API_URL="https://authorized-provider.example/zigbang/listings"
$env:ZIGBANG_LISTINGS_API_KEY="provider_key"
$env:ZIGBANG_LISTINGS_AUTH_HEADER="Authorization"
$env:ZIGBANG_LISTINGS_AUTH_PREFIX="Bearer"

$env:BROKER_LISTINGS_API_URL="https://your-broker.example/api/listings"
$env:BROKER_LISTINGS_API_KEY="broker_key"
$env:BROKER_LISTINGS_AUTH_HEADER="Authorization"
$env:BROKER_LISTINGS_AUTH_PREFIX="Bearer"
```

Then run:

```powershell
npm start
```

Open:

```text
http://127.0.0.1:8001/index.html
```

## Local Broker File

If a broker gives you a file instead of an API, put real records into:

```text
data/authorized_listings.json
```

Use `data/authorized_listings.example.json` as the shape reference. Keep fake examples out of `authorized_listings.json`, because that file is merged into the real page.

## Accepted API Payload Shapes

The remote authorized API can return any one of these:

```json
[{ "title": "..." }]
```

```json
{ "listings": [{ "title": "..." }] }
```

```json
{ "items": [{ "title": "..." }] }
```

```json
{ "data": [{ "title": "..." }] }
```

```json
{ "rooms": [{ "title": "..." }] }
```

## Useful Fields

```json
{
  "id": "broker-suwon-skku-001",
  "title": "Yuljeon one-room",
  "area": "yuljeon",
  "school": "sungkyunkwan",
  "station": "sungkyunkwan university station",
  "address": "Yuljeon-dong, Jangan-gu, Suwon",
  "room": "one-room",
  "roomType": "One-room",
  "monthlyRent": 45,
  "deposit": 500,
  "management": 6,
  "sourceName": "Authorized broker feed",
  "url": "https://...",
  "image": "https://...",
  "updatedAt": "2026-06-15",
  "verified": true,
  "tags": ["authorized", "near sungkyunkwan"],
  "keywords": ["sungkyunkwan", "suwon", "yuljeon"]
}
```

The server also understands common aliases such as `rent`, `월세`, `보증금`, `roomName`, `detailUrl`, `thumbnail`, and `확인매물`.

## Local API Status

Check whether feeds are configured:

```text
http://127.0.0.1:8001/api/authorized/status
```

Merged listings:

```text
http://127.0.0.1:8001/api/listings?areaSelect=成均馆大学%20水原%20栗田&maxRent=85&room=all
```
