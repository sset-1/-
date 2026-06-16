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

## User Roles

The registration form now has a role selector:

- `找房人 / 집 찾는 사람` stores `user_metadata.role = "seeker"`.
- `看房人 / 방 확인 담당` stores `user_metadata.role = "agent"`.

Existing Supabase Auth users keep their old metadata. If an old phone account still opens the seeker workspace, use one of these fixes:

1. Log out, register a new account, and choose `看房人`.
2. Add the existing phone email to `public.agent_accounts`.
3. Update that user's Auth metadata to `{ "role": "agent" }`.

After changing a role, log out and log back in on that device.

## Shared Viewing Requests

Login alone only identifies the user. To make booking/viewing requests visible across devices, create the shared database table:

1. Open Supabase SQL Editor.
2. Paste and run `SUPABASE_BOOKINGS.sql`.
3. Refresh the app and log in again.

After that, new viewing requests are saved to Supabase `public.bookings` instead of only this browser's `localStorage`.

If the app says `permission denied for table bookings`, run the latest `SUPABASE_BOOKINGS.sql` again. The script grants `select`, `insert`, and `update` privileges to Supabase's authenticated role, then RLS decides which rows each user can see.

## User Submitted Listings

The app also supports user-submitted housing listings:

1. Run the latest `SUPABASE_BOOKINGS.sql` in Supabase SQL Editor.
2. Users submit listings from the `上传房源 / 매물 등록` page.
3. Listings are saved to `public.community_listings` with `status = 'pending'`.
4. Approved listings are merged into the frontend listing list.
5. Rejected listings stay private and are not shown as public listings.

Only a super admin can approve or reject listings. Add your admin email in Supabase:

```sql
insert into public.admin_accounts(email)
values ('your-admin-email@example.com')
on conflict (email) do nothing;
```

Then log out and log back in with that email. The app will open the admin review workspace automatically.

You can also set Auth metadata manually:

```sql
update auth.users
set raw_user_meta_data = coalesce(raw_user_meta_data, '{}'::jsonb) || '{"role":"admin"}'::jsonb
where email = 'your-admin-email@example.com';
```

Student accounts can read their own requests. Agent accounts can read all requests when their user metadata contains:

```json
{ "role": "agent" }
```

The easier way is to add the agent phone/account email to `public.agent_accounts`:

```sql
insert into public.agent_accounts(email)
values ('agent@example.com')
on conflict (email) do nothing;
```

After adding it, log out and log back in on the phone. The app will automatically enter the agent workspace and show all booking tasks.

You can also set auth metadata manually, or run the commented `update auth.users ...` example at the bottom of `SUPABASE_BOOKINGS.sql`.

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
