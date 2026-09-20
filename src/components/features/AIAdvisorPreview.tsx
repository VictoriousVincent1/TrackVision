"use client";

import { useInView } from "@/lib/useInView";

/**
 * The AI Advisor, as a live chat preview: a scripted exchange that plays on
 * a loop once the section scrolls into view — question, typing indicator,
 * then a grounded answer — rather than a static screenshot of a chat.
 */
export function AIAdvisorPreview() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className="mx-auto w-full max-w-sm rounded-2xl border border-white/10 bg-slate-950/60 p-4">
      <div className="flex items-center gap-2 border-b border-white/10 pb-3">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-purple-400 text-xs">
          ✨
        </span>
        <span className="text-xs font-medium text-slate-300">AI Advisor</span>
      </div>

      <div className="mt-4 space-y-3 text-sm">
        <div
          className={`ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-blue-500/90 px-3.5 py-2 text-white opacity-0 ${
            inView ? "animate-chat-user" : ""
          }`}
        >
          Can I afford a $12k car loan?
        </div>

        <div
          className={`flex w-fit items-center gap-1 rounded-2xl rounded-bl-sm bg-white/10 px-3.5 py-2.5 opacity-0 ${
            inView ? "animate-chat-typing" : ""
          }`}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>

        <div
          className={`max-w-[85%] rounded-2xl rounded-bl-sm bg-white/10 px-3.5 py-2 text-slate-100 opacity-0 ${
            inView ? "animate-chat-advisor" : ""
          }`}
        >
          Wait 4 months at your current savings rate — you&apos;ll qualify for 6.2% instead of 11%.
        </div>
      </div>
    </div>
  );
}
