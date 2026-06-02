import Image from "next/image";

type SectionImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  aspect?: "video" | "square" | "portrait" | "phone";
  /** Scale image inside frame (e.g. 1.4 zooms into a phone screenshot). */
  zoom?: number;
  objectPosition?: string;
  overlay?: "default" | "minimal" | "none";
};

const aspectClasses = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  phone: "aspect-[9/16] max-h-[min(72vh,640px)] mx-auto w-full max-w-sm",
};

export function SectionImage({
  src,
  alt,
  priority = false,
  className = "",
  aspect = "video",
  zoom = 1,
  objectPosition = "center",
  overlay = "default",
}: SectionImageProps) {
  const zoomScale = zoom > 1 ? zoom : undefined;

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 shadow-2xl shadow-black/40 ${className}`}
    >
      {overlay !== "none" ? (
        <div
          className={
            overlay === "minimal"
              ? "absolute inset-0 z-10 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent"
              : "absolute inset-0 z-10 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-slate-950/10"
          }
          aria-hidden
        />
      ) : null}
      {overlay === "default" ? (
        <div
          className="absolute inset-0 z-10 bg-gradient-to-tr from-blue-600/20 via-transparent to-teal-500/15 opacity-80 transition-opacity group-hover:opacity-100"
          aria-hidden
        />
      ) : null}
      <div className={`relative ${aspectClasses[aspect]}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
          className="object-cover transition duration-700"
          style={{
            objectPosition,
            ...(zoomScale
              ? { transform: `scale(${zoomScale})` }
              : undefined),
          }}
        />
      </div>
    </div>
  );
}
