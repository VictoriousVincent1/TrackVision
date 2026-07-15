import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BlogPageLayout } from "@/components/BlogPageLayout";
import { Markdown } from "@/components/Markdown";
import { createPublicClient } from "@/lib/supabase/public";
import { formatPostDate, postPreview, readingTime, type BlogPost } from "@/lib/blog";
import { APP_STORE_URL } from "@/lib/site";

export const revalidate = 60;

type PageProps = {
  params: Promise<{ slug: string }>;
};

/**
 * Prerender the posts that exist at build time. Anything published later is
 * still rendered on demand and then cached (dynamicParams defaults to true),
 * so publishing doesn't require a redeploy.
 */
export async function generateStaticParams() {
  try {
    const supabase = createPublicClient();
    const { data } = await supabase
      .from("blog_posts")
      .select("slug")
      .eq("status", "published")
      .returns<{ slug: string }[]>();

    return data?.map(({ slug }) => ({ slug })) ?? [];
  } catch {
    // Never fail the build over this — the pages render on demand instead.
    return [];
  }
}

async function getPost(slug: string): Promise<BlogPost | null> {
  const supabase = createPublicClient();

  // maybeSingle(): a missing (or unpublished, per RLS) slug is a 404, not an error.
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle<BlogPost>();

  if (error) {
    console.error("[blog] failed to load post:", error);
    return null;
  }
  return data;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) return { title: "Article not found — Movus" };

  const description = postPreview(post);

  return {
    title: `${post.title} — Movus`,
    description,
    openGraph: {
      title: post.title,
      description,
      type: "article",
      publishedTime: post.published_at ?? undefined,
      images: post.cover_image_url ? [post.cover_image_url] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  return (
    <BlogPageLayout width="prose">
      <Link
        href="/blog"
        className="text-sm text-slate-400 transition-colors hover:text-white"
      >
        ← All articles
      </Link>

      <article className="mt-8">
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl sm:leading-tight">
          {post.title}
        </h1>
        <p className="mt-4 text-sm text-slate-500">
          {[
            post.author_name,
            formatPostDate(post.published_at),
            readingTime(post.content),
          ]
            .filter(Boolean)
            .join(" · ")}
        </p>

        {post.cover_image_url ? (
          <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <Image
              src={post.cover_image_url}
              alt=""
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        ) : null}

        {post.excerpt?.trim() ? (
          <p className="mt-8 border-l-2 border-blue-400/50 pl-5 text-lg leading-relaxed text-slate-300">
            {post.excerpt}
          </p>
        ) : null}

        <div className="mt-4">
          <Markdown>{post.content}</Markdown>
        </div>
      </article>

      <aside className="mt-16 rounded-2xl border border-blue-500/30 bg-gradient-to-b from-blue-500/10 to-slate-900/60 p-8 text-center">
        <h2 className="text-xl font-semibold text-white">
          Put this into practice.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-400">
          Movus turns every paycheck into a simple 70/10/10/10 plan and projects
          your money to graduation. Free on the App Store.
        </p>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-teal-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:brightness-110"
        >
          Download Movus — free
        </a>
      </aside>

      <p className="mt-8 text-center text-xs text-slate-600">
        Not financial advice. Movus provides budgeting tools and general education.
      </p>
    </BlogPageLayout>
  );
}
