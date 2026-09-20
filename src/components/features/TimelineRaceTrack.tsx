"use client";

import { useInView } from "@/lib/useInView";
import { useCountUp } from "@/lib/useCountUp";

// "Today" isn't its own post — the moving marker starts there, so a
// separate flag icon at the same spot would just overlap it.
const milestones = [
  { year: "2028", icon: "🚗", position: 32 },
  { year: "2030", icon: "🎓", position: 58 },
  { year: "2033", icon: "🏡", position: 86 },
];

/**
 * The Financial Timeline, as a race track: a marker runs left to right past
 * milestone posts (car, grad school, first home) while the projected net
 * worth counts up alongside it. Plays once the section scrolls into view.
 */
export function TimelineRaceTrack() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const netWorth = useCountUp(48200, 2800, inView);

  return (
    <div ref={ref}>
      <div className="flex items-baseline justify-between">
        <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Projected net worth</p>
        <p className="text-2xl font-semibold tabular-nums text-emerald-300">
          ${Math.round(netWorth).toLocaleString("en-US")}
        </p>
      </div>

      <div className="relative mt-8 h-36 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60">
        {/* lane */}
        <div className="absolute inset-x-6 top-1/2 h-1 -translate-y-1/2 rounded-full bg-white/10" />
        <div
          className="absolute inset-x-6 top-1/2 h-1 -translate-y-1/2 opacity-70"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.4) 0 10px, transparent 10px 22px)",
          }}
        />

        {/* start-of-track label, distinct from the milestone posts */}
        <div className="absolute top-1/2 left-[4%] flex -translate-x-1/2 -translate-y-[2.6rem] flex-col items-center">
          <span className="text-[10px] font-medium text-slate-500">Today</span>
        </div>

        {/* milestone posts */}
        {milestones.map((m) => (
          <div
            key={m.year}
            className="absolute top-1/2 flex -translate-y-1/2 flex-col items-center gap-1"
            style={{ left: `${m.position}%` }}
          >
            <span className="text-lg drop-shadow">{m.icon}</span>
            <span className="h-6 w-px bg-white/20" />
            <span className="text-[10px] font-medium text-slate-400">{m.year}</span>
          </div>
        ))}

        {/* moving marker */}
        <div
          className={`absolute top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-teal-300 text-sm shadow-lg shadow-blue-500/40 ${
            inView ? "animate-race-move" : ""
          }`}
          style={{ left: "4%" }}
        >
          🏁
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-400">
        Add a milestone anywhere on the track — Movus recalculates the loan amount, credit score, and
        net-worth impact instantly.
      </p>
    </div>
  );
}
