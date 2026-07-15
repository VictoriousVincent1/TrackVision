import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export type AdminSession = {
  userId: string;
  email: string;
};

/**
 * Gate for every /admin page and mutation.
 *
 * Uses getUser() rather than getSession(): getSession() only decodes the cookie,
 * which the client could have forged, while getUser() validates the token with
 * Supabase. Membership in blog_admins is the second gate — and RLS enforces the
 * same rule at the database, so a miss here can't leak write access.
 */
export async function requireAdmin(): Promise<AdminSession> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/admin/login");

  const { data: adminRow, error } = await supabase
    .from("blog_admins")
    .select("user_id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (error) {
    console.error("[admin] admin lookup failed:", error);
  }

  if (!adminRow) redirect("/admin/login?error=not-admin");

  return { userId: user.id, email: user.email ?? "" };
}
