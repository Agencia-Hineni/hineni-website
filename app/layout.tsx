import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { AdsConversionBootstrap } from "@/components/analytics/ads-conversion-bootstrap";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SITE_CONFIG } from "@/lib/constants";
import { siteMetadata } from "@/lib/seo";
import "./globals.css";

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body-family",
  display: "swap",
});

const headingFont = Manrope({
  subsets: ["latin"],
  variable: "--font-heading-family",
  display: "swap",
});

export const metadata: Metadata = siteMetadata;

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.siteUrl,
  logo: `${SITE_CONFIG.siteUrl}/branding/favicon-final-51.png`,
  email: SITE_CONFIG.contactEmail,
  taxID: SITE_CONFIG.cnpj,
  sameAs: [SITE_CONFIG.instagram],
  slogan: SITE_CONFIG.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${bodyFont.variable} ${headingFont.variable}`}>
      <body className="bg-shell font-sans text-slate-900 antialiased">
        <a href="#conteudo-principal" className="skip-link">
          Ir para o conteúdo principal
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main id="conteudo-principal" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
        <AdsConversionBootstrap />
        <Analytics />
      </body>
    </html>
  );
}
