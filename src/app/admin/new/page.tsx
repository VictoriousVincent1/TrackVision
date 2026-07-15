import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";
import { PostEditor } from "@/components/admin/PostEditor";
import { requireAdmin } from "@/lib/admin";
import { createPost } from "@/app/admin/actions";

export const metadata: Metadata = {
  title: "New article — Movus Admin",
  robots: { index: false, follow: false },
};

export default async function NewPostPage() {
  const admin = await requireAdmin();

  return (
    <AdminShell email={admin.email}>
      <PostEditor action={createPost} />
    </AdminShell>
  );
}
