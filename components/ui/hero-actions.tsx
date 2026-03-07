"use client";

import { motion } from "framer-motion";
import { LinkButton } from "@/components/ui/link-button";

export function HeroActions() {
  return (
    <div className="flex flex-wrap gap-4">
      <motion.div whileHover={{ y: -2, scale: 1.008 }} whileTap={{ y: 0, scale: 0.992 }}>
        <LinkButton
          href="/contato"
          size="lg"
          className="shadow-[0_16px_30px_rgba(30,58,138,0.35)]"
        >
          Falar com especialista
        </LinkButton>
      </motion.div>
      <motion.div whileHover={{ y: -2, scale: 1.008 }} whileTap={{ y: 0, scale: 0.992 }}>
        <LinkButton
          href="/servicos"
          variant="ghost"
          size="lg"
          className="hover:border-gold-accent/60 hover:text-shell"
        >
          Ver escopos
        </LinkButton>
      </motion.div>
    </div>
  );
}
