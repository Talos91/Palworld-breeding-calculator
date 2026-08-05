# Cloud sync setup (Supabase) — one time, ~2 minutes

The app works fully **without** an account — your owned Pals, wishlist and base
plan are saved in your browser. Follow this if you want them to **sync across
devices** behind an email/password login.

## 1. Create a project

1. Go to [supabase.com](https://supabase.com) and create a free project.
2. Open **Project Settings → API** and copy:
   - **Project URL** (looks like `https://xxxxxxxx.supabase.co`)
   - the **anon / public** key (the publishable one — *not* the service role key)

## 2. Create the table + security rules

Open the project's **SQL Editor**, paste the following, and **Run**:

```sql
-- One row per user holding their whole app state as JSON.
create table if not exists public.profiles (
  id         uuid primary key references auth.users (id) on delete cascade,
  data       jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

-- Keep updated_at fresh.
create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end $$;

drop trigger if exists profiles_touch on public.profiles;
create trigger profiles_touch before update on public.profiles
  for each row execute function public.touch_updated_at();

-- Row Level Security: a user can only read/write their own row.
alter table public.profiles enable row level security;

drop policy if exists "own row select" on public.profiles;
create policy "own row select" on public.profiles
  for select using (auth.uid() = id);

drop policy if exists "own row upsert" on public.profiles;
create policy "own row upsert" on public.profiles
  for insert with check (auth.uid() = id);

drop policy if exists "own row update" on public.profiles;
create policy "own row update" on public.profiles
  for update using (auth.uid() = id) with check (auth.uid() = id);
```

## 3. (Optional) turn off email confirmation for instant login

By default Supabase emails a confirmation link before the first sign-in.
For a personal app you can skip it: **Authentication → Providers → Email** and
disable **Confirm email**. (Leave it on if you prefer the extra check — you'll
just confirm via the email once.)

## 4. Paste your keys into the app

Near the top of the app script in `index.html`, fill in:

```js
const SUPABASE_URL  = "https://xxxxxxxx.supabase.co";
const SUPABASE_ANON = "your-anon-public-key";
```

Commit and redeploy. The header now shows a **👤 Account** button — sign up,
sign in, and your collection syncs automatically on every change.

## Notes

- The **anon key is safe to ship** in a public static site — Row Level Security
  (step 2) is what actually protects data; every user only ever sees their own
  row.
- Offline / no config → the app silently falls back to browser-local storage.
- Signing in **pulls** your cloud data (overwriting the local copy); the first
  sign-in on a fresh account **seeds** the cloud from whatever is local. Use
  **Export** in *My Pals* first if you want a manual backup.
