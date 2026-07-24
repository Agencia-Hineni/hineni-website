"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pillTransition = shouldReduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 380, damping: 32 };

  return (
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
                  active ? "text-shell" : "text-slate-400 hover:text-shell",
                )}
              >
                {active ? (
                  <motion.span
                    layoutId="nav-active-pill"
                    transition={pillTransition}
                    className="absolute inset-0 rounded-full bg-slate-800/80"
                  />
                ) : null}
                <span className="relative">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <LinkButton href="/contato" variant="secondary" size="sm" className="hidden sm:inline-flex">
          Agendar diagnóstico
        </LinkButton>

        <button
          type="button"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-slate-200 md:hidden"
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={cn(
                "absolute left-0 top-0 h-[2px] w-5 bg-current transition-transform duration-300",
                mobileOpen && "translate-y-[6px] rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[6px] h-[2px] w-5 bg-current transition-opacity duration-300",
                mobileOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-3 h-[2px] w-5 bg-current transition-transform duration-300",
                mobileOpen && "-translate-y-[6px] -rotate-45",
              )}
            />
          </span>
        </button>
      </Container>

      <AnimatePresence>
        {mobileOpen ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-[#020617]/55 backdrop-blur-[2px] md:hidden"
            />
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 24 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-4 top-[4.5rem] z-50 w-[calc(100%-2rem)] max-w-sm rounded-2xl border border-slate-700 bg-[#0B0F19]/97 p-4 shadow-[0_24px_50px_rgba(2,6,23,0.55)] md:hidden"
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
                href="/contato"
                variant="secondary"
                size="md"
                onClick={() => setMobileOpen(false)}
                className="mt-3 w-full"
              >
                Agendar diagnóstico
              </LinkButton>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
