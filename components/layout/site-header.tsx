"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-slate-700/85 bg-[#0B0F19]/90 shadow-[0_20px_50px_rgba(2,6,23,0.45)] backdrop-blur-2xl"
          : "border-slate-800/60 bg-[#0B0F19]/72 backdrop-blur-xl",
      )}
    >
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link href="/" className="inline-flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-xs font-semibold tracking-[0.18em] text-slate-200">
            H
          </span>
          <span className="text-sm font-semibold tracking-[0.32em] text-slate-100 sm:text-base">
            HINENI
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-slate-800/90 bg-slate-950/70 p-1 md:flex">
          {NAV_LINKS.map((item) => {
            const active =
              pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em]",
                  active
                    ? "bg-slate-900 text-shell"
                    : "text-slate-300 hover:bg-slate-900/70 hover:text-shell",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contato"
          className="hidden rounded-full border border-gold-accent/40 bg-gold-accent/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-100 hover:bg-gold-accent/20 sm:inline-flex"
        >
          Solicitar Proposta
        </Link>
      </Container>

      <Container className="pb-3 md:hidden">
        <nav className="flex items-center gap-2 overflow-x-auto whitespace-nowrap rounded-full border border-slate-800/80 bg-slate-950/70 p-1">
          {NAV_LINKS.map((item) => {
            const active =
              pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em]",
                  active
                    ? "bg-slate-900 text-shell"
                    : "text-slate-300 hover:bg-slate-900/70 hover:text-shell",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </Container>
    </header>
  );
}
