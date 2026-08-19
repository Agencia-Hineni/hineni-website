import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { HeroParallax } from "@/components/animations/hero-parallax";
import { Reveal } from "@/components/animations/reveal";
import { ScrollCue } from "@/components/animations/scroll-cue";
import { ProspectMockup } from "@/components/prospect/prospect-mockup";
import { Container } from "@/components/ui/container";
import { HeroActions } from "@/components/ui/hero-actions";
import { LinkButton } from "@/components/ui/link-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { SECTION_CLASSES, SITE_CONFIG } from "@/lib/constants";
import { projects } from "@/lib/projects";
import { createPageMetadata } from "@/lib/seo";
import { getSiteContent } from "@/lib/site-content";

export const metadata: Metadata = createPageMetadata({
  title: "Tecnologia e Soluções Digitais para Negócios",
  description:
    "A HINENI cria sites, landing pages, sistemas e produtos digitais sob medida para empresas que querem evoluir através da tecnologia.",
  path: "/",
});

const solutions = [
  {
    title: "Landing Pages",
    text: "Para campanhas, lançamentos e ofertas que precisam converter rápido, com uma página objetiva focada em um único resultado.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h8" />
        <path d="M8 12h8" />
        <rect x="8" y="15.5" width="8" height="3" rx="1" />
      </svg>
    ),
  },
  {
    title: "Sites",
    text: "Para empresas que precisam estabelecer ou fortalecer sua presença digital, do institucional ao projeto mais personalizado.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 9h18" />
        <path d="M7 15h4" />
      </svg>
    ),
  },
  {
    title: "Sistemas Web",
    text: "Para operações que já não cabem em ferramentas genéricas, com sistemas desenvolvidos sob medida para a necessidade real do negócio.",
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
  {
    title: "SaaS",
    text: "Para quem quer transformar uma ideia em produto digital, com desenvolvimento de plataformas e produtos SaaS sob medida.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <path d="M7 18h10a4 4 0 0 0 .6-7.96A5.5 5.5 0 0 0 7.1 9.5 4 4 0 0 0 7 18Z" />
      </svg>
    ),
  },
];

const whyHineni = [
  {
    title: "Desenvolvimento personalizado",
    text: "Cada projeto é pensado para a necessidade real da empresa, não para um modelo genérico.",
  },
  {
    title: "Visão de negócio",
    text: "Decisões técnicas guiadas pelo impacto real no negócio do cliente, não só pela tecnologia em si.",
  },
  {
    title: "Tecnologia moderna",
    text: "Stack atualizada, pensada para performance, manutenção e crescimento no longo prazo.",
  },
  {
    title: "Soluções escaláveis",
    text: "Estrutura preparada para acompanhar a evolução da empresa, sem precisar recomeçar do zero.",
  },
  {
    title: "Atendimento próximo",
    text: "Comunicação direta em cada etapa do projeto, sem intermediários.",
  },
  {
    title: "Foco no resultado do projeto",
    text: "O objetivo é sempre entregar algo que funcione de verdade no dia a dia da empresa.",
  },
];

const howItWorks = [
  "Entendemos sua necessidade",
  "Definimos a solução",
  "Desenvolvemos o projeto",
  "Validamos com você",
  "Publicamos e entregamos",
];

const commitments = [
  "Sites, sistemas e produtos digitais desenvolvidos com a mesma direção estratégica",
  "Presença digital organizada para sustentar autoridade, conversão e operação",
  "Base técnica preparada para acompanhamento e crescimento contínuo",
];

const trustSignals = ["Tecnologia aplicada", "Posicionamento premium", "Crescimento com consistência"];

