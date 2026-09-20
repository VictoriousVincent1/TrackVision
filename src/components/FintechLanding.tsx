import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { SectionImage } from "@/components/SectionImage";
import { WaitlistForm } from "@/components/WaitlistForm";
import { TimelineRaceTrack } from "@/components/features/TimelineRaceTrack";
import { HealthScoreGauge } from "@/components/features/HealthScoreGauge";
import { AIAdvisorPreview } from "@/components/features/AIAdvisorPreview";
import { APP_STORE_URL } from "@/lib/site";

const landingImages = {
  security:
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
  waitlist:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
} as const;

const nav = [
  { label: "How it works", href: "#product" },
  { label: "Blog", href: "/blog" },
];

// Widely reported U.S. figures used to frame the problem. Keep citations handy
// (see footnote) — these are industry context, not Movus statistics.
const realityStats = [
  { value: "$1.7T+", label: "in U.S. student loan debt" },
  { value: "~$38K", label: "average loan balance per borrower" },
  { value: "7 in 10", label: "students say money is a top stressor" },
];

// The three most differentiated features get the full spotlight treatment
// below — a live, animated visual instead of a static icon card.
const topFeatures = [
  {
    id: "timeline",
    eyebrow: "Financial Timeline",
    title: "Watch your future arrive, milestone by milestone.",
    description:
      "Scroll through every year ahead and drop in real milestones — a car, grad school, a first home. Movus calculates the loan amount, credit score, and net-worth impact for each one, live.",
    Visual: TimelineRaceTrack,
  },
  {
    id: "health-score",
    eyebrow: "Financial Health Score",
    title: "One number that actually moves.",
    description:
      "Five factors — savings rate, cash flow, budget discipline, goal feasibility, expense stability — rolled into a single 0–100 score, tracked daily so progress is something you can watch climb.",
    Visual: HealthScoreGauge,
  },
  {
    id: "ai-advisor",
    eyebrow: "AI Advisor",
    title: "A coach that already knows your numbers.",
    description:
      "Ask about any purchase, milestone, or spending pattern and get an answer grounded in your real budget — not generic advice. Reach it from anywhere in the app.",
    Visual: AIAdvisorPreview,
  },
];

// Everything else Movus does, kept as a lighter-weight grid underneath.
const secondaryFeatures = [
  {
    title: "The 70/10/10/10 plan",
    description:
      "Every paycheck splits four ways—Living, Debt, Savings, Investment. One simple rule that builds wealth, not just survives the month.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
      </svg>
    ),
  },
  {
    title: "Semester-smart budgeting",
    description:
      "Budgets that think in paychecks and terms, not just calendar months—with auto-tracked income and bill reminders built for student life.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    title: "Streaks & reflections",
    description:
      "Daily logging streaks and quick private reflections turn budgeting into a habit that sticks—no spreadsheets, no guilt.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
];

// Product highlights — real capabilities, phrased as numbers.
const stats = [
  { value: "70/10/10/10", label: "your whole plan in four numbers" },
  { value: "0–100", label: "financial health score, updated daily" },
  { value: "$0", label: "every feature, free — no subscription" },
];

function AppleIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}

