import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Display serif for section statements (headlines only, never body copy) —
// the editorial counterweight to Geist Mono's uppercase/tracked UI chrome
// (nav, buttons, eyebrows). Together they carry the redesigned landing page's
// voice: confident statement typography over utilitarian interface labels.
const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "MovUs — Financial freedom for students & new grads",
  description:
    "Plan past graduation: smarter spending, cost-of-living adjusted budgets, and a clear runway to financial freedom—built for students becoming smart consumers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-dvh flex-col">{children}</body>
    </html>
  );
}
