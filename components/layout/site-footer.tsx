import Link from "next/link";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

const quickLinks = NAV_LINKS.filter((link) => link.href !== "/");

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-ink text-slate-300">
      <Container className="grid gap-10 py-14 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="text-sm font-semibold tracking-[0.25em] text-shell">HINENI</p>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-400">
            Estruturas digitais para empresas que precisam de comunicação clara, operação confiável e evolução contínua.
          </p>
          <p className="mt-5 text-xs uppercase tracking-[0.18em] text-slate-400">{SITE_CONFIG.contactEmail}</p>
          <LinkButton href="/contato" variant="ghost" size="sm" className="mt-6">
            Agendar diagnóstico
          </LinkButton>
        </div>

        <div className="flex flex-wrap gap-2">
          {quickLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-slate-800 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-400 transition-colors hover:border-slate-600 hover:text-shell"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </Container>
      <Container className="flex flex-col gap-2 border-t border-slate-800/80 py-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs uppercase tracking-[0.15em] text-slate-400">
          {year} HINENI. Soluções digitais empresariais.
        </p>
        <p className="text-xs uppercase tracking-[0.15em] text-slate-400">CNPJ {SITE_CONFIG.cnpj}</p>
      </Container>
    </footer>
  );
}
