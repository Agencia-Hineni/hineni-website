"use client";

import { LinkButton } from "@/components/ui/link-button";

export function HeroActions() {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.992]">
        <LinkButton
          href="/contato"
          size="lg"
          className="cta-button shadow-[0_16px_30px_rgba(30,58,138,0.35)]"
        >
          Falar com a Hineni
        </LinkButton>
      </div>
      <div className="transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.992]">
        <LinkButton
          href="/servicos"
          variant="ghost"
          size="lg"
          className="cta-button hover:border-gold-accent/60 hover:text-shell"
        >
          Conhecer nossas soluções
        </LinkButton>
      </div>
    </div>
  );
}
