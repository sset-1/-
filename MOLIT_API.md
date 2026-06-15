# 국토교통부 실거래가 API 연결

이 앱은 수원 성균관대 자연과학캠퍼스 / 율전동 조사를 위해 국토교통부 실거래가 OpenAPI를 서버에서 읽을 수 있게 준비되어 있습니다.

## 필요한 값

- `MOLIT_SERVICE_KEY`: 공공데이터포털에서 발급받은 인증키
- `MOLIT_LAWD_CD`: 수원시 장안구 코드. 기본값은 `41111`
- `MOLIT_DONG`: 동 필터. 기본값은 `율전동`

## 실행 예시

PowerShell:

```powershell
$env:MOLIT_SERVICE_KEY="발급받은_serviceKey"
$env:MOLIT_LAWD_CD="41111"
$env:MOLIT_DONG="율전동"
npm start
```

브라우저:

```text
http://127.0.0.1:8001/index.html
```

## 제공되는 로컬 API

```text
/api/molit/rent?lawdCd=41111&from=202506&to=202606&dong=율전동
/api/molit/sale?lawdCd=41111&from=202506&to=202606
```

프론트엔드는 위 API가 성공하면 국토교통부 실시간 집계를 우선 사용하고, 실패하거나 키가 없으면 `data/market_rent.json` / `data/market_sale.json`으로 자동 fallback합니다.

## 주의

GitHub Pages는 `server.js`를 실행하지 못하므로 국토부 API 직접 호출은 로컬 서버, Render, Railway, Vercel Functions 같은 서버 환경에서만 가능합니다. GitHub Pages에서는 기존 JSON fallback 데이터가 표시됩니다.
