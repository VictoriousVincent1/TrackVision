import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { BlogPageLayout } from "@/components/BlogPageLayout";
import { createPublicClient } from "@/lib/supabase/public";
import {
  POST_SUMMARY_COLUMNS,
  formatPostDate,
  postPreview,
  type BlogPostSummary,
} from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Movus",
  description:
    "Money guides for students and new grads: budgeting, student loans, saving, and investing — from the team behind Movus.",
};

// Posts change rarely; serve from cache and refresh in the background.
export const revalidate = 60;

export default async function BlogIndexPage() {
  const supabase = createPublicClient();

  // RLS keeps drafts out of this result even though we query with the anon key.
  const { data, error } = supabase
    ? await supabase
        .from("blog_posts")
        .select(POST_SUMMARY_COLUMNS)
        .eq("status", "published")
        .order("published_at", { ascending: false })
        .returns<BlogPostSummary[]>()
    : { data: null, error: null };

  if (error) {
    console.error("[blog] failed to load posts:", error);
  }

  const posts = data ?? [];
  const [featured, ...rest] = posts;

  return (
    <BlogPageLayout>
      <header className="max-w-2xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          The Movus blog
        </span>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Money, explained{" "}
          <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
            for students
          </span>
          <span className="text-slate-500">.</span>
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-slate-400">
          Budgeting, student loans, saving, and investing — written plainly, with
          no jargon and nothing to sell you.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="mt-16 rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center text-slate-400">
          No articles published yet. Check back soon.
        </p>
      ) : (
        <div className="mt-14">
          {featured ? <FeaturedCard post={featured} /> : null}

          {rest.length > 0 ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : null}
        </div>
      )}
    </BlogPageLayout>
  );
}

function FeaturedCard({ post }: { post: BlogPostSummary }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-blue-500/30 hover:bg-white/[0.05] md:grid-cols-2"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-slate-900 md:aspect-auto md:h-full md:min-h-[280px]">
        {post.cover_image_url ? (
          <Image
            src={post.cover_image_url}
            alt=""
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            priority
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-blue-500/20 via-slate-900 to-teal-500/10" />
        )}
      </div>
      <div className="flex flex-col justify-center p-8">
        <p className="text-xs font-medium uppercase tracking-wider text-blue-300">
          Latest
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
          {post.title}
        </h2>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-400">
          {postPreview(post)}
        </p>
        <p className="mt-6 text-xs text-slate-500">
          {[post.author_name, formatPostDate(post.published_at)]
            .filter(Boolean)
            .join(" · ")}
        </p>
      </div>
    </Link>
  );
}

function PostCard({ post }: { post: BlogPostSummary }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-blue-500/30 hover:bg-white/[0.05]"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
        {post.cover_image_url ? (
          <Image
            src={post.cover_image_url}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-blue-500/15 via-slate-900 to-purple-500/10" />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h2 className="font-semibold text-white">{post.title}</h2>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-400">
          {postPreview(post)}
        </p>
        <p className="mt-5 text-xs text-slate-500">
          {[post.author_name, formatPostDate(post.published_at)]
            .filter(Boolean)
            .join(" · ")}
        </p>
      </div>
    </Link>
  );
}
