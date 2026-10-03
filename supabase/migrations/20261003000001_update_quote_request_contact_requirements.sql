alter table public.quote_requests
  alter column phone drop not null;

alter table public.quote_requests
  add constraint quote_requests_email_required
  check (email is not null) not valid;