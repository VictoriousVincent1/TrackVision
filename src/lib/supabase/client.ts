import { createBrowserClient } from "@supabase/ssr";

/**
 * Supabase client for Client Components — used by the admin login form and the
 * cover-image uploader. Only the anon key is ever exposed here; RLS is what
 * actually protects the data.
 */
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
