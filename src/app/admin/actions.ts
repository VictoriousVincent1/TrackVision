"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/admin";
import { slugify, type PostStatus } from "@/lib/blog";
import { createClient } from "@/lib/supabase/server";

export type ActionState = { error: string | null };

type PostInput = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImageUrl: string;
  authorName: string;
  status: PostStatus;
};

function readForm(formData: FormData): PostInput | { error: string } {
  const title = String(formData.get("title") ?? "").trim();
  const content = String(formData.get("content") ?? "");
  const status = String(formData.get("status") ?? "draft");

  if (!title) return { error: "Give the article a title." };
  if (status !== "draft" && status !== "published") {
    return { error: "Invalid status." };
  }
  if (status === "published" && !content.trim()) {
    return { error: "An article needs a body before it can be published." };
  }

  const slug = slugify(String(formData.get("slug") ?? "") || title);
  if (!slug) {
    return { error: "Couldn’t build a URL from that title — add a slug manually." };
  }

  return {
    title,
    slug,
    content,
    status,
    excerpt: String(formData.get("excerpt") ?? "").trim(),
    coverImageUrl: String(formData.get("coverImageUrl") ?? "").trim(),
    authorName: String(formData.get("authorName") ?? "").trim(),
  };
}

/** Postgres unique_violation — the slug is already taken. */
const UNIQUE_VIOLATION = "23505";

function refreshPublicPages(slug: string) {
  revalidatePath("/blog");
  revalidatePath(`/blog/${slug}`);
  revalidatePath("/admin");
}

export async function createPost(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const admin = await requireAdmin();

  const input = readForm(formData);
  if ("error" in input) return { error: input.error };

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .insert({
      title: input.title,
      slug: input.slug,
      excerpt: input.excerpt || null,
      content: input.content,
      cover_image_url: input.coverImageUrl || null,
      author_name: input.authorName || null,
      status: input.status,
      // The DB requires a date on anything published.
      published_at: input.status === "published" ? new Date().toISOString() : null,
      created_by: admin.userId,
    })
    .select("id, slug")
    .single();

  if (error) {
    if (error.code === UNIQUE_VIOLATION) {
      return { error: `The URL “/blog/${input.slug}” is already in use.` };
    }
    console.error("[admin] create failed:", error);
    return { error: "Couldn’t save the article. Try again." };
  }

  refreshPublicPages(data.slug);
  redirect(`/admin/${data.id}`);
}

export async function updatePost(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireAdmin();

  const id = String(formData.get("id") ?? "");
  if (!id) return { error: "Missing article id." };

  const input = readForm(formData);
  if ("error" in input) return { error: input.error };

  const supabase = await createClient();

  const { data: existing, error: loadError } = await supabase
    .from("blog_posts")
    .select("published_at, slug")
    .eq("id", id)
    .maybeSingle<{ published_at: string | null; slug: string }>();

  if (loadError || !existing) {
    return { error: "Couldn’t find that article." };
  }

  // Keep the original publish date across edits; only stamp it the first time
  // a post goes live. Unpublishing clears it so the DB check stays satisfied.
  const publishedAt =
    input.status === "published"
      ? (existing.published_at ?? new Date().toISOString())
      : null;

  const { error } = await supabase
    .from("blog_posts")
    .update({
      title: input.title,
      slug: input.slug,
      excerpt: input.excerpt || null,
      content: input.content,
      cover_image_url: input.coverImageUrl || null,
      author_name: input.authorName || null,
      status: input.status,
      published_at: publishedAt,
    })
    .eq("id", id);

  if (error) {
    if (error.code === UNIQUE_VIOLATION) {
      return { error: `The URL “/blog/${input.slug}” is already in use.` };
    }
    console.error("[admin] update failed:", error);
    return { error: "Couldn’t save your changes. Try again." };
  }

  refreshPublicPages(input.slug);
  // The old URL needs busting too when the slug changed.
  if (existing.slug !== input.slug) revalidatePath(`/blog/${existing.slug}`);

  return { error: null };
}

export async function deletePost(formData: FormData): Promise<void> {
  await requireAdmin();

  const id = String(formData.get("id") ?? "");
  if (!id) return;

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .delete()
    .eq("id", id)
    .select("slug")
    .maybeSingle<{ slug: string }>();

  if (error) {
    console.error("[admin] delete failed:", error);
    return;
  }

  if (data) refreshPublicPages(data.slug);
  redirect("/admin");
}

export async function signOut(): Promise<void> {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}
