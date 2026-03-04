import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SECTION_CLASSES } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Projetos",
  description:
    "Portfólio institucional da HINENI com estrutura pronta para evolução em estudos de caso completos.",
  path: "/projetos",
});

const projects = [
  {
    name: "Igreja TDA",
    segment: "Institucional",
    scope:
      "Site institucional desenvolvido para fortalecer presença digital, clareza de comunicação e experiência de navegação da comunidade.",
    status: "Projeto publicado",
    url: "https://igrejatda.com",
  },
];

export default function ProjetosPage() {
  return (
    <>
      <section className={`bg-shell ${SECTION_CLASSES.compact}`}>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Projetos"
              title="Portfólio em evolução contínua para estudos de caso detalhados."
              description="Esta estrutura foi desenhada para receber novos cases com profundidade estratégica, indicadores e resultados mensuráveis."
            />
          </Reveal>
        </Container>
      </section>

      <section className={`bg-deep-blue ${SECTION_CLASSES.standard}`}>
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.name} delay={(index % 3) * 0.08}>
                <article className="premium-card-dark h-full rounded-3xl p-7 text-slate-200">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                      {project.segment}
                    </p>
                    <span className="rounded-full border border-gold-accent/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-gold-accent">
                      {project.status}
                    </span>
                  </div>
                  <h2 className="mt-5 text-xl leading-snug text-shell">{project.name}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-slate-300">{project.scope}</p>
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex text-xs font-semibold uppercase tracking-[0.16em] text-gold-accent hover:text-shell"
                  >
                    Visitar projeto
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
