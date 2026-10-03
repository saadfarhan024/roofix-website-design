create table public.quote_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text,
  phone text not null,
  service text not null check (service in ('Roof repair', 'Roof replacement', 'New roof installation', 'Inspection')),
  address text,
  message text,
  status text not null default 'new' check (status in ('new', 'contacted', 'quoted', 'closed')),
  created_at timestamptz not null default now()
);

alter table public.quote_requests enable row level security;