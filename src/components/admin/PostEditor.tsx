"use client";

import Link from "next/link";
import { useActionState, useState } from "react";
import { CoverImageField } from "@/components/admin/CoverImageField";
import { Markdown } from "@/components/Markdown";
import { slugify, type BlogPost, type PostStatus } from "@/lib/blog";
import type { ActionState } from "@/app/admin/actions";

type PostEditorProps = {
  action: (state: ActionState, formData: FormData) => Promise<ActionState>;
  post?: BlogPost;
  defaultAuthorName?: string;
  deleteAction?: (formData: FormData) => Promise<void>;
};

export function PostEditor({
  action,
  post,
  defaultAuthorName = "",
  deleteAction,
}: PostEditorProps) {
  const [state, formAction, pending] = useActionState<ActionState, FormData>(
    action,
    { error: null },
  );

  const [title, setTitle] = useState(post?.title ?? "");
  // Only auto-fill the slug while it's untouched — never silently rewrite the
  // URL of a post that's already published somewhere.
  const [slug, setSlug] = useState(post?.slug ?? "");
  const [slugEdited, setSlugEdited] = useState(Boolean(post));
  const [coverImageUrl, setCoverImageUrl] = useState(post?.cover_image_url ?? "");
  const [content, setContent] = useState(post?.content ?? "");
  const [status, setStatus] = useState<PostStatus>(post?.status ?? "draft");
  const [showPreview, setShowPreview] = useState(false);

  const effectiveSlug = slugEdited ? slug : slugify(title);

  return (
    <form action={formAction}>
      {post ? <input type="hidden" name="id" value={post.id} /> : null}
      <input type="hidden" name="coverImageUrl" value={coverImageUrl} />
      <input type="hidden" name="status" value={status} />

      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/admin"
          className="text-sm text-slate-400 transition-colors hover:text-white"
        >
          ← All articles
        </Link>

        <div className="flex items-center gap-3">
          {post?.status === "published" ? (
            <Link
              href={`/blog/${post.slug}`}
              target="_blank"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              View live ↗
            </Link>
          ) : null}
          <button
            type="submit"
            name="intent"
            disabled={pending}
            onClick={() => setStatus("draft")}
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-slate-200 transition hover:border-white/30 disabled:opacity-60"
          >
            {pending && status === "draft" ? "Saving…" : "Save draft"}
          </button>
          <button
            type="submit"
            disabled={pending}
            onClick={() => setStatus("published")}
            className="rounded-full bg-gradient-to-r from-blue-500 to-teal-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:brightness-110 disabled:opacity-60"
          >
            {pending && status === "published"
              ? "Publishing…"
              : post?.status === "published"
                ? "Update"
                : "Publish"}
          </button>
        </div>
      </div>

      {state.error ? (
        <p
          className="mt-6 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-200"
          role="alert"
        >
          {state.error}
        </p>
      ) : null}

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
        {/* Main column */}
        <div className="min-w-0 space-y-5">
          <div>
            <label htmlFor="title" className="block text-sm text-slate-400">
              Title
            </label>
            <input
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="How to budget on a student income"
              className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-lg font-medium text-white placeholder:text-slate-600 outline-none ring-blue-500/50 focus:border-blue-500/50 focus:ring-2"
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="content" className="block text-sm text-slate-400">
                Article — Markdown
              </label>
              <button
                type="button"
                onClick={() => setShowPreview((v) => !v)}
                className="text-xs text-slate-400 transition hover:text-white"
              >
                {showPreview ? "Edit" : "Preview"}
              </button>
            </div>

            {showPreview ? (
              <div className="mt-2 min-h-[28rem] rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4">
                {content.trim() ? (
                  <Markdown>{content}</Markdown>
                ) : (
                  <p className="text-sm text-slate-600">Nothing to preview yet.</p>
                )}
              </div>
            ) : (
              <textarea
                id="content"
                name="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={22}
                placeholder={"## A heading\n\nWrite your article here. **Bold**, _italic_, [links](https://movus.app), lists, and tables all work."}
                className="mt-2 w-full resize-y rounded-xl border border-white/15 bg-white/5 px-4 py-3 font-mono text-sm leading-relaxed text-slate-200 placeholder:text-slate-600 outline-none ring-blue-500/50 focus:border-blue-500/50 focus:ring-2"
              />
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          <div>
            <label htmlFor="slug" className="block text-sm text-slate-400">
              URL
            </label>
            <div className="mt-2 flex items-center rounded-xl border border-white/15 bg-white/5 pl-3 focus-within:border-blue-500/50 focus-within:ring-2 focus-within:ring-blue-500/50">
              <span className="shrink-0 text-xs text-slate-600">/blog/</span>
              <input
                id="slug"
                name="slug"
                value={effectiveSlug}
                onChange={(e) => {
                  setSlugEdited(true);
                  setSlug(e.target.value);
                }}
                onBlur={(e) => setSlug(slugify(e.target.value))}
                placeholder="auto-from-title"
                className="min-w-0 flex-1 bg-transparent px-1 py-3 text-xs text-slate-300 placeholder:text-slate-600 outline-none"
              />
            </div>
          </div>

          <CoverImageField value={coverImageUrl} onChange={setCoverImageUrl} />

          <div>
            <label htmlFor="excerpt" className="block text-sm text-slate-400">
              Excerpt
            </label>
            <textarea
              id="excerpt"
              name="excerpt"
              defaultValue={post?.excerpt ?? ""}
              rows={4}
              placeholder="One or two sentences for the blog index and link previews."
              className="mt-2 w-full resize-y rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 outline-none ring-blue-500/50 focus:border-blue-500/50 focus:ring-2"
            />
          </div>

          <div>
            <label htmlFor="authorName" className="block text-sm text-slate-400">
              Author
            </label>
            <input
              id="authorName"
              name="authorName"
              defaultValue={post?.author_name ?? defaultAuthorName}
              placeholder="Movus Team"
              className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 outline-none ring-blue-500/50 focus:border-blue-500/50 focus:ring-2"
            />
          </div>

          {post ? (
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <p className="text-xs text-slate-500">
                {post.status === "published"
                  ? "This article is live. “Save draft” takes it down."
                  : "This article is a draft — only you can see it."}
              </p>
            </div>
          ) : null}

          {post && deleteAction ? <DeleteButton action={deleteAction} id={post.id} /> : null}
        </div>
      </div>
    </form>
  );
}

function DeleteButton({
  action,
  id,
}: {
  action: (formData: FormData) => Promise<void>;
  id: string;
}) {
  const [confirming, setConfirming] = useState(false);

  if (!confirming) {
    return (
      <button
        type="button"
        onClick={() => setConfirming(true)}
        className="text-xs text-slate-600 transition hover:text-rose-400"
      >
        Delete article
      </button>
    );
  }

  return (
    <div className="rounded-xl border border-rose-500/30 bg-rose-500/5 p-4">
      <p className="text-xs text-rose-200">
        Delete this article for good? This can’t be undone.
      </p>
      <div className="mt-3 flex gap-3">
        {/* formAction on a submit button targets the delete action instead of
            the editor's own form action — no nested <form> needed. */}
        <button
          type="submit"
          formAction={action}
          name="id"
          value={id}
          className="rounded-full bg-rose-500/90 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-rose-500"
        >
          Delete
        </button>
        <button
          type="button"
          onClick={() => setConfirming(false)}
          className="text-xs text-slate-400 transition hover:text-white"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
