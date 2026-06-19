import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1, freq: "weekly" as const },
    { path: "/services", priority: 0.9, freq: "weekly" as const },
    { path: "/industries", priority: 0.8, freq: "monthly" as const },
    { path: "/how-we-work", priority: 0.8, freq: "monthly" as const },
    { path: "/about", priority: 0.7, freq: "monthly" as const },
    { path: "/resources", priority: 0.7, freq: "weekly" as const },
    { path: "/book", priority: 0.9, freq: "monthly" as const },
    { path: "/contact", priority: 0.8, freq: "monthly" as const },
    { path: "/onboarding", priority: 0.6, freq: "monthly" as const },
  ];
  const now = new Date();
  return routes.map((r) => ({
    url: `${siteConfig.url}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
