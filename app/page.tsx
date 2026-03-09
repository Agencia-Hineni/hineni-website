import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/animations/reveal";
import { Container } from "@/components/ui/container";
import { HeroActions } from "@/components/ui/hero-actions";
import { SectionHeading } from "@/components/ui/section-heading";
import { SECTION_CLASSES } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";
import { getSiteContent } from "@/lib/site-content";

export const metadata: Metadata = createPageMetadata({
  title: "Sites Profissionais para Operação Empresarial",
  description:
    "Soluções digitais para empresas que precisam de presença online confiável, com escopo claro e evolução contínua.",
  path: "/",
});

const pillars = [
  {
    title: "Diagnóstico Objetivo",
    text: "Antes de desenhar telas, mapeamos objetivo comercial, público, estrutura de conteúdo e prioridades de negócio.",
  },
  {
    title: "Execução Técnica",
    text: "Projeto, desenvolvimento e publicação com padrão profissional de performance, acessibilidade e organização do código.",
  },
  {
    title: "Evolução Contínua",
    text: "Seu site entra em produção pronto para melhorias constantes sem retrabalho de arquitetura ou perda de consistência.",
  },
];

const workModel = [
  {
    title: "Escopo definido desde o início",
    text: "Entregáveis, prazo e responsabilidades alinhados para evitar ruído durante o projeto.",
  },
  {
    title: "Comunicação de acompanhamento",
    text: "Atualizações diretas de status, pendências e próximas etapas com linguagem de negócio.",
  },
  {
    title: "Decisões baseadas em contexto real",
    text: "Cada recomendação considera maturidade da empresa, momento comercial e capacidade de operação interna.",
  },
];

const commitments = [
  "Arquitetura de páginas orientada para clareza de leitura e confiança institucional",
  "Base técnica preparada para SEO, rastreamento de eventos e futuras integrações",
  "Experiência consistente em desktop e mobile para público e equipe comercial",
];

const trustSignals = ["Escopo validado", "Cronograma objetivo", "Acompanhamento semanal"];

export default async function HomePage() {
  const content = await getSiteContent();

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "HINENI",
    areaServed: content.localSeo.cities.map((city) => ({ "@type": "City", name: city })),
    description: content.localSeo.description,
    email: content.contact.email,
    url: "https://hineni.com.br",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <section className={`hero-depth relative overflow-hidden text-slate-100 ${SECTION_CLASSES.hero}`}>
        <Image
          src="/branding/banner-principal.webp"
          alt="Banner institucional da HINENI"
          fill
          priority
          sizes="100vw"
          quality={75}
          className="object-cover object-center opacity-40"
        />
        <div className="surface-grid absolute inset-0 hidden opacity-[0.13] md:block" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_18%,rgba(30,58,138,0.35),transparent_58%)] md:bg-[radial-gradient(circle_at_85%_18%,rgba(30,58,138,0.35),transparent_58%),radial-gradient(circle_at_14%_78%,rgba(184,148,66,0.08),transparent_42%)]" />
        <Container className="relative flex min-h-[100svh] flex-col justify-center">
          <Reveal transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.04 }}>
            <p className="mb-8 inline-flex rounded-full border border-slate-600/80 bg-slate-900/72 px-5 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
              Consultoria e execução digital
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <h1 className="max-w-5xl text-5xl leading-[0.94] text-shell sm:text-6xl lg:text-7xl">
              Soluções digitais para empresas que precisam de operação confiável.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">
              Estruturamos sites e páginas institucionais com escopo claro, execução técnica e foco em resultado real.
            </p>
          </Reveal>
          <Reveal delay={0.28} className="mt-12">
            <HeroActions />
          </Reveal>

          <div className="mt-10 flex flex-wrap gap-3">
            {trustSignals.map((signal) => (
              <span key={signal} className="data-pill">
                {signal}
              </span>
            ))}
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={0.36 + index * 0.08}>
                <article className="premium-card-dark h-full rounded-2xl p-6 backdrop-blur-sm">
                  <h2 className="text-lg font-semibold text-shell">{pillar.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{pillar.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className={`section-shell bg-shell ${SECTION_CLASSES.standard}`}>
        <Container>
          <SectionHeading
            eyebrow="Modelo de trabalho"
            title="Método profissional para reduzir retrabalho e aumentar previsibilidade."
            description="A HINENI atua como parceiro técnico e estratégico para empresas que valorizam processos claros e entrega consistente."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {workModel.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="premium-card-light h-full rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-deep-blue">{item.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className={`section-shell soft-divider bg-shell ${SECTION_CLASSES.compact}`}>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Compromissos técnicos"
              title="Cada entrega precisa sustentar comunicação, operação e crescimento."
              description="Não trabalhamos com páginas soltas. Trabalhamos com uma base digital que acompanhe o ritmo de evolução da empresa."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {commitments.map((item, index) => (
              <Reveal key={item} delay={index * 0.06}>
                <article className="premium-card-light rounded-2xl px-6 py-5">
                  <p className="text-sm font-medium leading-relaxed text-slate-700">{item}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className={`section-shell soft-divider bg-shell ${SECTION_CLASSES.compact}`}>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Atendimento"
              title={content.localSeo.headline}
              description={content.localSeo.description}
            />
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.localSeo.cities.map((city, index) => (
              <Reveal key={city} delay={index * 0.06}>
                <article className="premium-card-light rounded-2xl px-6 py-5">
                  <p className="text-sm font-medium text-slate-700">{city}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className={`bg-deep-blue text-slate-100 ${SECTION_CLASSES.standard}`}>
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow="Próximo passo"
              title="Se você precisa de um site que funcione como ativo de negócio, vamos conversar."
              description="Entramos no projeto com escopo técnico, cronograma realista e acompanhamento de ponta a ponta."
              className="mb-0"
            />
          </Reveal>
          <Reveal delay={0.14}>
            <div className="premium-card-dark rounded-3xl p-8">
              <p className="text-sm leading-relaxed text-slate-300">
                Começamos por um diagnóstico rápido para entender seu momento, definir prioridades e montar a melhor linha de execução.
              </p>
              <Link
                href="/contato"
                className="mt-7 inline-flex items-center text-sm font-semibold uppercase tracking-[0.16em] text-gold-accent hover:text-shell"
              >
                Falar com especialista
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
