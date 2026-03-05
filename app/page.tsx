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
  title: "Estrutura Digital para Empresas que Pensam Grande",
  description:
    "Desenvolvimento web estratégico com foco em autoridade e performance para empresas que buscam posicionamento digital de alto padrão.",
  path: "/",
});

const pillars = [
  {
    title: "Arquitetura Institucional",
    text: "Projetos concebidos para fortalecer credibilidade, presença de mercado e comunicação corporativa.",
  },
  {
    title: "Tecnologia de Alta Performance",
    text: "Aplicação de boas práticas técnicas para entrega rápida, segura e escalável desde o lançamento.",
  },
  {
    title: "Estratégia de Posicionamento",
    text: "Estruturas digitais alinhadas com decisões comerciais, marketing e metas de crescimento da empresa.",
  },
];

const differentiators = [
  {
    title: "Planejamento Executivo",
    text: "Cada projeto nasce de diagnóstico estratégico, com visão de médio e longo prazo para o ambiente digital.",
  },
  {
    title: "Padrão Visual Premium",
    text: "Direção visual contemporânea com equilíbrio entre impacto, sofisticação e clareza institucional.",
  },
  {
    title: "Entrega Orientada a Resultado",
    text: "Estruturas prontas para performance real em SEO, conversão e experiência de navegação em múltiplos dispositivos.",
  },
];

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
          className="object-cover object-center opacity-40"
        />
        <div className="surface-grid absolute inset-0 opacity-[0.13]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_18%,rgba(30,58,138,0.35),transparent_58%),radial-gradient(circle_at_14%_78%,rgba(184,148,66,0.08),transparent_42%)]" />
        <Container className="relative flex min-h-[100svh] flex-col justify-center">
          <Reveal transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.04 }}>
            <p className="mb-8 inline-flex rounded-full border border-slate-600/80 bg-slate-900/72 px-5 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
              Arquitetura digital empresarial
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <h1 className="max-w-5xl text-5xl leading-[0.94] text-shell sm:text-6xl lg:text-7xl">
              Estrutura Digital para Empresas que Pensam Grande.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">
              Desenvolvimento web estratégico com foco em autoridade e performance.
            </p>
          </Reveal>
          <Reveal delay={0.28} className="mt-12">
            <HeroActions />
          </Reveal>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
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

      <section className={`bg-shell ${SECTION_CLASSES.standard}`}>
        <Container>
          <SectionHeading
            eyebrow="Posicionamento sólido"
            title="Decisões digitais orientadas por estrutura e rigor técnico."
            description="A HINENI atua na interseção entre negócio, design e engenharia para construir presença digital consistente, confiável e escalável."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {differentiators.map((item, index) => (
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

      <section className={`bg-shell ${SECTION_CLASSES.compact}`}>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Atendimento local"
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
              eyebrow="Escala e consistência"
              title="Cada entrega é desenhada para sustentar crescimento de marca."
              description="Seu site deixa de ser apenas uma vitrine e passa a operar como infraestrutura comercial, institucional e estratégica da empresa."
              className="mb-0"
            />
          </Reveal>
          <Reveal delay={0.14}>
            <div className="premium-card-dark rounded-3xl p-8">
              <p className="text-sm leading-relaxed text-slate-300">
                Estruturas prontas para receber novos produtos, campanhas e estudos de caso sem perder clareza visual nem performance.
              </p>
              <Link
                href="/servicos"
                className="mt-7 inline-flex items-center text-sm font-semibold uppercase tracking-[0.16em] text-gold-accent hover:text-shell"
              >
                Conhecer serviços
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
