# Blog + admin backend

Public blog at `/blog`, authoring backend at `/admin`. Articles live in the
**same Supabase project the iOS app uses** — no new vendor, no extra bill.

## How it fits together

| Piece | Where |
| --- | --- |
| Article storage | `blog_posts` table (Postgres) |
| Cover images | `blog-images` Storage bucket (public read) |
| Admin login | Supabase Auth + `blog_admins` allowlist |
| Public pages | `/blog`, `/blog/[slug]` — prerendered, revalidated every 60s |
| Admin pages | `/admin`, `/admin/new`, `/admin/[id]` |

Articles are written in **Markdown**. Publishing calls `revalidatePath`, so a new
post appears on the public blog immediately rather than waiting out the 60s window.

## Setup (once)

**1. Create the schema.** In the Supabase dashboard → SQL Editor, paste and run
[`supabase_blog.sql`](./supabase_blog.sql). It creates both tables, the RLS
policies, and the storage bucket.

**2. Add the env vars.** Copy `.env.example` → `.env.local` and fill in:

```
NEXT_PUBLIC_SUPABASE_URL=https://<project>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon key>
```

Both come from Project Settings → API. Use the **anon** key, never `service_role`.
Add the same two vars to your hosting provider for production.

**3. Create your admin user.** Dashboard → Authentication → Users → "Add user",
with a real email and password. (There's deliberately no public sign-up.)

**4. Grant yourself authoring access:**

```sql
INSERT INTO blog_admins (user_id)
SELECT id FROM auth.users WHERE email = 'you@example.com';
```

**5. Sign in** at `/admin/login` and write your first article.

Repeat steps 3–4 for each additional author.

## Security model

The anon key is public by design — it's in the browser bundle. The database, not
the UI, is what enforces access:

- Anonymous visitors can `SELECT` **only** rows where `status = 'published'`.
  Drafts are invisible to the public even though the site queries with the anon key.
- Insert/update/delete require membership in `blog_admins`, checked by RLS.
- `requireAdmin()` gates every admin page and server action as a second layer, but
  removing it still wouldn't grant write access — RLS would reject the query.

This is why it's safe to expose the anon key and why the `service_role` key must
never appear in this project.
