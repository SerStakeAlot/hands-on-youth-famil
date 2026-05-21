# Supabase Setup for Reviews

The Reviews section uses [Supabase](https://supabase.com) (free tier) for storage. One-time setup, ~3 minutes:

## 1. Create a Supabase project
1. Go to https://supabase.com and sign up (free).
2. Click **New Project**. Pick any name and a strong DB password. Region: closest to your visitors.
3. Wait ~1 minute for provisioning.

## 2. Create the `reviews` table
In your project dashboard, open **SQL Editor** → **New query**, paste this, and click **Run**:

```sql
create table public.reviews (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 80),
  rating int not null check (rating between 1 and 5),
  comment text not null check (char_length(comment) between 1 and 1000),
  created_at timestamptz not null default now()
);

-- Enable Row Level Security
alter table public.reviews enable row level security;

-- Anyone can read reviews
create policy "Public read reviews"
  on public.reviews for select
  using (true);

-- Anyone can submit a review (anon key)
create policy "Public insert reviews"
  on public.reviews for insert
  with check (true);
```

## 3. Get your API keys
In the dashboard, open **Project Settings** → **API**. Copy:
- **Project URL** (e.g. `https://abcdxyz.supabase.co`)
- **anon / public** key (a long JWT string — safe to expose in frontend)

## 4. Add a `.env` file to this project root
Create a file named `.env` in the repo root (already gitignored by Vite for `.env.local`; for `.env` add it to `.gitignore` if you want):

```
VITE_SUPABASE_URL=https://YOUR-PROJECT.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOi...your-anon-key...
```

Then restart the dev server (`npm run dev`). The reviews form on the Home page will go live.

## 5. For GitHub Pages deploy
Add the same two variables as **GitHub Actions secrets** (Repo → Settings → Secrets and variables → Actions), and ensure your build workflow passes them as env to `npm run build`. The values get inlined into the static JS at build time.

## Notes
- The anon key is **public by design** — security comes from Row Level Security policies above.
- To moderate, in Supabase add a `published boolean default true` column and change the read policy to `using (published = true)`. Toggle reviews from the Table Editor.
- To rate-limit spam, consider adding [Supabase's built-in rate limits](https://supabase.com/docs) or a Cloudflare Turnstile in front of the form.
