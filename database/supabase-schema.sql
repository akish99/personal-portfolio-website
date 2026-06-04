create extension if not exists pgcrypto;

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name varchar(100) not null,
  email varchar(255) not null,
  subject varchar(200) not null,
  message text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.feedback (
  id uuid primary key default gen_random_uuid(),
  name varchar(100) not null,
  role varchar(150),
  rating integer not null check (rating between 1 and 5),
  message text not null,
  status varchar(20) not null default 'pending' check (status in ('pending','approved','rejected')),
  created_at timestamptz not null default now()
);

create index if not exists feedback_status_idx on public.feedback(status);
create index if not exists feedback_created_at_idx on public.feedback(created_at desc);
create index if not exists contact_messages_created_at_idx on public.contact_messages(created_at desc);

alter table public.contact_messages enable row level security;
alter table public.feedback enable row level security;

-- No browser-side policies are intentionally created.
-- All inserts and reads go through the Express backend using the private server-side key.
