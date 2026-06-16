-- Run this once in Supabase SQL Editor.
-- It makes viewing requests shared across devices instead of staying in localStorage.

create table if not exists public.bookings (
  id text primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  requester_email text,
  listing_id text not null,
  listing_title text not null,
  school_name text,
  requester_name text not null,
  requester_contact text not null,
  budget text,
  move_in date,
  notes text default '',
  status text not null default 'pending'
    check (status in ('pending', 'accepted', 'scheduled', 'completed', 'cancelled')),
  agent_name text default '',
  agent_contact text default '',
  agent_note text default '',
  meeting_url text default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists bookings_user_id_idx on public.bookings(user_id);
create index if not exists bookings_status_idx on public.bookings(status);
create index if not exists bookings_created_at_idx on public.bookings(created_at desc);

create table if not exists public.agent_accounts (
  email text primary key,
  created_at timestamptz not null default now()
);

create table if not exists public.admin_accounts (
  email text primary key,
  created_at timestamptz not null default now()
);

create table if not exists public.community_listings (
  id uuid primary key default gen_random_uuid(),
  submitter_id uuid not null references auth.users(id) on delete cascade,
  submitter_email text,
  title text not null,
  school text not null default 'SKKU',
  school_name text not null default '水原成均馆 / SKKU Suwon',
  room_type text not null default 'one-room'
    check (room_type in ('one-room', 'two-room', 'gosiwon', 'officetel')),
  rent integer not null check (rent >= 0),
  deposit integer not null default 0 check (deposit >= 0),
  management integer not null default 0 check (management >= 0),
  distance integer not null default 15 check (distance >= 0),
  station text default '',
  address text default '',
  image_url text default '',
  contact text not null,
  description text not null,
  status text not null default 'pending'
    check (status in ('pending', 'approved', 'rejected')),
  admin_note text default '',
  reviewed_by uuid references auth.users(id),
  reviewed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists community_listings_status_idx on public.community_listings(status);
create index if not exists community_listings_submitter_idx on public.community_listings(submitter_id);
create index if not exists community_listings_created_at_idx on public.community_listings(created_at desc);

alter table public.bookings enable row level security;
alter table public.agent_accounts enable row level security;
alter table public.admin_accounts enable row level security;
alter table public.community_listings enable row level security;

grant usage on schema public to authenticated;
grant select, insert, update on public.bookings to authenticated;
grant select on public.agent_accounts to authenticated;
grant select on public.admin_accounts to authenticated;
grant select, insert, update on public.community_listings to authenticated;

drop policy if exists "bookings_insert_own" on public.bookings;
drop policy if exists "bookings_select_own_or_agent" on public.bookings;
drop policy if exists "bookings_update_own_or_agent" on public.bookings;
drop policy if exists "agent_accounts_select_self" on public.agent_accounts;
drop policy if exists "admin_accounts_select_self" on public.admin_accounts;
drop policy if exists "community_listings_insert_own_pending" on public.community_listings;
drop policy if exists "community_listings_select_visible" on public.community_listings;
drop policy if exists "community_listings_update_submitter_or_admin" on public.community_listings;

create policy "agent_accounts_select_self"
on public.agent_accounts
for select
to authenticated
using (lower(email) = lower(auth.jwt() ->> 'email'));

create policy "admin_accounts_select_self"
on public.admin_accounts
for select
to authenticated
using (lower(email) = lower(auth.jwt() ->> 'email'));

create policy "bookings_insert_own"
on public.bookings
for insert
to authenticated
with check (auth.uid() = user_id);

create policy "bookings_select_own_or_agent"
on public.bookings
for select
to authenticated
using (
  auth.uid() = user_id
  or coalesce(auth.jwt() -> 'user_metadata' ->> 'role', 'seeker') = 'agent'
  or exists (
    select 1
    from public.agent_accounts
    where lower(agent_accounts.email) = lower(auth.jwt() ->> 'email')
  )
);

create policy "bookings_update_own_or_agent"
on public.bookings
for update
to authenticated
using (
  auth.uid() = user_id
  or coalesce(auth.jwt() -> 'user_metadata' ->> 'role', 'seeker') = 'agent'
  or exists (
    select 1
    from public.agent_accounts
    where lower(agent_accounts.email) = lower(auth.jwt() ->> 'email')
  )
)
with check (
  auth.uid() = user_id
  or coalesce(auth.jwt() -> 'user_metadata' ->> 'role', 'seeker') = 'agent'
  or exists (
    select 1
    from public.agent_accounts
    where lower(agent_accounts.email) = lower(auth.jwt() ->> 'email')
  )
);

create policy "community_listings_insert_own_pending"
on public.community_listings
for insert
to authenticated
with check (
  auth.uid() = submitter_id
  and status = 'pending'
);

create policy "community_listings_select_visible"
on public.community_listings
for select
to authenticated
using (
  status = 'approved'
  or auth.uid() = submitter_id
  or coalesce(auth.jwt() -> 'user_metadata' ->> 'role', 'seeker') = 'admin'
  or exists (
    select 1
    from public.admin_accounts
    where lower(admin_accounts.email) = lower(auth.jwt() ->> 'email')
  )
);

create policy "community_listings_update_submitter_or_admin"
on public.community_listings
for update
to authenticated
using (
  (
    auth.uid() = submitter_id
    and status = 'pending'
  )
  or coalesce(auth.jwt() -> 'user_metadata' ->> 'role', 'seeker') = 'admin'
  or exists (
    select 1
    from public.admin_accounts
    where lower(admin_accounts.email) = lower(auth.jwt() ->> 'email')
  )
)
with check (
  (
    auth.uid() = submitter_id
    and status = 'pending'
  )
  or coalesce(auth.jwt() -> 'user_metadata' ->> 'role', 'seeker') = 'admin'
  or exists (
    select 1
    from public.admin_accounts
    where lower(admin_accounts.email) = lower(auth.jwt() ->> 'email')
  )
);

-- Optional: if you want instant cross-device updates without refreshing,
-- enable Realtime for this table in Supabase Dashboard:
-- Database > Replication > supabase_realtime > bookings and community_listings.

-- To make a staff/agent account see every student's request, add the account email here:
-- insert into public.agent_accounts(email)
-- values ('agent@example.com')
-- on conflict (email) do nothing;

-- Alternative: update that user's auth metadata:
-- update auth.users
-- set raw_user_meta_data = coalesce(raw_user_meta_data, '{}'::jsonb) || '{"role":"agent"}'::jsonb
-- where email = 'agent@example.com';

-- To make a super admin account review user-submitted listings:
-- insert into public.admin_accounts(email)
-- values ('admin@example.com')
-- on conflict (email) do nothing;

-- Alternative: update that user's auth metadata:
-- update auth.users
-- set raw_user_meta_data = coalesce(raw_user_meta_data, '{}'::jsonb) || '{"role":"admin"}'::jsonb
-- where email = 'admin@example.com';
