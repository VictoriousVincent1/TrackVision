"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type Status = "idle" | "loading" | "error";

export function LoginForm({ className = "" }: { className?: string }) {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage(null);
    setStatus("loading");

    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") ?? "").trim();
    const password = String(fd.get("password") ?? "");

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setStatus("error");
      setMessage(
        error.message === "Invalid login credentials"
          ? "Wrong email or password."
          : error.message,
      );
      return;
    }

    // The browser client just wrote the session cookie; refresh() lets the
    // server re-render /admin with it, and requireAdmin() takes it from there.
    router.replace("/admin");
    router.refresh();
  }

  return (
    <div className={className}>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="admin-email" className="block text-sm text-slate-400">
            Email
          </label>
          <input
            id="admin-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            disabled={status === "loading"}
            className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none ring-blue-500/50 focus:border-blue-500/50 focus:ring-2 disabled:opacity-60"
          />
        </div>

        <div>
          <label htmlFor="admin-password" className="block text-sm text-slate-400">
            Password
          </label>
          <input
            id="admin-password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            disabled={status === "loading"}
            className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-blue-500/50 focus:border-blue-500/50 focus:ring-2 disabled:opacity-60"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-full bg-gradient-to-r from-blue-500 to-teal-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:brightness-110 disabled:opacity-70"
        >
          {status === "loading" ? "Signing in…" : "Sign in"}
        </button>
      </form>

      {message ? (
        <p className="mt-4 text-sm text-amber-300" role="status" aria-live="polite">
          {message}
        </p>
      ) : null}
    </div>
  );
}
