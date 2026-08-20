// import type { Metadata, Viewport } from "next";
// import { Geist_Mono, Manrope } from "next/font/google";
// import Script from "next/script";

// import { SiteFooter } from "@/components/layout/site-footer";
// import { SiteHeader } from "@/components/layout/site-header";
// import { Providers } from "@/components/providers/providers";
// import "./globals.css";

// const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], display: "swap" });
// const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

// export const metadata: Metadata = {
//   metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
//   title: {
//     default: "Corvex Steel Wires | Engineered Perimeter Protection",
//     template: "%s | Corvex Steel Wires",
//   },
//   description:
//     "Engineered perimeter protection systems for critical infrastructure, industrial facilities, and complex project environments.",
//   applicationName: "Corvex Steel Wires",
//   keywords: ["perimeter protection", "industrial fencing", "security barriers", "engineered fencing systems"],
//   openGraph: {
//     type: "website",
//     locale: "en_IN",
//     siteName: "Corvex Steel Wires",
//     title: "Corvex Steel Wires | Engineered Perimeter Protection",
//     description: "Purpose-built perimeter systems, manufactured with precision and delivered for demanding sites.",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Corvex Steel Wires | Engineered Perimeter Protection",
//     description: "Purpose-built perimeter systems for demanding industrial environments.",
//   },
//   robots: { index: true, follow: true },
//   verification: {
//     google: "-t8a68WSITI-2FPZN2xTYU6p7v0ERWC12q41i4UUAAQ",
//   },
// };

// export const viewport: Viewport = {
//   width: "device-width",
//   initialScale: 1,
// };

// export default function RootLayout({ children }: LayoutProps<"/">) {
//   return (
//     <html lang="en" className={`${manrope.variable} ${geistMono.variable}`}>
//       <body>
//         <Providers>
//           <a className="skip-link" href="#main-content">Skip to main content</a>
//           <SiteHeader />
//           <main id="main-content" className="flex-1">{children}</main>
//           <SiteFooter />
//         </Providers>
//       </body>
//       <Script async src="https://www.googletagmanager.com/gtag/js?id=G-NW0KRM3V6E" strategy="afterInteractive" />
//       <Script id="google-analytics" strategy="afterInteractive">
//         {`window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());
// gtag('config', 'G-NW0KRM3V6E');`}
//       </Script>
//     </html>
//   );
// }






import type { Metadata, Viewport } from "next";
import { Geist_Mono, Manrope } from "next/font/google";
import Script from "next/script";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Providers } from "@/components/providers/providers";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: {
    default: "Corvex Steel Wires | Engineered Perimeter Protection",
    template: "%s | Corvex Steel Wires",
  },
  description:
    "Engineered perimeter protection systems for critical infrastructure, industrial facilities, and complex project environments.",
  applicationName: "Corvex Steel Wires",
  keywords: [
    "perimeter protection",
    "industrial fencing",
    "security barriers",
    "engineered fencing systems",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Corvex Steel Wires",
    title: "Corvex Steel Wires | Engineered Perimeter Protection",
    description:
      "Purpose-built perimeter systems, manufactured with precision and delivered for demanding sites.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corvex Steel Wires | Engineered Perimeter Protection",
    description:
      "Purpose-built perimeter systems for demanding industrial environments.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "-t8a68WSITI-2FPZN2xTYU6p7v0ERWC12q41i4UUAAQ",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${geistMono.variable}`}
    >
      <body>
        <Providers>
          <a className="skip-link" href="#main-content">
            Skip to main content
          </a>

          <SiteHeader />

          <main id="main-content" className="flex-1">
            {children}
          </main>

          <SiteFooter />
        </Providers>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NW0KRM3V6E"
          strategy="afterInteractive"
        />

        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NW0KRM3V6E');
          `}
        </Script>
      </body>
    </html>
  );
}