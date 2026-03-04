import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";

const baseUrl = SITE_CONFIG.siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/sobre", "/servicos", "/projetos", "/contato"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
