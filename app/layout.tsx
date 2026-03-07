import type { Metadata } from "next";
import { DM_Sans, Sora } from "next/font/google";
import Script from "next/script";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SITE_CONFIG } from "@/lib/constants";
import { siteMetadata } from "@/lib/seo";
import "./globals.css";

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const displayFont = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
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
  sameAs: [SITE_CONFIG.instagram],
  slogan: SITE_CONFIG.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body className="bg-shell font-sans text-slate-900 antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17997502951"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17997502951');
          `}
        </Script>

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
      </body>
    </html>
  );
}
