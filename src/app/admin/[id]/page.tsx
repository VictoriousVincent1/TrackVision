import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";
import { PostEditor } from "@/components/admin/PostEditor";
import { requireAdmin } from "@/lib/admin";
import { createClient } from "@/lib/supabase/server";
import { deletePost, updatePost } from "@/app/admin/actions";
import type { BlogPost } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Edit article — Movus Admin",
  robots: { index: false, follow: false },
};

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditPostPage({ params }: PageProps) {
  const admin = await requireAdmin();
  const { id } = await params;

  const supabase = await createClient();
  const { data: post } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("id", id)
    .maybeSingle<BlogPost>();

  if (!post) notFound();

  return (
    <AdminShell email={admin.email}>
      <PostEditor action={updatePost} post={post} deleteAction={deletePost} />
    </AdminShell>
  );
}
