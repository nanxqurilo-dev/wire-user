import type { MetadataRoute } from "next";

import { industries } from "@/content/industries";
import { insights } from "@/content/insights";
import { products } from "@/content/products";

type SitemapEntry = MetadataRoute.Sitemap[number];

const staticRoutes: Array<{
  path: string;
  changeFrequency: SitemapEntry["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/products", changeFrequency: "weekly", priority: 0.9 },
  { path: "/industries", changeFrequency: "monthly", priority: 0.8 },
  { path: "/insights", changeFrequency: "weekly", priority: 0.8 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/manufacturing-process", changeFrequency: "monthly", priority: 0.7 },
  { path: "/infrastructure", changeFrequency: "monthly", priority: 0.7 },
  { path: "/quality-assurance", changeFrequency: "monthly", priority: 0.7 },
  { path: "/research-development", changeFrequency: "monthly", priority: 0.7 },
  { path: "/certifications", changeFrequency: "monthly", priority: 0.7 },
  { path: "/sustainability", changeFrequency: "monthly", priority: 0.7 },
  { path: "/gallery", changeFrequency: "monthly", priority: 0.6 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.6 },
  { path: "/careers", changeFrequency: "weekly", priority: 0.6 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.6 },
  { path: "/request-a-quote", changeFrequency: "monthly", priority: 0.5 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

function getSiteUrl(): URL {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!configuredUrl) {
    if (process.env.NODE_ENV === "production") {
      throw new Error(
        "NEXT_PUBLIC_SITE_URL must be set to the canonical production URL when building the sitemap.",
      );
    }

    return new URL("http://localhost:3000");
  }

  const siteUrl = new URL(configuredUrl);

  if (siteUrl.protocol !== "https:" && siteUrl.protocol !== "http:") {
    throw new Error("NEXT_PUBLIC_SITE_URL must use the http or https protocol.");
  }

  return siteUrl;
}

function absoluteUrl(siteUrl: URL, path: string): string {
  return new URL(path, siteUrl).toString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return [
    ...staticRoutes.map(({ path, changeFrequency, priority }) => ({
      url: absoluteUrl(siteUrl, path),
      changeFrequency,
      priority,
    })),
    ...products.map((product) => ({
      url: absoluteUrl(siteUrl, `/products/${product.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [absoluteUrl(siteUrl, product.image)],
    })),
    ...industries.map((industry) => ({
      url: absoluteUrl(siteUrl, `/industries/${industry.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: [absoluteUrl(siteUrl, industry.image)],
    })),
    ...insights.map((insight) => ({
      url: absoluteUrl(siteUrl, `/insights/${insight.slug}`),
      lastModified: insight.publishedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: [absoluteUrl(siteUrl, insight.image)],
    })),
  ];
}
