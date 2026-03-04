import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SECTION_CLASSES } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Serviços",
  description:
    "Serviços da HINENI para construção de sites institucionais empresariais, landing pages estratégicas e estruturas digitais para negócios.",
  path: "/servicos",
});

const services = [
  {
    title: "Sites Institucionais Empresariais",
    text: "Projetos voltados para autoridade de marca, clareza institucional e comunicação estratégica com stakeholders.",
  },
  {
    title: "Landing Pages Estratégicas",
    text: "Páginas orientadas à conversão com foco em campanhas, aquisição de demanda qualificada e objetivos comerciais.",
  },
  {
    title: "Estrutura Digital para Negócios",
    text: "Arquitetura completa para empresas que precisam unificar presença digital, narrativa e performance técnica.",
  },
];

const process = [
  "Imersão estratégica no contexto da empresa",
  "Arquitetura de conteúdo e direção de interface",
  "Desenvolvimento com foco em performance e SEO",
  "Publicação estruturada e plano de evolução",
];

export default function ServicosPage() {
  return (
    <>
      <section className={`bg-deep-blue ${SECTION_CLASSES.compact}`}>
        <Container>
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow="Serviços"
              title="Soluções digitais para marcas que exigem padrão empresarial."
              description="Projetos pensados para transmitir confiança desde o primeiro acesso e sustentar crescimento com consistência técnica."
            />
          </Reveal>
        </Container>
      </section>

      <section className={`bg-shell ${SECTION_CLASSES.standard}`}>
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.08}>
                <article className="premium-card-light h-full rounded-3xl p-8">
                  <h2 className="text-xl leading-snug text-deep-blue">{service.title}</h2>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">{service.text}</p>
                  <div className="mt-8 border-t border-slate-200 pt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-tech-blue">
                      Escopo sob medida
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className={`bg-ink ${SECTION_CLASSES.compact}`}>
        <Container className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow="Como trabalhamos"
              title="Processo objetivo para garantir previsibilidade e qualidade."
              description="A condução do projeto é orientada por etapas claras, com foco em agilidade, coerência técnica e alinhamento estratégico."
              className="mb-0"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <ol className="space-y-4">
              {process.map((step) => (
                <li
                  key={step}
                  className="premium-card-dark rounded-2xl px-5 py-4 text-sm leading-relaxed text-slate-200"
                >
                  {step}
                </li>
              ))}
            </ol>
            <Link
              href="/contato"
              className="mt-8 inline-flex rounded-full border border-gold-accent/45 bg-gold-accent/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.17em] text-slate-100 transition-colors hover:bg-gold-accent/20"
            >
              Solicitar proposta
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
