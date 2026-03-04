"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function HeroActions() {
  return (
    <div className="flex flex-wrap gap-4">
      <motion.div whileHover={{ y: -2, scale: 1.008 }} whileTap={{ y: 0, scale: 0.992 }}>
        <Link
          href="/contato"
          className="inline-flex items-center justify-center rounded-full border border-transparent bg-tech-blue px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-shell shadow-[0_16px_30px_rgba(30,58,138,0.35)] hover:bg-[#2749ad]"
        >
          Solicitar Proposta
        </Link>
      </motion.div>
      <motion.div whileHover={{ y: -2, scale: 1.008 }} whileTap={{ y: 0, scale: 0.992 }}>
        <Link
          href="/projetos"
          className="inline-flex items-center justify-center rounded-full border border-slate-500/80 bg-slate-900/45 px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-slate-100 hover:border-gold-accent/60 hover:bg-slate-900/80 hover:text-shell"
        >
          Ver Projetos
        </Link>
      </motion.div>
    </div>
  );
}
