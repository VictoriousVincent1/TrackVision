import type { Metadata } from "next";
import { BrandLogo } from "@/components/BrandLogo";
import { LoginForm } from "@/components/admin/LoginForm";

export const metadata: Metadata = {
  title: "Admin sign in — Movus",
  robots: { index: false, follow: false },
};

type PageProps = {
  searchParams: Promise<{ error?: string }>;
};

export default async function AdminLoginPage({ searchParams }: PageProps) {
  const { error } = await searchParams;

  return (
    <div className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-slate-950 px-4 text-slate-100">
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
        <div className="absolute -left-1/4 top-0 h-[520px] w-[520px] rounded-full bg-blue-600/25 blur-[120px]" />
        <div className="absolute -right-1/4 bottom-0 h-[420px] w-[420px] rounded-full bg-teal-400/20 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-sm">
        <div className="flex justify-center">
          <BrandLogo size="md" href="/" />
        </div>
        <h1 className="mt-8 text-center text-2xl font-semibold tracking-tight text-white">
          Admin sign in
        </h1>
        <p className="mt-2 text-center text-sm text-slate-400">
          Authoring access for the Movus blog.
        </p>

        {error === "not-admin" ? (
          <p className="mt-6 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-200">
            That account is signed in but isn’t on the blog admin list.
          </p>
        ) : null}

        <LoginForm className="mt-8" />
      </div>
    </div>
  );
}
