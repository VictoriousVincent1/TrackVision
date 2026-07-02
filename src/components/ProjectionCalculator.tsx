"use client";

import { useState } from "react";

const usd = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

/**
 * Interactive Pathway-to-Graduation teaser. Uses the app's 70/10/10/10 model:
 * 10% each to savings / investment / debt from monthly take-home. Purely
 * illustrative — no data leaves the browser.
 */
export function ProjectionCalculator() {
  const [income, setIncome] = useState(1600);
  const [months, setMonths] = useState(24);
  const [debt, setDebt] = useState(6000);

  const savedByGrad = income * 0.1 * months;
  const investedByGrad = income * 0.1 * months;
  const debtCapacity = income * 0.1 * months;
  const debtRemaining = Math.max(0, debt - debtCapacity);
  const debtFree = debtRemaining <= 0;
  const extraPerMonth = debtFree ? 0 : Math.ceil(debtRemaining / months);

  return (
    <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-2xl shadow-black/40 backdrop-blur">
      <div className="grid md:grid-cols-2">
        {/* Inputs */}
        <div className="space-y-7 border-b border-white/10 p-6 sm:p-8 md:border-b-0 md:border-r">
          <Slider
            label="Monthly take-home"
            value={usd(income)}
            min={400}
            max={5000}
            step={50}
            current={income}
            onChange={setIncome}
          />
          <Slider
            label="Months to graduation"
            value={`${months} mo`}
            min={1}
            max={48}
            step={1}
            current={months}
            onChange={setMonths}
          />
          <Slider
            label="Current debt"
            value={usd(debt)}
            min={0}
            max={40000}
            step={500}
            current={debt}
            onChange={setDebt}
          />
          <p className="text-xs text-slate-500">
            Assumes the 70/10/10/10 plan: 10% each to savings, investment, and debt.
          </p>
        </div>

        {/* Results */}
        <div className="p-6 sm:p-8">
          <p className="text-xs font-medium uppercase tracking-wider text-slate-500">By graduation</p>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <Result label="Saved" value={usd(savedByGrad)} className="text-blue-300" />
            <Result label="Invested" value={usd(investedByGrad)} className="text-purple-300" />
          </div>
          <div className="mt-4">
            <Result
              label={debtFree ? "Debt at graduation" : "Debt remaining"}
              value={debtFree ? usd(0) : usd(debtRemaining)}
              className={debtFree ? "text-emerald-300" : "text-rose-300"}
            />
          </div>

          <div
            className={`mt-6 rounded-xl border px-4 py-3 text-sm ${
              debtFree
                ? "border-emerald-500/20 bg-emerald-500/[0.08] text-emerald-200"
                : "border-amber-500/20 bg-amber-500/[0.08] text-amber-200"
            }`}
          >
            {debtFree ? (
              <>You&apos;re on track to graduate <span className="font-semibold">debt-free</span> 🎉</>
            ) : (
              <>
                Add <span className="font-semibold">{usd(extraPerMonth)}/mo</span> to graduate debt-free.
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  current,
  onChange,
}: {
  label: string;
  value: string;
  min: number;
  max: number;
  step: number;
  current: number;
  onChange: (n: number) => void;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="text-sm text-slate-400">{label}</label>
        <span className="text-sm font-semibold tabular-nums text-white">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={current}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full cursor-pointer accent-blue-500"
        aria-label={label}
      />
    </div>
  );
}

function Result({ label, value, className }: { label: string; value: string; className: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <p className="text-xs text-slate-500">{label}</p>
      <p className={`mt-1 text-2xl font-semibold tabular-nums ${className}`}>{value}</p>
    </div>
  );
}
