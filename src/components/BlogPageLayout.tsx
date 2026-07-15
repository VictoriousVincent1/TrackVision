import Link from "next/link";
import type { ReactNode } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { APP_STORE_URL } from "@/lib/site";

type BlogPageLayoutProps = {
  children: ReactNode;
  /** Wider on the index (card grid) than on an article (readable measure). */
  width?: "prose" | "wide";
};

export function BlogPageLayout({
  children,
  width = "wide",
}: BlogPageLayoutProps) {
  const maxWidth = width === "prose" ? "max-w-3xl" : "max-w-5xl";

  return (
    <div className="relative min-h-dvh overflow-x-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
        <div className="absolute -left-1/4 top-0 h-[520px] w-[520px] rounded-full bg-blue-600/25 blur-[120px]" />
        <div className="absolute -right-1/4 top-1/3 h-[420px] w-[420px] rounded-full bg-teal-400/20 blur-[100px]" />
      </div>

      <div className="relative z-10 flex min-h-dvh flex-col">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
          <div className={`mx-auto flex h-16 ${maxWidth} items-center justify-between gap-4 px-4 sm:px-6`}>
            <BrandLogo size="md" />
            <div className="flex items-center gap-6">
              <Link
                href="/blog"
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                Blog
              </Link>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-white/10 transition hover:bg-slate-100"
              >
                Download free
              </a>
            </div>
          </div>
        </header>

        <main className="flex-1 py-12 sm:py-16">
          <div className={`mx-auto ${maxWidth} px-4 sm:px-6`}>{children}</div>
        </main>

        <footer className="border-t border-white/10 py-10">
          <div className={`mx-auto flex ${maxWidth} flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6`}>
            <BrandLogo size="sm" />
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
            </div>
            <p className="text-xs text-slate-600">© {new Date().getFullYear()} Movus</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
