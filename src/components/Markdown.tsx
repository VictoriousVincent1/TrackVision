import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

// The project has no @tailwindcss/typography plugin, so element styling is
// mapped explicitly. Raw HTML in the source is escaped by react-markdown's
// default — article bodies are trusted-ish, but this keeps a stray <script>
// from ever reaching a reader.
const components: Components = {
  h1: (props) => (
    <h2 className="mt-12 text-2xl font-semibold tracking-tight text-white sm:text-3xl" {...props} />
  ),
  h2: (props) => (
    <h2 className="mt-12 text-2xl font-semibold tracking-tight text-white" {...props} />
  ),
  h3: (props) => (
    <h3 className="mt-8 text-lg font-semibold text-white" {...props} />
  ),
  p: (props) => <p className="mt-5 leading-relaxed text-slate-300" {...props} />,
  a: (props) => (
    <a
      className="text-blue-300 underline underline-offset-4 transition hover:text-blue-200"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="mt-5 list-disc space-y-2 pl-6 text-slate-300 marker:text-blue-400" {...props} />
  ),
  ol: (props) => (
    <ol className="mt-5 list-decimal space-y-2 pl-6 text-slate-300 marker:text-blue-400" {...props} />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="mt-6 border-l-2 border-blue-400/50 pl-5 italic text-slate-400"
      {...props}
    />
  ),
  hr: () => <hr className="my-12 border-white/10" />,
  strong: (props) => <strong className="font-semibold text-white" {...props} />,
  code: (props) => (
    <code
      className="rounded bg-white/10 px-1.5 py-0.5 text-[0.85em] text-blue-200"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="mt-6 overflow-x-auto rounded-xl border border-white/10 bg-slate-900/80 p-4 text-sm text-slate-200"
      {...props}
    />
  ),
  table: (props) => (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm" {...props} />
    </div>
  ),
  th: (props) => (
    <th className="border-b border-white/15 pb-2 pr-4 font-semibold text-white" {...props} />
  ),
  td: (props) => (
    <td className="border-b border-white/5 py-2 pr-4 text-slate-300" {...props} />
  ),
  img: (props) => (
    // eslint-disable-next-line @next/next/no-img-element -- author-supplied URLs, arbitrary hosts
    <img
      className="mt-6 w-full rounded-xl border border-white/10"
      alt={props.alt ?? ""}
      src={typeof props.src === "string" ? props.src : undefined}
    />
  ),
};

export function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {children}
    </ReactMarkdown>
  );
}
