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

alter table public.bookings enable row level security;

drop policy if exists "bookings_insert_own" on public.bookings;
drop policy if exists "bookings_select_own_or_agent" on public.bookings;
drop policy if exists "bookings_update_own_or_agent" on public.bookings;

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
);

create policy "bookings_update_own_or_agent"
on public.bookings
for update
to authenticated
using (
  auth.uid() = user_id
  or coalesce(auth.jwt() -> 'user_metadata' ->> 'role', 'seeker') = 'agent'
)
with check (
  auth.uid() = user_id
  or coalesce(auth.jwt() -> 'user_metadata' ->> 'role', 'seeker') = 'agent'
);

-- Optional: if you want instant cross-device updates without refreshing,
-- enable Realtime for this table in Supabase Dashboard:
-- Database > Replication > supabase_realtime > bookings.

-- To make a staff/agent account see every student's request, update that user's metadata:
-- update auth.users
-- set raw_user_meta_data = coalesce(raw_user_meta_data, '{}'::jsonb) || '{"role":"agent"}'::jsonb
-- where email = 'agent@example.com';
