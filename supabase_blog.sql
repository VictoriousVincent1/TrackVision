-- Blog Posts + Admin Allowlist
-- Backs the public /blog pages and the /admin authoring backend on the website.
-- Run this once against the same Supabase project the iOS app uses.

-- ---------------------------------------------------------------------------
-- Admin allowlist
-- ---------------------------------------------------------------------------
-- Only users listed here may author posts. Add yourself after signing up:
--   INSERT INTO blog_admins (user_id)
--   SELECT id FROM auth.users WHERE email = 'you@example.com';

CREATE TABLE IF NOT EXISTS blog_admins (
    user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE blog_admins ENABLE ROW LEVEL SECURITY;

-- SECURITY DEFINER so the policies on blog_posts can consult this table without
-- the caller needing read access to it — and so the check can't recurse through
-- blog_admins' own RLS.
CREATE OR REPLACE FUNCTION is_blog_admin()
RETURNS BOOLEAN
LANGUAGE SQL
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
    SELECT EXISTS (
        SELECT 1 FROM blog_admins WHERE user_id = auth.uid()
    );
$$;

CREATE POLICY "Admins can view the admin list"
    ON blog_admins FOR SELECT
    USING (is_blog_admin());

-- ---------------------------------------------------------------------------
-- Posts
-- ---------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS blog_posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    excerpt TEXT,
    -- Markdown source as typed in the admin editor.
    content TEXT NOT NULL DEFAULT '',
    cover_image_url TEXT,
    author_name TEXT,
    status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
    published_at TIMESTAMPTZ,
    created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    -- A published post must have a date; the public list orders by it.
    CONSTRAINT published_posts_have_a_date
        CHECK (status <> 'published' OR published_at IS NOT NULL)
);

CREATE INDEX IF NOT EXISTS idx_blog_posts_published
    ON blog_posts(published_at DESC)
    WHERE status = 'published';

CREATE INDEX IF NOT EXISTS idx_blog_posts_status_updated
    ON blog_posts(status, updated_at DESC);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Anonymous visitors read published posts only. Drafts stay invisible to the
-- public even though the site queries with the anon key.
CREATE POLICY "Anyone can read published posts"
    ON blog_posts FOR SELECT
    USING (status = 'published');

CREATE POLICY "Admins can read every post"
    ON blog_posts FOR SELECT
    USING (is_blog_admin());

CREATE POLICY "Admins can create posts"
    ON blog_posts FOR INSERT
    WITH CHECK (is_blog_admin());

CREATE POLICY "Admins can update posts"
    ON blog_posts FOR UPDATE
    USING (is_blog_admin())
    WITH CHECK (is_blog_admin());

CREATE POLICY "Admins can delete posts"
    ON blog_posts FOR DELETE
    USING (is_blog_admin());

CREATE OR REPLACE FUNCTION touch_blog_posts_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_blog_posts_updated_at ON blog_posts;
CREATE TRIGGER trg_blog_posts_updated_at
    BEFORE UPDATE ON blog_posts
    FOR EACH ROW
    EXECUTE FUNCTION touch_blog_posts_updated_at();

-- ---------------------------------------------------------------------------
-- Cover image storage
-- ---------------------------------------------------------------------------

INSERT INTO storage.buckets (id, name, public)
VALUES ('blog-images', 'blog-images', TRUE)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Anyone can view blog images"
    ON storage.objects FOR SELECT
    USING (bucket_id = 'blog-images');

CREATE POLICY "Admins can upload blog images"
    ON storage.objects FOR INSERT
    WITH CHECK (bucket_id = 'blog-images' AND is_blog_admin());

CREATE POLICY "Admins can update blog images"
    ON storage.objects FOR UPDATE
    USING (bucket_id = 'blog-images' AND is_blog_admin());

CREATE POLICY "Admins can delete blog images"
    ON storage.objects FOR DELETE
    USING (bucket_id = 'blog-images' AND is_blog_admin());
