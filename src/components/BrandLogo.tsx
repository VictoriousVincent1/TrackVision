import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  href?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  priority?: boolean;
};

const sizeClasses = {
  sm: "h-9 w-auto max-w-[140px]",
  md: "h-11 w-auto max-w-[180px]",
  lg: "h-14 w-auto max-w-[220px]",
} as const;

export function BrandLogo({
  href = "/",
  size = "md",
  className = "",
  priority = false,
}: BrandLogoProps) {
  const logo = (
    <Image
      src="/images/logo.png"
      alt="Movus — Move money smarter"
      width={220}
      height={56}
      priority={priority}
      className={`object-contain ${sizeClasses[size]} ${className}`}
    />
  );

  if (!href) return logo;

  return (
    <Link href={href} className="inline-flex shrink-0 items-center">
      {logo}
    </Link>
  );
}
