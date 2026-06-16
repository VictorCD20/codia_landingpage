-- =========================================================
-- CODAI - Schema base para Supabase
-- =========================================================

-- Extensión para UUIDs
create extension if not exists pgcrypto;

-- =========================================================
-- 1. Funciones auxiliares
-- =========================================================

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

create or replace function public.current_user_role()
returns text
language sql
stable
as $$
  select role
  from public.profiles
  where id = auth.uid()
  limit 1;
$$;

create or replace function public.is_admin()
returns boolean
language sql
stable
as $$
  select coalesce(public.current_user_role() = 'admin', false);
$$;

create or replace function public.is_staff()
returns boolean
language sql
stable
as $$
  select coalesce(public.current_user_role() in ('admin', 'collaborator'), false);
$$;

-- =========================================================
-- 2. Tabla de perfiles
-- Relacionada con auth.users de Supabase
-- =========================================================

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  name text,
  email text unique,
  role text not null default 'admin'
    check (role in ('admin', 'collaborator')),
  is_active boolean not null default true,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create trigger trg_profiles_updated_at
before update on public.profiles
for each row
execute function public.set_updated_at();

-- =========================================================
-- 3. Trigger para crear profile automáticamente
-- al registrarse un usuario en auth.users
-- =========================================================

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, name, role, is_active)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'name', ''),
    'admin',
    true
  )
  on conflict (id) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
after insert on auth.users
for each row
execute function public.handle_new_user();

-- =========================================================
-- 4. Solicitudes del formulario público
-- =========================================================

create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text,
  phone text,
  description text not null,
  status text not null default 'new'
    check (status in ('new', 'in_review', 'contacted', 'converted', 'discarded')),
  source text not null default 'web_form',
  assigned_to uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create index if not exists idx_contacts_status on public.contacts(status);
create index if not exists idx_contacts_assigned_to on public.contacts(assigned_to);
create index if not exists idx_contacts_created_at on public.contacts(created_at desc);

create trigger trg_contacts_updated_at
before update on public.contacts
for each row
execute function public.set_updated_at();

-- =========================================================
-- 5. Clientes
-- =========================================================

