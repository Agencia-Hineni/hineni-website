import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: `/${string}` | "/";
  keywords?: string[];
};

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default: SITE_CONFIG.defaultTitle,
    template: "%s | HINENI",
  },
  description: SITE_CONFIG.defaultDescription,
  applicationName: SITE_CONFIG.name,
  keywords: [...SITE_CONFIG.keywords],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_CONFIG.defaultTitle,
    description: SITE_CONFIG.defaultDescription,
    url: SITE_CONFIG.siteUrl,
    siteName: SITE_CONFIG.name,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.defaultTitle,
    description: SITE_CONFIG.defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
}: PageMetadataOptions): Metadata {
  const pageTitle =
    title === SITE_CONFIG.defaultTitle ? SITE_CONFIG.defaultTitle : `${title} | ${SITE_CONFIG.name}`;

  return {
    title,
    description,
    keywords: keywords ?? [...SITE_CONFIG.keywords],
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: pageTitle,
      description,
      url: `${SITE_CONFIG.siteUrl}${path}`,
      siteName: SITE_CONFIG.name,
      locale: "pt_BR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
    },
  };
}
