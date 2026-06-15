# Supabase Auth Setup

This project is configured for real Supabase email/password login.

## Frontend Config

Edit `supabase-config.js` if your project changes:

```js
window.HANSTAY_SUPABASE = {
  url: "https://cykwfmxllokkjcqruqvf.supabase.co",
  publishableKey: "sb_publishable_..."
};
```

The publishable key is safe to use in the browser. Do not put a Supabase `service_role` key in frontend code or GitHub.

## Supabase Dashboard

In Supabase:

1. Open Authentication.
2. Enable Email provider.
3. Decide whether email confirmation is required.
4. Create users from the app registration form, or from the Supabase dashboard.

## Local Server

Normal mode, API remains public:

```powershell
$env:AUTH_REQUIRED="false"
npm start
```

Protected API mode, `/api/*` requires a logged-in Supabase session:

```powershell
$env:AUTH_REQUIRED="true"
$env:SUPABASE_URL="https://cykwfmxllokkjcqruqvf.supabase.co"
$env:SUPABASE_PUBLISHABLE_KEY="sb_publishable_bRp4OMwuQ7GucrB2INqwbA_9o9F8nG7"
npm start
```

Open:

```text
http://127.0.0.1:8001/index.html
```

## Notes

- GitHub Pages can run the frontend login flow.
- GitHub Pages cannot protect local JSON files or run `server.js`.
- To protect real data, deploy `server.js` to a backend host and set `AUTH_REQUIRED=true`.
