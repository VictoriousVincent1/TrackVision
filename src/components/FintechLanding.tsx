import Link from "next/link";
import { WaitlistForm } from "@/components/WaitlistForm";

const nav = [
  { label: "Students & new grads", href: "#product" },
  { label: "Security", href: "#security" },
  { label: "Pricing", href: "#pricing" },
];

const features = [
  {
    title: "One map for graduation & beyond",
    description:
      "Link accounts, see loans, rent, and your first paycheck in one place—so the jump from campus to career doesn’t feel like guesswork.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
  {
    title: "Smart consumer mode",
    description:
      "Spot subscription creep, compare wants vs needs, and set guardrails before you swipe—habits that compound into real financial freedom.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423L16.5 15.75l.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: "Cost-of-living that fits your city",
    description:
      "Model a move from campus to your first metro—rent, taxes, transit—and auto-adjust budgets so your lifestyle matches local reality.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Runway for financial freedom",
    description:
      "Track emergency fund progress, debt paydown, and “future you” goals—with nudges when you’re off pace, not guilt when you’re not.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "2×", label: "Clearer picture vs. checking app alone*" },
  { value: "50+ metros", label: "Cost-of-living templates to try" },
  { value: "$0", label: "Core student tier at launch" },
];

export function FintechLanding() {
  return (
    <div className="relative min-h-dvh overflow-x-hidden bg-slate-950 text-slate-100">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
      >
        <div className="absolute -left-1/4 top-0 h-[520px] w-[520px] rounded-full bg-emerald-500/30 blur-[120px]" />
        <div className="absolute -right-1/4 top-1/3 h-[420px] w-[420px] rounded-full bg-teal-400/20 blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full bg-cyan-500/15 blur-[90px]" />
      </div>

      <div className="relative z-10">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-teal-600 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/25">
                TV
              </span>
              TrackVision
            </Link>

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

            <div className="flex items-center gap-3">
              <Link
                href="/paste"
                className="hidden text-sm text-slate-400 transition-colors hover:text-white sm:inline"
              >
                HTML lab
              </Link>
              <a
                href="#waitlist"
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-white/10 transition hover:bg-slate-100"
              >
                Student waitlist
              </a>
            </div>
          </div>
        </header>

        <main>
          <section className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24 md:pb-28">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Built with students & new grads in mind
              </p>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl md:leading-[1.08]">
                Graduate toward{" "}
                <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                  financial freedom
                </span>
                <span className="text-slate-500">—</span> spend smart, live a cost-of-living-smart life after graduation.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
                TrackVision helps you plan past the diploma: adjust for real cost of living, build smarter spending habits, and see your runway—from first big-city rent to crushing loans—without shame or spreadsheets.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#waitlist"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:brightness-110"
                >
                  Join the student waitlist
                </a>
                <a
                  href="#product"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-medium text-white backdrop-blur transition hover:border-white/25 hover:bg-white/10"
                >
                  How it helps after graduation
                </a>
              </div>
              <p className="mt-6 text-xs text-slate-500">
                Student-friendly pricing at launch. Link accounts read-only; upgrade only when you want automations.
              </p>
            </div>

            <div className="relative mt-16 md:mt-20">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-emerald-500/20 via-transparent to-teal-500/10 blur-2xl md:-inset-8" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 shadow-2xl shadow-black/50 backdrop-blur">
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 flex-1 truncate text-center text-xs text-slate-500">
                    app.trackvision.money / overview
                  </span>
                </div>
                <div className="grid gap-px bg-white/5 md:grid-cols-3">
                  <div className="bg-slate-900/90 p-6 md:col-span-2">
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                      Post-grad runway
                    </p>
                    <p className="mt-2 text-3xl font-semibold tabular-nums text-white">142 days</p>
                    <p className="mt-1 text-sm text-emerald-400">COL-adjusted for your city</p>
                    <div className="mt-6 h-28 rounded-lg bg-gradient-to-t from-emerald-500/10 to-transparent">
                      <div className="flex h-full items-end gap-1 px-2 pb-2 pt-4">
                        {[40, 55, 48, 62, 58, 72, 68, 85, 80, 92, 88, 95].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t bg-emerald-500/60"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-px bg-white/5">
                    <div className="bg-slate-900/90 p-5">
                      <p className="text-xs text-slate-500">Smart spend (this week)</p>
                      <p className="mt-1 text-xl font-semibold tabular-nums text-white">$186</p>
                    </div>
                    <div className="bg-slate-900/90 p-5">
                      <p className="text-xs text-slate-500">Freedom goals</p>
                      <p className="mt-1 text-xl font-semibold text-emerald-300">3 on track</p>
                    </div>
                    <div className="bg-slate-900/90 p-5">
                      <p className="text-xs text-slate-500">Loan / rent</p>
                      <p className="mt-1 text-sm font-medium text-white">Loan min · 4 days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="product" className="border-t border-white/10 bg-slate-950/50 py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  From “broke college kid” to intentional adulting.
                </h2>
                <p className="mt-4 text-lg text-slate-400">
                  You’re not bad with money—you’re adapting to a new income, new rent, and new temptations. TrackVision is the coach in your pocket for smarter trade-offs and a lifestyle that fits your city, not your feed.
                </p>
              </div>
              <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {features.map((f) => (
                  <div
                    key={f.title}
                    className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-emerald-500/30 hover:bg-white/[0.05]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 transition group-hover:bg-emerald-500/20">
                      {f.icon}
                    </div>
                    <h3 className="mt-5 font-semibold text-white">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

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
            <p className="mx-auto mt-6 max-w-3xl px-4 text-center text-xs text-slate-500 sm:px-6">
              * Illustrative messaging; your experience depends on what you link and your goals.
            </p>
          </section>

          <section id="security" className="border-t border-white/10 py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
                <div>
                  <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    Security first, always.
                  </h2>
                  <p className="mt-4 text-lg text-slate-400">
                    Your aid, side-hustle deposits, and first salary are sensitive—we treat them that way. Read-only linking by default; disconnect anytime.
                  </p>
                  <ul className="mt-8 space-y-4 text-slate-300">
                    {[
                      "SOC 2 Type II in progress; security reviews available under NDA",
                      "Encryption at rest (AES-256) and TLS 1.2+ in transit",
                      "We don’t sell your financial profile to advertisers",
                    ].map((line) => (
                      <li key={line} className="flex gap-3 text-sm leading-relaxed">
                        <span className="mt-0.5 shrink-0 text-emerald-400">✓</span>
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Compliance posture
                  </p>
                  <div className="mt-6 space-y-4">
                    {[
                      { k: "Data residency", v: "US & CA regions" },
                      { k: "Session security", v: "Passkeys + WebAuthn" },
                      { k: "Incident response", v: "24/7 on-call" },
                    ].map((row) => (
                      <div
                        key={row.k}
                        className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0 last:pb-0"
                      >
                        <span className="text-sm text-slate-400">{row.k}</span>
                        <span className="text-sm font-medium text-white">{row.v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="pricing" className="border-t border-white/10 bg-slate-950/50 py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Pricing that respects a student budget</h2>
                <p className="mt-4 text-lg text-slate-400">
                  Start free while you build habits. Add automations when your paycheck stabilizes—or split Vision+ with a roommate.
                </p>
              </div>
              <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                  <p className="text-sm font-medium text-emerald-300">Track</p>
                  <p className="mt-2 text-4xl font-semibold text-white">$0</p>
                  <p className="mt-1 text-sm text-slate-400">per month</p>
                  <ul className="mt-8 space-y-3 text-sm text-slate-300">
                    <li className="flex gap-2"><span className="text-emerald-400">✓</span> Linked accounts & campus-to-career view</li>
                    <li className="flex gap-2"><span className="text-emerald-400">✓</span> COL templates & spending timeline</li>
                    <li className="flex gap-2"><span className="text-emerald-400">✓</span> Smart spend & subscription nudges</li>
                  </ul>
                </div>
                <div className="relative rounded-2xl border border-emerald-500/40 bg-gradient-to-b from-emerald-500/10 to-slate-900/80 p-8 shadow-xl shadow-emerald-500/10">
                  <span className="absolute -top-3 right-6 rounded-full bg-emerald-400 px-3 py-0.5 text-xs font-semibold text-slate-950">
                    Popular
                  </span>
                  <p className="text-sm font-medium text-emerald-300">Vision+</p>
                  <p className="mt-2 text-4xl font-semibold text-white">$12</p>
                  <p className="mt-1 text-sm text-slate-400">per month, billed yearly</p>
                  <ul className="mt-8 space-y-3 text-sm text-slate-200">
                    <li className="flex gap-2"><span className="text-emerald-400">✓</span> Everything in Track</li>
                    <li className="flex gap-2"><span className="text-emerald-400">✓</span> Auto-transfers for loans & emergency fund</li>
                    <li className="flex gap-2"><span className="text-emerald-400">✓</span> Roommate / partner shared view (optional)</li>
                    <li className="flex gap-2"><span className="text-emerald-400">✓</span> Priority support for first-job moves</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="waitlist" className="border-t border-white/10 py-20 sm:py-28">
            <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Snag your spot before cap & gown season.
              </h2>
              <p className="mt-4 text-lg text-slate-400">
                Get the invite, a grad money checklist, and tips for adjusting your budget to your first city’s cost of living.
              </p>
              <WaitlistForm />
              <p className="mt-4 text-xs text-slate-500">
                We’ll only email you about TrackVision. Unsubscribe anytime.
              </p>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 py-10">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
            <div className="flex items-center gap-2 font-semibold text-white">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-emerald-400 to-teal-600 text-xs font-bold text-slate-950">
                TV
              </span>
              TrackVision
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
              <a href="#security" className="hover:text-white">
                Privacy
              </a>
              <a href="#security" className="hover:text-white">
                Terms
              </a>
              <Link href="/paste" className="hover:text-white">
                HTML lab
              </Link>
            </div>
            <p className="text-xs text-slate-600">© {new Date().getFullYear()} TrackVision</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