create table if not exists public.clients (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid references public.contacts(id) on delete set null,
  business_name text,
  client_name text not null,
  email text,
  phone text,
  service_type text not null
    check (service_type in ('website', 'catalog', 'saas', 'inventory', 'automation', 'uiux', 'other')),
  project_status text not null default 'pending'
    check (project_status in ('pending', 'in_progress', 'delivered', 'paused', 'cancelled')),
  assigned_to uuid references public.profiles(id) on delete set null,
  created_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create index if not exists idx_clients_contact_id on public.clients(contact_id);
create index if not exists idx_clients_project_status on public.clients(project_status);
create index if not exists idx_clients_assigned_to on public.clients(assigned_to);

create trigger trg_clients_updated_at
before update on public.clients
for each row
execute function public.set_updated_at();

-- =========================================================
-- 6. Cobros
-- =========================================================

create table if not exists public.charges (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.clients(id) on delete cascade,
  amount numeric(12,2) not null check (amount >= 0),
  concept text not null,
  payment_status text not null default 'pending'
    check (payment_status in ('pending', 'partial', 'paid', 'overdue')),
  due_date date,
  notes text,
  created_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create index if not exists idx_charges_client_id on public.charges(client_id);
create index if not exists idx_charges_payment_status on public.charges(payment_status);

create trigger trg_charges_updated_at
before update on public.charges
for each row
execute function public.set_updated_at();

-- =========================================================
-- 7. Notas de seguimiento
-- =========================================================

create table if not exists public.notes (
  id uuid primary key default gen_random_uuid(),
  client_id uuid references public.clients(id) on delete cascade,
  contact_id uuid references public.contacts(id) on delete cascade,
  note text not null,
  created_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  constraint notes_target_check check (
    client_id is not null or contact_id is not null
  )
);

create index if not exists idx_notes_client_id on public.notes(client_id);
create index if not exists idx_notes_contact_id on public.notes(contact_id);
create index if not exists idx_notes_created_at on public.notes(created_at desc);

create trigger trg_notes_updated_at
before update on public.notes
for each row
execute function public.set_updated_at();

-- =========================================================
-- 8. Activar RLS
-- =========================================================

alter table public.profiles enable row level security;
alter table public.contacts enable row level security;
alter table public.clients enable row level security;
alter table public.charges enable row level security;
alter table public.notes enable row level security;

-- =========================================================
-- 9. Policies - profiles
-- =========================================================

drop policy if exists "profiles_select_staff" on public.profiles;
create policy "profiles_select_staff"
on public.profiles
for select
to authenticated
using (public.is_staff());

drop policy if exists "profiles_update_self_or_admin" on public.profiles;
create policy "profiles_update_self_or_admin"
on public.profiles
for update
to authenticated
using (auth.uid() = id or public.is_admin())
with check (auth.uid() = id or public.is_admin());

-- =========================================================
-- 10. Policies - contacts
-- Público puede insertar desde el formulario
-- Staff puede leer
-- Solo admin puede modificar/eliminar
-- =========================================================

drop policy if exists "contacts_insert_public" on public.contacts;
create policy "contacts_insert_public"
on public.contacts
for insert
to anon, authenticated
with check (true);

drop policy if exists "contacts_select_staff" on public.contacts;
create policy "contacts_select_staff"
on public.contacts
for select
to authenticated
using (public.is_staff());

drop policy if exists "contacts_update_admin" on public.contacts;
create policy "contacts_update_admin"
on public.contacts
for update
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "contacts_delete_admin" on public.contacts;
create policy "contacts_delete_admin"
on public.contacts
for delete
to authenticated
using (public.is_admin());

-- =========================================================
-- 11. Policies - clients
-- Staff puede leer
-- Solo admin puede crear/editar/eliminar
-- =========================================================

drop policy if exists "clients_select_staff" on public.clients;
create policy "clients_select_staff"
on public.clients
for select
to authenticated
using (public.is_staff());

drop policy if exists "clients_insert_admin" on public.clients;
create policy "clients_insert_admin"
on public.clients
for insert
to authenticated
with check (public.is_admin());

drop policy if exists "clients_update_admin" on public.clients;
create policy "clients_update_admin"
on public.clients
for update
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "clients_delete_admin" on public.clients;
create policy "clients_delete_admin"
on public.clients
for delete
to authenticated
using (public.is_admin());

-- =========================================================
-- 12. Policies - charges
-- Staff puede leer
-- Solo admin puede crear/editar/eliminar
-- =========================================================

drop policy if exists "charges_select_staff" on public.charges;
create policy "charges_select_staff"
on public.charges
for select
to authenticated
using (public.is_staff());

drop policy if exists "charges_insert_admin" on public.charges;
create policy "charges_insert_admin"
on public.charges
for insert
to authenticated
with check (public.is_admin());

drop policy if exists "charges_update_admin" on public.charges;
create policy "charges_update_admin"
on public.charges
for update
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "charges_delete_admin" on public.charges;
create policy "charges_delete_admin"
on public.charges
for delete
to authenticated
using (public.is_admin());

-- =========================================================
-- 13. Policies - notes
-- Staff puede leer
-- Solo admin puede crear/editar/eliminar
-- =========================================================

drop policy if exists "notes_select_staff" on public.notes;
create policy "notes_select_staff"
on public.notes
for select
to authenticated
using (public.is_staff());

drop policy if exists "notes_insert_admin" on public.notes;
create policy "notes_insert_admin"
on public.notes
for insert
to authenticated
with check (public.is_admin());

drop policy if exists "notes_update_admin" on public.notes;
create policy "notes_update_admin"
on public.notes
for update
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "notes_delete_admin" on public.notes;
create policy "notes_delete_admin"
on public.notes
for delete
to authenticated
using (public.is_admin());

-- =========================================================
-- 14. Vista opcional para dashboard
-- =========================================================

create or replace view public.dashboard_summary as
select
  (select count(*) from public.contacts where status = 'new') as new_contacts,
  (select count(*) from public.clients where project_status = 'in_progress') as active_clients,
  (select count(*) from public.charges where payment_status = 'pending') as pending_charges,
  (select count(*) from public.charges where payment_status = 'paid') as paid_charges;

-- =========================================================
-- 15. Comentarios finales
-- =========================================================
-- 1) Crea los usuarios administradores desde Supabase Auth.
-- 2) El trigger les creará su profile automáticamente.
-- 3) Si quieres que todos arranquen como admin, deja el trigger así.
-- 4) Si después quieres colaboradores, cambia role manualmente en public.profiles.