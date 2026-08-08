import type { MetadataRoute } from "next";
import { products } from "@/content/products";
import { industries } from "@/content/industries";
import { insights } from "@/content/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const staticRoutes = ["", "/about", "/products", "/industries", "/manufacturing-process", "/infrastructure", "/quality-assurance", "/research-development", "/certifications", "/sustainability", "/gallery", "/insights", "/faq", "/careers", "/contact", "/request-a-quote", "/privacy", "/terms"];
  const routes = [
    ...staticRoutes.map((path) => ({ path, frequency: path === "" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : 0.7 })),
    ...products.map((product) => ({ path: `/products/${product.slug}`, frequency: "monthly" as const, priority: 0.8 })),
    ...industries.map((industry) => ({ path: `/industries/${industry.slug}`, frequency: "monthly" as const, priority: 0.7 })),
    ...insights.map((insight) => ({ path: `/insights/${insight.slug}`, frequency: "monthly" as const, priority: 0.6 })),
  ];
  return routes.map((route) => ({ url: `${baseUrl}${route.path}`, changeFrequency: route.frequency, priority: route.priority }));
}
