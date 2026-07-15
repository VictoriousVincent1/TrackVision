import { createClient as createSupabaseClient } from "@supabase/supabase-js";

/**
 * Anonymous, cookie-free client for the public blog pages.
 *
 * Deliberately NOT the cookie-aware server client: reading cookies opts a route
 * out of static rendering, and the blog should prerender and serve from cache
 * (see `revalidate` in the blog pages, refreshed by revalidatePath on publish).
 * Always the anon role, so RLS limits it to published posts.
 *
 * Returns null when Supabase isn't configured. The blog is optional and
 * unlisted, so it must not be able to fail the build of the rest of the site:
 * /blog is prerendered, and throwing here would abort `next build` entirely.
 * Callers render an empty state instead; the blog starts working on its own
 * once the env vars are set.
 */
export function createPublicClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) return null;

  return createSupabaseClient(url, anonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
