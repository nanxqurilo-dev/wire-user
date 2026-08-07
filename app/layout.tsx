import type { Metadata } from "next";
import { Geist_Mono, Manrope } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Providers } from "@/components/providers/providers";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Aegis Grid Systems | Engineered Perimeter Protection",
    template: "%s | Aegis Grid Systems",
  },
  description:
    "Engineered perimeter protection systems for critical infrastructure, industrial facilities, and complex project environments.",
  applicationName: "Aegis Grid Systems",
  keywords: ["perimeter protection", "industrial fencing", "security barriers", "engineered fencing systems"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Aegis Grid Systems",
    title: "Aegis Grid Systems | Engineered Perimeter Protection",
    description: "Purpose-built perimeter systems, manufactured with precision and delivered for demanding sites.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aegis Grid Systems | Engineered Perimeter Protection",
    description: "Purpose-built perimeter systems for demanding industrial environments.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${geistMono.variable}`}>
      <body>
        <Providers>
          <a className="skip-link" href="#main-content">Skip to main content</a>
          <SiteHeader />
          <main id="main-content" className="flex-1">{children}</main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
