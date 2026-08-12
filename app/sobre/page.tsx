import type { Metadata } from "next";
import { Reveal } from "@/components/animations/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SECTION_CLASSES } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Sobre",
  description:
    "Visao de trabalho, metodologia e compromissos tecnicos da HINENI no desenvolvimento de sites, sistemas e produtos digitais sob medida.",
  path: "/sobre",
});

const pillars = [
  {
    title: "Visão de negócio",
    text: "Cada projeto parte de objetivos reais da empresa, sem depender de formulas prontas ou promessas genericas.",
  },
  {
    title: "Rigor técnico",
    text: "Estruturamos site, sistema e conteudo com organizacao suficiente para manter qualidade no longo prazo.",
  },
  {
    title: "Relação de parceria",
    text: "Trabalhamos com proximidade e transparencia para que o time cliente tenha clareza de cada decisao e etapa.",
  },
];

const commitments = [
  "Escopo e cronograma definidos em linguagem objetiva",
  "Comunicacao constante sobre andamento e pendencias",
  "Planejamento integrado entre site, sistema e produto digital",
];

export default function SobrePage() {
  return (
    <>
      <section className={`bg-shell ${SECTION_CLASSES.standard}`}>
        <Container className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-tech-blue">Sobre a HINENI</p>
            <h1 className="mt-5 max-w-4xl text-4xl leading-[1.06] text-deep-blue sm:text-5xl lg:text-6xl">
              Solucoes digitais conduzidas com metodo, clareza e responsabilidade tecnica.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-600">
              A HINENI atende empresas que precisam transformar site, sistema e produto digital em uma operacao mais coerente e eficiente.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600">
              Combinamos diagnostico de contexto, execucao estruturada e acompanhamento continuo — entregando uma base digital solida, pronta para crescer junto com o negocio, a operacao comercial e o atendimento.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="premium-card-dark rounded-3xl p-8 text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">Compromisso central</p>
              <p className="mt-4 text-lg leading-relaxed text-shell">
                Construir uma presenca digital que gere confianca, atraia demanda e facilite decisao.
              </p>
              <div className="mt-8 space-y-3 border-t border-slate-700 pt-6 text-sm text-slate-300">
                {commitments.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </aside>
          </Reveal>
        </Container>
      </section>

      <section className={`bg-ink ${SECTION_CLASSES.compact}`}>
        <Container>
          <SectionHeading
            tone="dark"
            eyebrow="Como atuamos"
            title="Uma operacao organizada para reduzir risco e aumentar consistencia."
            description="Do briefing a execucao, o processo e orientado por checkpoints claros para garantir alinhamento entre posicionamento, conteudo e aquisicao."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 0.08}>
                <article className="premium-card-dark h-full rounded-2xl p-6">
                  <h2 className="text-lg font-semibold text-shell">{pillar.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{pillar.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
