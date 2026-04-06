import { HtmlPasteClient } from "@/components/HtmlPasteClient";
import Link from "next/link";

export default function PastePage() {
  return (
    <div className="flex h-full min-h-0 min-h-dvh flex-col bg-zinc-50 dark:bg-black">
      <header className="shrink-0 border-b border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2">
          <div>
            <h1 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              HTML paste & preview
            </h1>
            <p className="mt-0.5 text-sm text-zinc-600 dark:text-zinc-400">
              Paste full documents or fragments. Preview runs in a sandboxed frame.
            </p>
          </div>
          <Link
            href="/"
            className="text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
          >
            ← Back to TrackVision
          </Link>
        </div>
      </header>
      <HtmlPasteClient />
    </div>
  );
}
