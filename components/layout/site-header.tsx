"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/container";
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
          <span className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-slate-700 bg-slate-900">
            <Image
              src="/branding/favicon-final-51.png"
              alt="Símbolo da HINENI"
              width={40}
              height={40}
              className="h-full w-full object-cover"
              priority
            />
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

        <button
          type="button"
          aria-label="Abrir menu"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-slate-200 md:hidden"
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={cn(
                "absolute left-0 top-0 h-[2px] w-5 bg-current transition-transform",
                mobileOpen && "translate-y-[6px] rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[6px] h-[2px] w-5 bg-current transition-opacity",
                mobileOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-3 h-[2px] w-5 bg-current transition-transform",
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
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-[#020617]/55 backdrop-blur-[2px] md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 24 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-4 top-20 z-50 w-[calc(100%-2rem)] max-w-sm rounded-2xl border border-slate-700 bg-[#0B0F19]/96 p-4 shadow-[0_24px_50px_rgba(2,6,23,0.55)] md:hidden"
            >
              <nav className="flex flex-col gap-2">
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
                          ? "bg-slate-900 text-shell"
                          : "text-slate-300 hover:bg-slate-900/75 hover:text-shell",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
              <Link
                href="/contato"
                onClick={() => setMobileOpen(false)}
                className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-gold-accent/40 bg-gold-accent/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-100 hover:bg-gold-accent/20"
              >
                Solicitar Proposta
              </Link>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
