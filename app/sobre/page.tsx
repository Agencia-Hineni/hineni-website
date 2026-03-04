import type { Metadata } from "next";
import { Reveal } from "@/components/animations/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SECTION_CLASSES } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Sobre",
  description:
    "Conheça a visão, estrutura e metodologia da HINENI na construção de projetos digitais empresariais.",
  path: "/sobre",
});

const pillars = [
  {
    title: "Visão Estratégica",
    text: "Cada solução é desenhada para consolidar presença digital e fortalecer percepção de valor da empresa no mercado.",
  },
  {
    title: "Estrutura Técnica",
    text: "Arquitetura limpa, segura e escalável para suportar expansão de conteúdos, serviços e oportunidades comerciais.",
  },
  {
    title: "Metodologia Clara",
    text: "Processo orientado por diagnóstico, planejamento, execução e evolução contínua para garantir consistência nos resultados.",
  },
];

export default function SobrePage() {
  return (
    <>
      <section className={`bg-shell ${SECTION_CLASSES.standard}`}>
        <Container className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-tech-blue">
              Sobre a HINENI
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl leading-[1.06] text-deep-blue sm:text-5xl lg:text-6xl">
              Estrutura, visão e execução para presença digital corporativa.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-600">
              A HINENI desenvolve estruturas digitais estratégicas para empresas que buscam posicionamento sólido no ambiente online.
            </p>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600">
              Atuamos com rigor técnico e direção institucional para que cada projeto represente autoridade, confiança e maturidade empresarial.
            </p>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600">
              Nossa missão é ajudar empresas e organizações a desenvolverem uma presença digital sólida, com design moderno, funcionalidade, desempenho e experiência positiva para seus usuários.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="premium-card-dark rounded-3xl p-8 text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                Compromisso central
              </p>
              <p className="mt-4 text-lg leading-relaxed text-shell">
                Transformar presença digital em infraestrutura estratégica de crescimento.
              </p>
              <div className="mt-8 space-y-3 border-t border-slate-700 pt-6 text-sm text-slate-300">
                <p>Diagnóstico orientado por negócio</p>
                <p>Direção visual com padrão corporativo</p>
                <p>Engenharia para performance e escala</p>
              </div>
            </aside>
          </Reveal>
        </Container>
      </section>

      <section className={`bg-ink ${SECTION_CLASSES.compact}`}>
        <Container>
          <SectionHeading
            tone="dark"
            eyebrow="Metodologia institucional"
            title="Uma operação estruturada do briefing à evolução contínua."
            description="Nosso processo evita improviso e reduz ruído de execução, garantindo previsibilidade para equipes de marketing, comercial e direção."
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
