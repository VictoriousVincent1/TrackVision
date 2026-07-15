import Link from "next/link";
import type { ReactNode } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { signOut } from "@/app/admin/actions";

type AdminShellProps = {
  email: string;
  children: ReactNode;
};

export function AdminShell({ email, children }: AdminShellProps) {
  return (
    <div className="relative min-h-dvh bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <BrandLogo size="sm" href="/admin" />
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-slate-400">
              Admin
            </span>
          </div>
          <div className="flex items-center gap-5">
            <Link
              href="/blog"
              className="hidden text-sm text-slate-400 transition-colors hover:text-white sm:block"
            >
              View blog
            </Link>
            <span className="hidden text-xs text-slate-600 md:block">{email}</span>
            <form action={signOut}>
              <button
                type="submit"
                className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-slate-300 transition hover:border-white/30 hover:text-white"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">{children}</main>
    </div>
  );
}
