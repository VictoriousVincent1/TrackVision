"use client";

import { FormEvent } from "react";

export function WaitlistForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form
      className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center"
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
        placeholder="you@example.com"
        className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-slate-500 outline-none ring-emerald-500/50 focus:border-emerald-500/50 focus:ring-2 sm:max-w-xs"
      />
      <button
        type="submit"
        className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
      >
        Join student waitlist
      </button>
    </form>
  );
}
