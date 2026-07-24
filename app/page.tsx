import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { HeroParallax } from "@/components/animations/hero-parallax";
import { Reveal } from "@/components/animations/reveal";
import { ScrollCue } from "@/components/animations/scroll-cue";
import { Container } from "@/components/ui/container";
import { HeroActions } from "@/components/ui/hero-actions";
import { SectionHeading } from "@/components/ui/section-heading";
import { SECTION_CLASSES } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";
import { getSiteContent } from "@/lib/site-content";

export const metadata: Metadata = createPageMetadata({
  title: "Tecnologia, Marketing e Estrutura Digital para Empresas",
  description:
    "A HINENI estrutura, posiciona e impulsiona empresas atraves de tecnologia, marketing e estrategia digital.",
  path: "/",
});

const services = [
  {
    title: "Criacao de Sites",
    text: "Estrutura digital profissional com foco em posicionamento e conversao.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 9h18" />
        <path d="M7 15h4" />
      </svg>
    ),
  },
  {
    title: "Gestao de Instagram",
    text: "Planejamento estrategico, crescimento e posicionamento de marca.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Trafego Pago",
    text: "Anuncios estrategicos para geracao de clientes qualificados.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <path d="m5 16 4-4 3 3 7-7" />
        <path d="M14 8h5v5" />
        <path d="M4 20h16" />
      </svg>
    ),
  },
  {
    title: "Estruturacao Digital",
    text: "Organizacao completa da presenca digital da empresa.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <rect x="4" y="4" width="6" height="6" rx="1.5" />
        <rect x="14" y="4" width="6" height="6" rx="1.5" />
        <rect x="9" y="14" width="6" height="6" rx="1.5" />
        <path d="M10 7h4" />
        <path d="M12 10v4" />
      </svg>
    ),
  },
];

const workModel = [
  {
    title: "Diagnostico Estrategico",
    text: "Mapeamos o momento da empresa, prioridades comerciais e gargalos para definir a linha certa de crescimento.",
  },
  {
    title: "Estruturacao Digital",
    text: "Organizamos canais, ativos e mensagens para construir uma base profissional, coerente e pronta para escalar.",
  },
  {
    title: "Implementacao Tecnica",
    text: "Executamos site, automacoes, campanhas e ajustes tecnicos com clareza de escopo e foco em performance.",
  },
  {
    title: "Crescimento e Otimizacao",
    text: "Acompanhamos a evolucao da operacao digital para melhorar resultados, refinar estrategia e ampliar consistencia.",
  },
];

const commitments = [
  "Sites, redes sociais e campanhas trabalhando com a mesma direcao estrategica",
  "Presenca digital organizada para sustentar autoridade, conversao e operacao",
  "Base tecnica preparada para marketing, acompanhamento e crescimento continuo",
];

const trustSignals = ["Tecnologia aplicada", "Posicionamento premium", "Crescimento com consistencia"];

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
      <section className="hero-depth relative overflow-hidden text-slate-100">
        <Image
          src="/branding/banner-principal.webp"
          alt="Banner institucional da HINENI"
          fill
          priority
          unoptimized
          sizes="100vw"
          quality={75}
          className="object-cover object-[62%_center] opacity-58 sm:object-center sm:opacity-40"
        />
        <HeroParallax />
        <Container className="relative flex min-h-[100svh] flex-col justify-center py-16">
          <Reveal transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.04 }}>
            <p className="mb-8 inline-flex rounded-full border border-slate-600/80 bg-slate-900/72 px-5 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
              Estruturacao digital para empresas em expansao
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <h1 className="max-w-4xl text-5xl leading-[0.96] text-shell sm:text-6xl lg:text-7xl">
              Tecnologia, marketing e estrutura digital para empresas que querem crescer com consistencia.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
              A HINENI estrutura, posiciona e impulsiona empresas atraves de tecnologia, marketing e estrategia digital.
            </p>
          </Reveal>
          <Reveal delay={0.28} className="mt-12">
            <HeroActions />
          </Reveal>

          <Reveal delay={0.4} className="mt-14 flex flex-wrap gap-3">
            {trustSignals.map((signal) => (
              <span key={signal} className="data-pill">
                {signal}
              </span>
            ))}
          </Reveal>
        </Container>
        <ScrollCue />
      </section>

      <section className={`section-shell bg-shell ${SECTION_CLASSES.standard}`}>
        <Container>
          <SectionHeading
            eyebrow="O que fazemos"
            title="Quatro frentes para estruturar sua presenca digital."
            description="Da criacao do site a gestao de trafego, cada frente segue o mesmo padrao tecnico e estrategico."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.06}>
                <article className="premium-card-light card-service h-full rounded-2xl p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold-accent/25 bg-gold-accent/8 text-gold-accent">
                    {service.icon}
                  </div>
                  <h2 className="mt-5 text-lg font-semibold text-deep-blue">{service.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className={`section-shell soft-divider bg-shell ${SECTION_CLASSES.standard}`}>
        <Container>
          <SectionHeading
            eyebrow="Como trabalhamos"
            title="Metodo profissional para estruturar, implementar e acelerar a operacao digital."
            description="Conduzimos cada projeto com visao estrategica e execucao tecnica para transformar a presenca digital em uma base real de crescimento."
          />
          <div className="mt-14 grid gap-x-10 gap-y-10 md:grid-cols-2">
            {workModel.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06} className="flat-row">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-deep-blue">{item.title}</h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-600">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className={`section-shell soft-divider bg-shell ${SECTION_CLASSES.compact}`}>
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Compromissos tecnicos"
              title="Cada entrega precisa sustentar posicionamento, operacao e crescimento."
              description="Nao atuamos apenas com ativos isolados. Construimos uma estrutura digital que acompanhe a evolucao da empresa com clareza e consistencia."
              className="mb-0"
            />
            <div className="mt-8 space-y-4">
              {commitments.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="premium-card-light rounded-2xl p-7">
              <p className="text-eyebrow text-tech-blue">{content.localSeo.headline}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{content.localSeo.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {content.localSeo.cities.map((city) => (
                  <span key={city} className="data-pill">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className={`bg-deep-blue text-slate-100 ${SECTION_CLASSES.standard}`}>
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow="Diagnostico"
              title="Torne sua empresa mais profissional, organizada e preparada para crescer."
              description="Comecamos com um diagnostico estrategico para identificar prioridades, alinhar tecnologia e marketing e definir a melhor estrutura para o proximo ciclo da empresa."
              className="mb-0"
            />
          </Reveal>
          <Reveal delay={0.14}>
            <div className="premium-card-dark rounded-3xl p-8">
              <p className="text-sm leading-relaxed text-slate-300">
                Receba uma leitura objetiva da sua presenca digital e descubra os proximos passos para posicionar, organizar e impulsionar sua empresa.
              </p>
              <Link
                href="/contato"
                className="link-underline mt-7 inline-flex items-center text-sm font-semibold uppercase tracking-[0.16em] text-gold-accent hover:text-shell"
              >
                Solicitar diagnostico gratuito
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
