"use client";

import Image from "next/image";
import { useRef, useState, type ChangeEvent } from "react";
import { createClient } from "@/lib/supabase/client";

type CoverImageFieldProps = {
  value: string;
  onChange: (url: string) => void;
};

const MAX_BYTES = 5 * 1024 * 1024;

export function CoverImageField({ value, onChange }: CoverImageFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleFile(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setError(null);

    if (!file.type.startsWith("image/")) {
      setError("That file isn’t an image.");
      return;
    }
    if (file.size > MAX_BYTES) {
      setError("Images must be under 5 MB.");
      return;
    }

    setUploading(true);

    const supabase = createClient();
    const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
    // Random name: keeps uploads from colliding and avoids leaking filenames.
    const path = `${crypto.randomUUID()}.${ext}`;

    const { error: uploadError } = await supabase.storage
      .from("blog-images")
      .upload(path, file, { cacheControl: "31536000", upsert: false });

    if (uploadError) {
      setUploading(false);
      setError(uploadError.message);
      return;
    }

    const {
      data: { publicUrl },
    } = supabase.storage.from("blog-images").getPublicUrl(path);

    onChange(publicUrl);
    setUploading(false);
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <div>
      <label className="block text-sm text-slate-400">Cover image</label>

      {value ? (
        <div className="mt-2 overflow-hidden rounded-xl border border-white/10">
          <div className="relative aspect-video w-full bg-slate-900">
            <Image
              src={value}
              alt="Cover preview"
              fill
              sizes="(min-width: 1024px) 400px, 100vw"
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="flex items-center justify-between gap-3 bg-white/[0.03] px-3 py-2">
            <span className="truncate text-xs text-slate-500">{value}</span>
            <button
              type="button"
              onClick={() => onChange("")}
              className="shrink-0 text-xs text-slate-400 transition hover:text-white"
            >
              Remove
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-2 rounded-xl border border-dashed border-white/15 bg-white/[0.02] p-6 text-center">
          <p className="text-xs text-slate-500">
            {uploading ? "Uploading…" : "PNG or JPG, up to 5 MB"}
          </p>
          <button
            type="button"
            disabled={uploading}
            onClick={() => inputRef.current?.click()}
            className="mt-3 rounded-full border border-white/15 px-4 py-2 text-xs text-slate-200 transition hover:border-white/30 disabled:opacity-60"
          >
            Choose image
          </button>
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFile}
        className="hidden"
      />

      {error ? <p className="mt-2 text-xs text-amber-300">{error}</p> : null}
    </div>
  );
}
