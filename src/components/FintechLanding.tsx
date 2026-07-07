import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { SectionImage } from "@/components/SectionImage";
import { WaitlistForm } from "@/components/WaitlistForm";
import { ProjectionCalculator } from "@/components/ProjectionCalculator";

const landingImages = {
  hero: "/images/pool.jpeg",
  security:
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
  waitlist:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
} as const;

const nav = [
  { label: "How it works", href: "#product" },
  { label: "Projections", href: "#projection" },
  { label: "Pricing", href: "#pricing" },
];

// Widely reported U.S. figures used to frame the problem. Keep citations handy
// (see footnote) — these are industry context, not Movus statistics.
const realityStats = [
  { value: "$1.7T+", label: "in U.S. student loan debt" },
  { value: "~$38K", label: "average loan balance per borrower" },
  { value: "7 in 10", label: "students say money is a top stressor" },
];

const features = [
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
    title: "Pathway to Graduation",
    description:
      "See exactly where your plan takes you—savings, debt, and investments projected to your graduation date, with on-track/off-track alerts.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: "AI money coach",
    description:
      "Chat with an advisor that already knows your budget, goals, and debts—plus a weekly check-in that spots one win and one thing to watch.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
  },
  {
    title: "Financial Health Score",
    description:
      "A single 0–100 score from five factors, tracked daily so your progress is something you can actually watch climb.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h12M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-18 8.25h18M8.25 12l3 3 4.5-6" />
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
  { value: "7-day", label: "free trial of Premium — cancel anytime" },
];

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
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href="#waitlist"
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-white/10 transition hover:bg-slate-100"
            >
              Student waitlist
            </a>
          </div>
        </header>

        <main>
          {/* HERO */}
          <section className="mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pt-24">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="max-w-xl lg:max-w-none">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Built for students &amp; new grads
                </span>
                <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl md:leading-[1.08]">
                  See yourself{" "}
                  <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                    graduate debt-smart
                  </span>
                  <span className="text-slate-500">.</span>
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-slate-400">
                  Movus turns every paycheck into a simple 70/10/10/10 plan
                  and projects your savings, debt, and investments all the way to
                  your graduation date.
                </p>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="#waitlist"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-teal-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:brightness-110"
                  >
                    Join the student waitlist
                  </a>
                  <a
                    href="#projection"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-medium text-white backdrop-blur transition hover:border-white/25 hover:bg-white/10"
                  >
                    See a graduation projection
                  </a>
                </div>

                {/* quick-hit chips */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {["70/10/10/10 plan", "Graduation projections", "AI money coach", "7-day free trial"].map(
                    (chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300"
                      >
                        {chip}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <SectionImage
                src={landingImages.hero}
                alt="Rooftop pool overlooking the city at sunset"
                priority
                aspect="portrait"
                objectPosition="center 35%"
                className="ring-1 ring-blue-500/20"
              />
            </div>

            {/* DASHBOARD MOCKUP — mirrors the real app dashboard */}
            <div className="relative mt-16 md:mt-20">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-blue-500/20 via-transparent to-purple-500/10 blur-2xl md:-inset-8" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 shadow-2xl shadow-black/50 backdrop-blur">
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 flex-1 truncate text-center text-xs text-slate-500">
                    Movus · Dashboard
                  </span>
                </div>
                <div className="grid gap-px bg-white/5 md:grid-cols-3">
                  {/* Financial Health + Budget Pulse */}
                  <div className="bg-slate-900/90 p-6 md:col-span-2">
                    <div className="flex items-center gap-4">
                      <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/15">
                        <span className="text-2xl font-semibold tabular-nums text-blue-300">73</span>
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                          Financial health
                        </p>
                        <p className="text-lg font-semibold text-white">Good · 73/100</p>
                        <p className="text-xs text-emerald-400">+6 this month</p>
                      </div>
                    </div>

                    <p className="mt-6 text-xs font-medium uppercase tracking-wider text-slate-500">
                      Budget Pulse · 70/10/10/10
                    </p>
                    <div className="mt-3 space-y-2.5">
                      {[
                        { label: "Living", pct: 62, color: "bg-emerald-500" },
                        { label: "Debt", pct: 100, color: "bg-rose-500" },
                        { label: "Savings", pct: 85, color: "bg-blue-500" },
                        { label: "Invest", pct: 40, color: "bg-purple-500" },
                      ].map((row) => (
                        <div key={row.label} className="flex items-center gap-3">
                          <span className="w-14 text-xs text-slate-400">{row.label}</span>
                          <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                            <div className={`h-full rounded-full ${row.color}`} style={{ width: `${row.pct}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pathway projection sidebar */}
                  <div className="space-y-px bg-white/5">
                    <div className="bg-slate-900/90 p-5">
                      <p className="text-xs text-slate-500">Savings by graduation</p>
                      <p className="mt-1 text-xl font-semibold tabular-nums text-blue-300">$5,400</p>
                    </div>
                    <div className="bg-slate-900/90 p-5">
                      <p className="text-xs text-slate-500">Debt at graduation</p>
                      <p className="mt-1 text-xl font-semibold tabular-nums text-emerald-300">$0</p>
                    </div>
                    <div className="bg-slate-900/90 p-5">
                      <p className="text-xs text-slate-500">Pathway status</p>
                      <p className="mt-1 text-sm font-medium text-emerald-300">On track · Jun 2028</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-center text-xs text-slate-600">Example dashboard for illustration.</p>
            </div>
          </section>

          {/* THE REALITY (student stats) */}
          <section className="border-t border-white/10 bg-slate-950/50 py-16 sm:py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <p className="text-center text-sm font-medium uppercase tracking-wider text-slate-500">
                The reality for students
              </p>
              <div className="mx-auto mt-8 grid max-w-4xl gap-6 sm:grid-cols-3">
                {realityStats.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-4xl font-semibold tabular-nums text-white sm:text-5xl">{s.value}</p>
                    <p className="mt-2 text-sm text-slate-400">{s.label}</p>
                  </div>
                ))}
              </div>
              <p className="mx-auto mt-8 max-w-2xl text-center text-lg text-slate-300">
                Nobody handed you a class on this. Movus is the money coach
                that turns the overwhelming into a plan you can actually follow.
              </p>
              <p className="mx-auto mt-4 max-w-3xl text-center text-xs text-slate-600">
                * Widely reported U.S. figures shown for context, not Movus results.
              </p>
            </div>
          </section>

          {/* PRODUCT / FEATURES */}
          <section id="product" className="border-t border-white/10 py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((f) => (
                  <div
                    key={f.title}
                    className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-blue-500/30 hover:bg-white/[0.05]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300 transition group-hover:bg-blue-500/20">
                      {f.icon}
                    </div>
                    <h3 className="mt-5 font-semibold text-white">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PROJECTION SPOTLIGHT */}
          <section id="projection" className="border-t border-white/10 bg-slate-950/50 py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Know your finish line before you get there.
                </h2>
                <p className="mt-4 text-lg text-slate-400">
                  Pathway to Graduation turns today&apos;s plan into tomorrow&apos;s
                  numbers—so you can adjust now, while it still counts.
                </p>
              </div>

              <ProjectionCalculator />
              <p className="mx-auto mt-4 max-w-3xl text-center text-xs text-slate-600">
                Interactive estimate for illustration; your real numbers depend on your income, plan, and goals.
              </p>
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
                  <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    Your money data, treated like it&apos;s yours.
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

          {/* PRICING (aligned to the app) */}
          <section id="pricing" className="border-t border-white/10 bg-slate-950/50 py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Priced for a student budget
                </h2>
                <p className="mt-4 text-lg text-slate-400">
                  Start free and build the habit. Upgrade for the AI coach and
                  deeper insights—with a 7-day free trial, cancel anytime.
                </p>
              </div>
              <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                  <p className="text-sm font-medium text-blue-300">Free</p>
                  <p className="mt-2 text-4xl font-semibold text-white">$0</p>
                  <p className="mt-1 text-sm text-slate-400">forever</p>
                  <ul className="mt-8 space-y-3 text-sm text-slate-300">
                    <li className="flex gap-2"><span className="text-emerald-400">✓</span> 70/10/10/10 budgeting</li>
                    <li className="flex gap-2"><span className="text-emerald-400">✓</span> Pathway to Graduation projections</li>
                    <li className="flex gap-2"><span className="text-emerald-400">✓</span> Financial Health Score &amp; daily reflections</li>
                  </ul>
                </div>
                <div className="relative rounded-2xl border border-blue-500/40 bg-gradient-to-b from-blue-500/10 to-slate-900/80 p-8 shadow-xl shadow-blue-500/10">
                  <span className="absolute -top-3 right-6 rounded-full bg-blue-400 px-3 py-0.5 text-xs font-semibold text-slate-950">
                    Save 33%
                  </span>
                  <p className="text-sm font-medium text-blue-300">Premium</p>
                  <p className="mt-2 text-4xl font-semibold text-white">
                    $6.67<span className="text-lg font-normal text-slate-400">/mo</span>
                  </p>
                  <p className="mt-1 text-sm text-slate-400">billed yearly ($79.99) · or $9.99 monthly</p>
                  <ul className="mt-8 space-y-3 text-sm text-slate-200">
                    <li className="flex gap-2"><span className="text-emerald-400">✓</span> Everything in Free</li>
                    <li className="flex gap-2"><span className="text-emerald-400">✓</span> Unlimited AI advisor &amp; weekly insights</li>
                    <li className="flex gap-2"><span className="text-emerald-400">✓</span> Advanced trends &amp; report exports</li>
                    <li className="flex gap-2"><span className="text-emerald-400">✓</span> 7-day free trial · cancel anytime</li>
                  </ul>
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
                  <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    Get in before graduation season.
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
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
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
