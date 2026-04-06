"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function WaitlistForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage(null);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const email = String(fd.get("email") ?? "").trim();

    if (!email) {
      setStatus("error");
      setMessage("Enter your school or personal email.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Try again.");
        return;
      }

      setStatus("success");
      setMessage("You’re on the list—we’ll be in touch.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Network error. Check your connection and try again.");
    }
  }

  return (
    <div className="mt-10">
      <form
        className="flex flex-col gap-3 sm:flex-row sm:justify-center"
        onSubmit={handleSubmit}
      >
        <label htmlFor="waitlist-email" className="sr-only">
          Email
        </label>
        <input
          id="waitlist-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          disabled={status === "loading"}
          placeholder="you@example.com"
          className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-slate-500 outline-none ring-emerald-500/50 focus:border-emerald-500/50 focus:ring-2 enabled:hover:border-white/25 disabled:opacity-60 sm:max-w-xs"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 disabled:opacity-70"
        >
          {status === "loading" ? "Saving…" : "Join student waitlist"}
        </button>
      </form>

      {message ? (
        <p
          className={
            status === "success"
              ? "mt-4 text-sm text-emerald-400"
              : "mt-4 text-sm text-amber-300"
          }
          role="status"
          aria-live="polite"
        >
          {message}
        </p>
      ) : null}
    </div>
  );
}
