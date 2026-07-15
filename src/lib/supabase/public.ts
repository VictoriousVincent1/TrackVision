import { createClient as createSupabaseClient } from "@supabase/supabase-js";

/**
 * Anonymous, cookie-free client for the public blog pages.
 *
 * Deliberately NOT the cookie-aware server client: reading cookies opts a route
 * out of static rendering, and the blog should prerender and serve from cache
 * (see `revalidate` in the blog pages, refreshed by revalidatePath on publish).
 * Always the anon role, so RLS limits it to published posts.
 */
export function createPublicClient() {
  return createSupabaseClient(
    requireEnv("NEXT_PUBLIC_SUPABASE_URL"),
    requireEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY"),
    { auth: { persistSession: false, autoRefreshToken: false } },
  );
}

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(
      `Missing ${name}. Copy .env.example to .env.local and fill in your Supabase project settings.`,
    );
  }
  return value;
}
