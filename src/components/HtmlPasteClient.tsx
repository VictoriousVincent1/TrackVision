"use client";

import { useCallback, useState } from "react";

const PLACEHOLDER = `<!DOCTYPE html>
<html>
  <head><title>Example</title></head>
  <body>
    <h1>Paste your HTML here</h1>
    <p>Preview updates as you type.</p>
  </body>
</html>`;

export function HtmlPasteClient() {
  const [html, setHtml] = useState("");

  const handleClear = useCallback(() => setHtml(""), []);

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-4 lg:flex-row lg:gap-0">
      <section className="flex min-h-[40vh] flex-1 flex-col border-b border-zinc-200 dark:border-zinc-800 lg:min-h-0 lg:border-b-0 lg:border-r">
        <header className="flex shrink-0 items-center justify-between gap-2 border-b border-zinc-200 bg-zinc-50 px-3 py-2 dark:border-zinc-800 dark:bg-zinc-900/50">
          <h2 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            HTML
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-xs tabular-nums text-zinc-500">
              {html.length.toLocaleString()} chars
            </span>
            <button
              type="button"
              onClick={handleClear}
              className="rounded-md border border-zinc-300 bg-white px-2 py-1 text-xs font-medium text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
            >
              Clear
            </button>
          </div>
        </header>
        <textarea
          value={html}
          onChange={(e) => setHtml(e.target.value)}
          spellCheck={false}
          placeholder={PLACEHOLDER}
          className="min-h-0 flex-1 resize-none border-0 bg-white p-4 font-mono text-sm leading-relaxed text-zinc-900 outline-none placeholder:text-zinc-400 focus:ring-0 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-600"
          aria-label="HTML source"
        />
      </section>

      <section className="flex min-h-[40vh] flex-1 flex-col lg:min-h-0">
        <header className="shrink-0 border-b border-zinc-200 bg-zinc-50 px-3 py-2 dark:border-zinc-800 dark:bg-zinc-900/50">
          <h2 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Preview
          </h2>
        </header>
        <div className="relative min-h-0 flex-1 bg-zinc-100 dark:bg-zinc-900">
          {html.trim() === "" ? (
            <p className="absolute inset-0 flex items-center justify-center p-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
              Paste or type HTML on the left to see a live preview.
            </p>
          ) : (
            <iframe
              title="HTML preview"
              sandbox="allow-scripts allow-forms allow-popups"
              srcDoc={html}
              className="h-full w-full border-0 bg-white dark:bg-zinc-950"
            />
          )}
        </div>
      </section>
    </div>
  );
}