export default async function HomePage() {
  const content = await getSiteContent();

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "HINENI",
    areaServed: content.localSeo.cities.map((city) => ({ "@type": "City", name: city })),
    description: content.localSeo.description,
    email: content.contact.email,
    taxID: SITE_CONFIG.cnpj,
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
          fetchPriority="high"
          unoptimized
          sizes="100vw"
          quality={75}
          className="hidden object-cover opacity-20 sm:block sm:object-center sm:opacity-15"
        />
        <HeroParallax />
        <Container className="relative flex min-h-[100svh] flex-col justify-center py-16">
          <Reveal transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.04 }}>
            <p className="mb-8 inline-flex rounded-full border border-slate-600/80 bg-slate-900/72 px-5 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
              Tecnologia e soluções digitais para negócios
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <h1 className="max-w-4xl text-5xl leading-[0.96] text-shell sm:text-6xl lg:text-7xl">
              Tecnologia sob medida para empresas que querem crescer.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
              Criamos sites, landing pages, sistemas e produtos digitais que transformam necessidades reais do negócio em soluções profissionais e escaláveis.
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
            eyebrow="Soluções"
            title="Quatro frentes para colocar sua ideia em produção."
            description="De uma página de campanha a um produto SaaS completo, cada frente segue o mesmo padrão técnico e estratégico."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {solutions.map((solution, index) => (
              <Reveal key={solution.title} delay={index * 0.06}>
                <article className="premium-card-light card-service h-full rounded-2xl p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold-accent/25 bg-gold-accent/8 text-gold-accent">
                    {solution.icon}
                  </div>
                  <h2 className="mt-5 text-lg font-semibold text-deep-blue">{solution.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{solution.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className={`section-shell soft-divider bg-shell ${SECTION_CLASSES.standard}`}>
        <Container>
          <SectionHeading
            eyebrow="Como funciona"
            title="Um processo simples, do primeiro contato à entrega."
            description="Conduzimos cada projeto com clareza de etapas, para que você saiba exatamente o que esperar em cada momento."
          />
          <div className="mt-12 space-y-5 lg:max-w-2xl">
            {howItWorks.map((step, index) => (
              <Reveal key={step} delay={index * 0.05}>
                <div className="flat-row flex items-center gap-4">
                  <span className="text-sm font-semibold text-gold-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base font-medium text-deep-blue">{step}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className={`section-shell soft-divider bg-shell ${SECTION_CLASSES.compact}`}>
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.8fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Por que a Hineni"
              title="Tecnologia com visão de negócio, não só código."
              description="Cada entrega precisa sustentar posicionamento, operação e crescimento — não apenas funcionar tecnicamente."
              className="mb-0"
            />
            <div className="mt-8 grid gap-x-6 gap-y-4 sm:grid-cols-2">
              {whyHineni.map((item) => (
                <div key={item.title} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-accent" />
                  <span>
                    <strong className="font-semibold text-deep-blue">{item.title}.</strong> {item.text}
                  </span>
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
              <div className="mt-6 space-y-3 border-t border-slate-200 pt-5">
                {commitments.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-accent" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className={`bg-ink ${SECTION_CLASSES.compact}`}>
        <Container className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow="Hineni Prospect"
              title="Sua prospecção comercial, potencializada por inteligência artificial."
              description="Uma plataforma desenvolvida para ajudar equipes comerciais a encontrar empresas, organizar oportunidades e acelerar o processo de prospecção."
              className="mb-0"
            />
            <p className="mt-4 text-sm font-semibold text-gold-accent">
              Usuários ilimitados. Pague pelo uso, não pelo tamanho da sua equipe.
            </p>
            <div className="mt-8">
              <LinkButton href="/prospect">Conhecer o Hineni Prospect</LinkButton>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ProspectMockup />
          </Reveal>
        </Container>
      </section>

      <section className={`bg-deep-blue ${SECTION_CLASSES.standard}`}>
        <Container>
          <SectionHeading
            tone="dark"
            eyebrow="Projetos"
            title="Alguns projetos que já colocamos no ar."
            description="Cada projeto nasce de uma necessidade real. Veja o portfólio completo para entender o contexto e a solução de cada um."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal key={project.name} delay={index * 0.08}>
                <Link
                  href="/projetos"
                  className="group premium-card-dark card-case block h-full overflow-hidden rounded-3xl"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      quality={68}
                      className="object-cover object-center opacity-45 transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className={`absolute inset-0 ${project.accentClass}`} />
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="text-eyebrow text-slate-300">{project.category}</p>
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl text-shell">{project.name}</h3>
                    <p className="text-body-soft mt-3 text-sm text-slate-300">{project.summary}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.16}>
            <div className="mt-10 text-center">
              <LinkButton href="/projetos" variant="ghost" size="md">
                Ver todos os projetos
              </LinkButton>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className={`bg-deep-blue text-slate-100 ${SECTION_CLASSES.standard}`}>
        <Container className="text-center">
          <Reveal>
            <p className="mx-auto inline-flex rounded-full border border-slate-600/70 bg-slate-900/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-300">
              Vamos conversar
            </p>
            <h2 className="mx-auto mt-5 max-w-2xl text-3xl leading-[1.05] text-shell sm:text-4xl lg:text-5xl">
              Tem uma ideia ou precisa de uma solução digital?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Vamos transformar sua necessidade em tecnologia.
            </p>
          </Reveal>
          <Reveal delay={0.12} className="mt-9">
            <LinkButton href={{ pathname: "/contato", query: { origem: "Home" } }} size="lg">
              Falar com a Hineni
            </LinkButton>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
