import Link from "next/link";
import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";
import { requireAdmin } from "@/lib/admin";
import { createClient } from "@/lib/supabase/server";
import {
  POST_SUMMARY_COLUMNS,
  formatPostDate,
  type BlogPostSummary,
} from "@/lib/blog";

export const metadata: Metadata = {
  title: "Articles — Movus Admin",
  robots: { index: false, follow: false },
};

export default async function AdminHomePage() {
  const admin = await requireAdmin();
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("blog_posts")
    .select(POST_SUMMARY_COLUMNS)
    .order("updated_at", { ascending: false })
    .returns<BlogPostSummary[]>();

  if (error) {
    console.error("[admin] failed to list posts:", error);
  }

  const posts = data ?? [];
  const published = posts.filter((p) => p.status === "published").length;

  return (
    <AdminShell email={admin.email}>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-white">
            Articles
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            {posts.length} total · {published} published ·{" "}
            {posts.length - published} draft
            {posts.length - published === 1 ? "" : "s"}
          </p>
        </div>
        <Link
          href="/admin/new"
          className="rounded-full bg-gradient-to-r from-blue-500 to-teal-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:brightness-110"
        >
          New article
        </Link>
      </div>

      {posts.length === 0 ? (
        <p className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center text-slate-400">
          No articles yet. Write your first one.
        </p>
      ) : (
        <ul className="mt-8 divide-y divide-white/5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          {posts.map((post) => (
            <li key={post.id}>
              <Link
                href={`/admin/${post.id}`}
                className="flex flex-wrap items-center justify-between gap-3 p-5 transition hover:bg-white/[0.04]"
              >
                <div className="min-w-0">
                  <p className="truncate font-medium text-white">{post.title}</p>
                  <p className="mt-1 truncate text-xs text-slate-500">
                    /blog/{post.slug}
                    {post.published_at
                      ? ` · ${formatPostDate(post.published_at)}`
                      : ""}
                  </p>
                </div>
                <StatusPill status={post.status} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </AdminShell>
  );
}

function StatusPill({ status }: { status: BlogPostSummary["status"] }) {
  const published = status === "published";
  return (
    <span
      className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${
        published
          ? "bg-emerald-500/15 text-emerald-300"
          : "bg-amber-500/15 text-amber-300"
      }`}
    >
      {published ? "Published" : "Draft"}
    </span>
  );
}
