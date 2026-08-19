"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-all duration-300",
          scrolled
            ? "border-slate-800/70 bg-[#0B0F19]/94 shadow-[0_20px_50px_rgba(2,6,23,0.4)] backdrop-blur-2xl"
            : "border-transparent bg-[#0B0F19]/70 backdrop-blur-xl",
        )}
      >
      <Container className="flex h-[4.5rem] items-center justify-between gap-6 py-3">
        <Link href="/" className="inline-flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-slate-700 bg-slate-900">
            <Image
              src="/branding/favicon-final-51.png"
              alt="Símbolo da HINENI"
              width={36}
              height={36}
              className="h-full w-full object-cover"
              priority
            />
          </span>
          <span className="text-sm font-semibold tracking-[0.32em] text-slate-100">HINENI</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((item) => {
            const active =
              pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-colors",
                  active
                    ? "bg-slate-800/80 text-shell"
                    : "text-slate-400 hover:bg-slate-900/55 hover:text-shell",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <LinkButton
          href={{ pathname: "/contato", query: { origem: "Menu" } }}
          variant="secondary"
          size="sm"
          className="hidden sm:inline-flex"
        >
          Falar com a Hineni
        </LinkButton>

        <button
          type="button"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/50 text-slate-200 transition-colors hover:bg-slate-800/80 md:hidden"
        >
          <span className="relative block h-3 w-4">
            <span
              className={cn(
                "absolute inset-x-0 top-0 h-[1.5px] rounded-full bg-current transition-all duration-300",
                mobileOpen && "top-1/2 -translate-y-1/2 rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute inset-x-0 top-1/2 h-[1.5px] -translate-y-1/2 rounded-full bg-current transition-opacity duration-300",
                mobileOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute inset-x-0 bottom-0 h-[1.5px] rounded-full bg-current transition-all duration-300",
                mobileOpen && "bottom-1/2 translate-y-1/2 -rotate-45",
              )}
            />
          </span>
        </button>
      </Container>
      </header>

      <div
        onClick={() => setMobileOpen(false)}
        className={cn(
          "fixed inset-0 z-40 bg-[#020617]/92 backdrop-blur-md transition-opacity duration-200 md:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />
      <div
        className={cn(
          "fixed right-4 top-[4.5rem] z-50 w-[calc(100%-2rem)] max-w-sm rounded-2xl border border-slate-700 bg-[#0B0F19]/97 p-4 shadow-[0_24px_50px_rgba(2,6,23,0.55)] transition-[opacity,transform] duration-300 md:hidden",
          mobileOpen
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-2 scale-[0.98] opacity-0",
        )}
      >
        <nav className="flex flex-col gap-1">
          {NAV_LINKS.map((item) => {
            const active =
              pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "rounded-xl px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em]",
                  active
                    ? "bg-slate-800/80 text-shell"
                    : "text-slate-400 hover:bg-slate-900/75 hover:text-shell",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <LinkButton
          href={{ pathname: "/contato", query: { origem: "Menu" } }}
          variant="secondary"
          size="md"
          onClick={() => setMobileOpen(false)}
          className="mt-3 w-full"
        >
          Falar com a Hineni
        </LinkButton>
      </div>
    </>
  );
}
