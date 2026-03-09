import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SECTION_CLASSES } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Projetos",
  description:
    "Portfólio institucional da HINENI com estudos de caso objetivos e estrutura pronta para novos projetos.",
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
    challenge:
      "Organizar conteúdo institucional e canais de contato em uma estrutura clara, com leitura objetiva em desktop e mobile.",
    solution:
      "Arquitetura de navegação direta, layout responsivo e foco em comunicação institucional para facilitar acesso às informações principais.",
    highlights: [
      "Estrutura institucional com navegação objetiva",
      "Responsividade para celular e computador",
      "Integração de contato para atendimento rápido",
    ],
    stack: ["Next.js", "Tailwind CSS", "Formulários"],
  },
];

export default function ProjetosPage() {
  return (
    <>
      <section className={`section-shell bg-shell ${SECTION_CLASSES.compact}`}>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Projetos"
              title="Estudos de caso com foco em contexto, decisão e entrega."
              description="Cada case mostra o problema, a linha de execução adotada e os principais entregáveis para o negócio."
            />
          </Reveal>
        </Container>
      </section>

      <section className={`bg-deep-blue ${SECTION_CLASSES.standard}`}>
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            {projects.map((project, index) => (
              <Reveal key={project.name} delay={index * 0.08}>
                <article className="premium-card-dark overflow-hidden rounded-3xl text-slate-200">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src="/branding/tda-cover.png"
                      alt="Capa do projeto Igreja TDA"
                      fill
                      sizes="(max-width: 768px) 100vw, 66vw"
                      quality={68}
                      className="object-cover object-center opacity-45 transition-transform duration-500 hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/35 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-300">
                        {project.segment}
                      </p>
                      <span className="rounded-full border border-gold-accent/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-gold-accent">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-7">
                    <h2 className="text-2xl leading-snug text-shell">{project.name}</h2>
                    <p className="mt-4 text-sm leading-relaxed text-slate-300">{project.scope}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-slate-600/70 bg-slate-900/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 grid gap-6 sm:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Desafio</p>
                        <p className="mt-2 text-sm leading-relaxed text-slate-300">{project.challenge}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Solução</p>
                        <p className="mt-2 text-sm leading-relaxed text-slate-300">{project.solution}</p>
                      </div>
                    </div>

                    <div className="mt-7 border-t border-slate-700 pt-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                        Entregas principais
                      </p>
                      <ul className="mt-3 space-y-2 text-sm text-slate-300">
                        {project.highlights.map((item) => (
                          <li key={item}>- {item}</li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 inline-flex rounded-full border border-gold-accent/40 bg-gold-accent/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold-accent hover:bg-gold-accent/18 hover:text-shell"
                    >
                      Visitar projeto
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12} className="mt-6">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
              Novo estudo de caso pode ser adicionado nesta mesma estrutura.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
