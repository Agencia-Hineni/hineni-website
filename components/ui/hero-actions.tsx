"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LinkButton } from "@/components/ui/link-button";

export function HeroActions() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className="flex flex-wrap gap-4">
        <LinkButton href="/contato" size="lg" className="cta-button shadow-[0_16px_30px_rgba(30,58,138,0.35)]">
          Falar com a Hineni
        </LinkButton>
        <LinkButton
          href="/servicos"
          variant="ghost"
          size="lg"
          className="cta-button hover:border-gold-accent/60 hover:text-shell"
        >
          Conhecer nossas soluções
        </LinkButton>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-4">
      <motion.div whileHover={{ y: -2, scale: 1.008 }} whileTap={{ y: 0, scale: 0.992 }}>
        <LinkButton
          href="/contato"
          size="lg"
          className="cta-button shadow-[0_16px_30px_rgba(30,58,138,0.35)]"
        >
          Falar com a Hineni
        </LinkButton>
      </motion.div>
      <motion.div whileHover={{ y: -2, scale: 1.008 }} whileTap={{ y: 0, scale: 0.992 }}>
        <LinkButton
          href="/servicos"
          variant="ghost"
          size="lg"
          className="cta-button hover:border-gold-accent/60 hover:text-shell"
        >
          Conhecer nossas soluções
        </LinkButton>
      </motion.div>
    </div>
  );
}
