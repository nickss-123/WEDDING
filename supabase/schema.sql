-- Run once in Supabase → SQL Editor
create table if not exists public.rsvps (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  name text not null,
  email text not null unique,          -- same email re-submitting updates the RSVP
  attending boolean not null,
  guests int not null default 1 check (guests between 0 and 4),
  dietary text,
  message text
);
-- RLS on with no policies = the public anon key can't read or write anything.
-- Only the server (service-role key in api/rsvp.js) can. View responses in Table Editor.
alter table public.rsvps enable row level security;