export function FintechLanding() {
  return (
    <div className="relative min-h-dvh overflow-x-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
        <div className="absolute -left-1/4 top-0 h-[520px] w-[520px] rounded-full bg-blue-600/25 blur-[120px]" />
        <div className="absolute -right-1/4 top-1/3 h-[420px] w-[420px] rounded-full bg-teal-400/20 blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full bg-purple-500/15 blur-[90px]" />
      </div>

      <div className="relative z-10">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
            <BrandLogo size="md" priority />
            <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
              {nav.map((item) =>
                item.href.startsWith("#") ? (
                  <a
                    key={item.href}
                    href={item.href}
                    className="font-mono text-xs uppercase tracking-wider text-slate-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-mono text-xs uppercase tracking-wider text-slate-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-4 py-2 font-mono text-xs uppercase tracking-wider text-slate-950 shadow-lg shadow-white/10 transition hover:bg-slate-100"
            >
              Download free
            </a>
          </div>
        </header>

        <main>
          {/* HERO — CSS-atmosphere stand-in for a photographic sky (see
              .hero-atmosphere), serif statement headline, mono UI chrome. */}
          <section className="hero-atmosphere relative isolate overflow-hidden">
            <div className="relative z-10 mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pt-24">
              <div className="mx-auto max-w-3xl text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 font-mono text-xs uppercase tracking-wider text-slate-200 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Built by students, for students
                </span>
                <h1 className="mt-5 font-serif text-5xl leading-[1.05] font-medium tracking-tight text-white sm:text-6xl md:text-7xl">
                  See yourself <em className="italic text-cyan-200">graduate</em> debt-smart.
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
                  Movus turns every paycheck into a simple 70/10/10/10 plan
                  and projects your savings, debt, and investments all the way to
                  your graduation date.
                </p>
                <div className="mt-10 flex justify-center">
                  <a
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 font-mono text-xs uppercase tracking-wider text-slate-950 shadow-lg shadow-black/20 transition hover:bg-slate-100"
                  >
                    <AppleIcon />
                    Download on the App Store
                  </a>
                </div>

                {/* quick-hit chips */}
                <div className="mt-8 flex flex-wrap justify-center gap-2">
                  {["70/10/10/10 plan", "AI money coach", "Free — no subscription"].map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 font-mono text-[11px] uppercase tracking-wide text-slate-300"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* THE REALITY (student stats) */}
          <section className="border-t border-white/10 bg-slate-950/50 py-16 sm:py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <p className="text-center font-mono text-xs uppercase tracking-widest text-slate-500">
                The reality for students
              </p>
              <div className="mx-auto mt-8 grid max-w-4xl gap-6 sm:grid-cols-3">
                {realityStats.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="font-serif text-4xl font-medium tabular-nums text-white sm:text-5xl">{s.value}</p>
                    <p className="mt-2 text-sm text-slate-400">{s.label}</p>
                  </div>
                ))}
              </div>
              <p className="mx-auto mt-8 max-w-2xl text-center font-serif text-2xl leading-snug text-slate-200 sm:text-3xl">
                Nobody handed you a class on this. Movus is the <em className="italic text-cyan-200">money coach</em>{" "}
                that turns the overwhelming into a plan you can actually follow.
              </p>
              <p className="mx-auto mt-4 max-w-3xl text-center text-xs text-slate-600">
                * Widely reported U.S. figures shown for context, not Movus results.
              </p>
            </div>
          </section>

          {/* PRODUCT / TOP 3 FEATURES — live, animated, not screenshots */}
          <section id="product" className="border-t border-white/10 py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <div className="mx-auto max-w-2xl text-center">
                <p className="font-mono text-xs uppercase tracking-widest text-slate-500">The top 3, live</p>
                <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl">
                  Not screenshots. The <em className="italic text-cyan-200">real thing</em>, moving.
                </h2>
              </div>

              <div className="mt-16 space-y-20">
                {topFeatures.map((f, i) => {
                  const Visual = f.Visual;
                  const textBlock = (
                    <div>
                      <p className="font-mono text-xs uppercase tracking-widest text-cyan-300">{f.eyebrow}</p>
                      <h3 className="mt-3 font-serif text-2xl font-medium tracking-tight text-white sm:text-3xl">
                        {f.title}
                      </h3>
                      <p className="mt-4 text-base leading-relaxed text-slate-400">{f.description}</p>
                    </div>
                  );
                  const visualBlock = (
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                      <Visual />
                    </div>
                  );
                  return (
                    <div
                      key={f.id}
                      id={f.id}
                      className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
                    >
                      {i % 2 === 1 ? (
                        <>
                          {visualBlock}
                          {textBlock}
                        </>
                      ) : (
                        <>
                          {textBlock}
                          {visualBlock}
                        </>
                      )}
                    </div>
                  );
                })}
              </div>

              <p className="mx-auto mt-16 max-w-2xl text-center font-mono text-xs uppercase tracking-widest text-slate-500">
                And everything else you&apos;d expect
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {secondaryFeatures.map((f) => (
                  <div
                    key={f.title}
                    className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-blue-500/30 hover:bg-white/[0.05]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300 transition group-hover:bg-blue-500/20">
                      {f.icon}
                    </div>
                    <h4 className="mt-5 font-semibold text-white">{f.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PRODUCT STAT BAND */}
          <section className="py-16 sm:py-20">
            <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-3 sm:px-6">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent px-6 py-8 text-center sm:text-left"
                >
                  <p className="text-3xl font-semibold tabular-nums text-white sm:text-4xl">{s.value}</p>
                  <p className="mt-2 text-sm text-slate-400">{s.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SECURITY (honest) */}
          <section id="security" className="border-t border-white/10 py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
                <div>
                  <h2 className="font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl">
                    Your money data, treated like it&apos;s <em className="italic text-cyan-200">yours</em>.
                  </h2>
                  <p className="mt-4 text-lg text-slate-400">
                    Your budget, goals, and income are private. We build for trust
                    from day one.
                  </p>
                  <ul className="mt-8 space-y-4 text-slate-300">
                    {[
                      "Encrypted in transit and at rest",
                      "We never sell your financial data to advertisers",
                      "Delete your account and all your data anytime, in one tap",
                      "Bank sync (read-only) — coming soon; today you stay in control of what you add",
                    ].map((line) => (
                      <li key={line} className="flex gap-3 text-sm leading-relaxed">
                        <span className="mt-0.5 shrink-0 text-emerald-400">✓</span>
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
                <SectionImage
                  src={landingImages.security}
                  alt="Secure digital banking and data protection"
                  aspect="portrait"
                />
              </div>
            </div>
          </section>

          {/* DOWNLOAD — everything is free */}
          <section id="download" className="border-t border-white/10 bg-slate-950/50 py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <div className="mx-auto max-w-2xl text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs uppercase tracking-wider text-emerald-300">
                  Free, forever
                </span>
                <h2 className="mt-5 font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl">
                  Every feature. <em className="italic text-cyan-200">No subscription.</em>
                </h2>
                <p className="mt-4 text-lg text-slate-400">
                  Movus is free on the App Store—no trial to remember, no card to
                  enter, nothing locked behind an upgrade.
                </p>
              </div>

              <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-blue-500/30 bg-gradient-to-b from-blue-500/10 to-slate-900/80 p-8 shadow-xl shadow-blue-500/10 sm:p-10">
                <ul className="grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
                  {[
                    "70/10/10/10 budgeting",
                    "Pathway to Graduation projections",
                    "Financial Health Score & daily reflections",
                    "AI money coach & weekly insights",
                    "Semester-smart budgets & bill reminders",
                    "Streaks, trends & reflections",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-0.5 shrink-0 text-emerald-400">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex justify-center">
                  <a
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 font-mono text-xs uppercase tracking-wider text-slate-950 shadow-lg shadow-white/10 transition hover:bg-slate-100"
                  >
                    <AppleIcon />
                    Download on the App Store
                  </a>
                </div>
              </div>

              <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-slate-500">
                Not financial advice. Movus provides budgeting tools and general education.
              </p>
            </div>
          </section>

          {/* WAITLIST */}
          <section id="waitlist" className="border-t border-white/10 py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <SectionImage
                  src={landingImages.waitlist}
                  alt="Friends celebrating graduation together outdoors"
                  aspect="video"
                  className="order-2 lg:order-1"
                />
                <div className="order-1 text-center lg:order-2 lg:text-left">
                  <h2 className="font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl">
                    Get in before <em className="italic text-cyan-200">graduation season</em>.
                  </h2>
                  <p className="mt-4 text-lg text-slate-400">
                    Join the waitlist for early access and a free grad-money
                    checklist to start your 70/10/10/10 plan.
                  </p>
                  <WaitlistForm className="mt-8" />
                  <p className="mt-4 text-xs text-slate-500">
                    We&apos;ll only email you about Movus. Unsubscribe anytime.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 py-10">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
            <BrandLogo size="sm" />
            <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-xs uppercase tracking-wider text-slate-500">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                App Store
              </a>
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
