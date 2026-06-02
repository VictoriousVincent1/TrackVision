import Link from "next/link";
import type { ReactNode } from "react";
import { BrandLogo } from "@/components/BrandLogo";

type LegalPageLayoutProps = {
  title: string;
  lastUpdated?: string;
  children: ReactNode;
};

export function LegalPageLayout({
  title,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  return (
    <div className="relative min-h-dvh overflow-x-hidden bg-slate-950 text-slate-100">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
      >
        <div className="absolute -left-1/4 top-0 h-[520px] w-[520px] rounded-full bg-emerald-500/30 blur-[120px]" />
        <div className="absolute -right-1/4 top-1/3 h-[420px] w-[420px] rounded-full bg-teal-400/20 blur-[100px]" />
      </div>

      <div className="relative z-10 flex min-h-dvh flex-col">
        <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
          <div className="mx-auto flex h-16 max-w-3xl items-center justify-between gap-4 px-4 sm:px-6">
            <BrandLogo size="md" />
            <Link
              href="/"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              ← Back to home
            </Link>
          </div>
        </header>

        <main className="flex-1 py-12 sm:py-16">
          <article className="mx-auto max-w-3xl px-4 sm:px-6">
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {title}
            </h1>
            {lastUpdated ? (
              <p className="mt-2 text-sm text-slate-500">
                Last updated: {lastUpdated}
              </p>
            ) : null}
            <div className="mt-10 space-y-8 text-slate-300">{children}</div>
          </article>
        </main>

        <footer className="border-t border-white/10 py-10">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
            <BrandLogo size="sm" />
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
            </div>
            <p className="text-xs text-slate-600">
              © {new Date().getFullYear()} TrackVision
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
