"use client";

import React, { useState } from "react";

type Props = {
  id: string;
  title: string;
  description?: string;
  imageSrc?: string;
};

export default function StepFeedback({ id, title, description, imageSrc }: Props) {
  const [rating, setRating] = useState<number | "">("");
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("saving");
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ stepId: id, title, rating, comment }),
      });
      if (!res.ok) throw new Error("network");
      setStatus("saved");
      setComment("");
      setRating("");
      setTimeout(() => setStatus("idle"), 1500);
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 1500);
    }
  }

  return (
    <section style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 16, alignItems: "start", marginBottom: 24 }}>
      <div>
        <h3 style={{ margin: 0 }}>{title}</h3>
        {description && <p style={{ color: "#cbd5e1" }}>{description}</p>}
        <div style={{ borderRadius: 10, overflow: "hidden", background: "#0b1220", border: "1px solid rgba(255,255,255,0.04)", maxWidth: 680 }}>
          {imageSrc ? (
            // Image path should be placed in `public/images/testers/` (e.g. step-1.png)
            // If you prefer to use different names, pass the full path in `imageSrc`.
            // Use `next/image` if you want optimized images.
            // Keep this simple for testers.
            // eslint-disable-next-line @next/next/no-img-element
            <img src={imageSrc} alt={title} style={{ width: "100%", height: "auto", display: "block" }} />
          ) : (
            <div style={{ padding: 40, color: "#94a3b8" }}>No image provided for this step.</div>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit} style={{ background: "#07111a", padding: 16, borderRadius: 8, border: "1px solid rgba(255,255,255,0.04)" }}>
        <label style={{ display: "block", marginBottom: 8, fontWeight: 600 }}>Your rating</label>
        <select value={rating as any} onChange={(e) => setRating(Number(e.target.value) || "")} style={{ width: "100%", padding: "8px 10px", marginBottom: 12 }}>
          <option value="">Select rating</option>
          <option value={5}>5 — Excellent</option>
          <option value={4}>4 — Good</option>
          <option value={3}>3 — Okay</option>
          <option value={2}>2 — Poor</option>
          <option value={1}>1 — Bad</option>
        </select>

        <label style={{ display: "block", marginBottom: 8, fontWeight: 600 }}>Comments</label>
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} rows={5} style={{ width: "100%", padding: 10, marginBottom: 12 }} placeholder="What did you like or dislike? Any bugs or suggestions?"></textarea>

        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <button type="submit" disabled={status === "saving"} style={{ padding: "8px 12px", background: "#2563eb", color: "white", border: "none", borderRadius: 6 }}>
            {status === "saving" ? "Saving…" : "Submit feedback"}
          </button>
          {status === "saved" && <span style={{ color: "#34d399" }}>Saved</span>}
          {status === "error" && <span style={{ color: "#fb7185" }}>Error</span>}
        </div>
      </form>
    </section>
  );
}
