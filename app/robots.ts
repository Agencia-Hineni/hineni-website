import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";

const baseUrl = SITE_CONFIG.siteUrl;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
