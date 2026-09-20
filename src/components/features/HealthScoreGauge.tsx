"use client";

import { useInView } from "@/lib/useInView";
import { useCountUp } from "@/lib/useCountUp";

const score = 73;

/**
 * The Financial Health Score, as a fuel gauge: colored zones (red/amber/
 * green) with a needle that sweeps up to the score once the section scrolls
 * into view, plus the number counting up alongside it.
 */
export function HealthScoreGauge() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const animatedScore = useCountUp(score, 1800, inView);
  const needleAngle = -90 + ((inView ? score : 0) / 100) * 180;

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="relative w-full max-w-xs">
        <svg viewBox="0 0 200 120" className="w-full">
          <path
            d="M20,108 A80,80 0 0,1 75.3,31.9"
            fill="none"
            stroke="#f43f5e"
            strokeWidth="14"
            strokeLinecap="round"
            opacity={0.85}
          />
          <path
            d="M75.3,31.9 A80,80 0 0,1 147.02,43.28"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="14"
            strokeLinecap="round"
            opacity={0.85}
          />
          <path
            d="M147.02,43.28 A80,80 0 0,1 180,108"
            fill="none"
            stroke="#34d399"
            strokeWidth="14"
            strokeLinecap="round"
            opacity={0.85}
          />
          <circle cx="100" cy="108" r="6" fill="white" />
        </svg>

        {/* needle — an HTML overlay rather than an SVG transform, so
            transform-origin percentages behave predictably across browsers */}
        <div
          className="absolute w-[3px] origin-bottom rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.7)] transition-transform duration-[1600ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          style={{
            left: "calc(50% - 1.5px)",
            bottom: "10%",
            height: "57%",
            transform: `rotate(${needleAngle}deg)`,
          }}
        />
      </div>

      <p className="-mt-2 text-4xl font-semibold tabular-nums text-white">{Math.round(animatedScore)}</p>
      <p className="text-sm font-medium text-emerald-300">Good · updated daily</p>
    </div>
  );
}
