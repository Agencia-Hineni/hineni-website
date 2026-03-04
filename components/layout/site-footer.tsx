import Link from "next/link";
import { Container } from "@/components/ui/container";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

const quickLinks = NAV_LINKS.filter((link) => link.href !== "/");

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-ink text-slate-300">
      <Container className="grid gap-10 py-12 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="text-sm font-semibold tracking-[0.25em] text-shell">HINENI</p>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-400">
            Estruturas digitais estratégicas para empresas que exigem posicionamento de alto padrão, segurança técnica e consistência de marca.
          </p>
          <p className="mt-5 text-xs uppercase tracking-[0.18em] text-slate-500">{SITE_CONFIG.contactEmail}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {quickLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-300 transition-colors hover:border-slate-500 hover:text-shell"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </Container>
      <Container className="border-t border-slate-800 py-5">
        <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
          {year} HINENI. Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  );
}
