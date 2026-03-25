import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { GA_MEASUREMENT_ID, GOOGLE_ADS_ID } from "@/lib/analytics";
import { SITE_CONFIG } from "@/lib/constants";
import { siteMetadata } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = siteMetadata;

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.siteUrl,
  logo: `${SITE_CONFIG.siteUrl}/branding/favicon-final-51.png`,
  email: SITE_CONFIG.contactEmail,
  sameAs: [SITE_CONFIG.instagram],
  slogan: SITE_CONFIG.tagline,
};

const gtagBootstrap = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', '${GOOGLE_ADS_ID}');
  ${
    GA_MEASUREMENT_ID
      ? `gtag('config', '${GA_MEASUREMENT_ID}', { page_path: window.location.pathname });`
      : ""
  }
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-shell font-sans text-slate-900 antialiased">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-gtag-bootstrap" strategy="afterInteractive">
          {gtagBootstrap}
        </Script>

        <a href="#conteudo-principal" className="skip-link">
          Ir para o conteudo principal
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
        <Analytics />
      </body>
    </html>
  );
}
