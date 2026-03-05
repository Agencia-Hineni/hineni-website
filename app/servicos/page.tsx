import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SECTION_CLASSES } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";
import { getSiteContent } from "@/lib/site-content";

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

const capabilities = [
  "Integração com WhatsApp e canais de contato",
  "Otimização básica para mecanismos de busca (SEO)",
  "Estrutura responsiva para celular e computador",
  "Suporte técnico e manutenção contínua",
];

export default async function ServicosPage() {
  const content = await getSiteContent();

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

      <section className={`bg-shell ${SECTION_CLASSES.compact}`}>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Soluções complementares"
              title="Estrutura digital completa para operação e continuidade."
              description="Além da construção do site, a HINENI entrega recursos essenciais para comunicação, visibilidade e manutenção técnica contínua."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {capabilities.map((item, index) => (
              <Reveal key={item} delay={index * 0.06}>
                <article className="premium-card-light rounded-2xl px-6 py-5">
                  <p className="text-sm font-medium leading-relaxed text-slate-700">{item}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className={`bg-deep-blue ${SECTION_CLASSES.compact}`}>
        <Container>
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow="Planos"
              title="Modelos comerciais estruturados para diferentes níveis de operação."
              description="Escolha o plano adequado ao momento da empresa, mantendo padrão institucional, previsibilidade de investimento e evolução técnica."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {content.plans.map((plan, index) => (
              <Reveal key={plan.name} delay={index * 0.08}>
                <article
                  className={`h-full rounded-3xl p-8 text-slate-200 ${
                    plan.featured
                      ? "border border-gold-accent/45 bg-[linear-gradient(165deg,rgba(11,15,25,0.9),rgba(30,58,138,0.36))] shadow-[0_26px_52px_rgba(2,6,23,0.5)]"
                      : "premium-card-dark"
                  }`}
                >
                  {plan.featured ? (
                    <span className="inline-flex rounded-full border border-gold-accent/45 bg-gold-accent/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-accent">
                      Recomendado
                    </span>
                  ) : null}
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    {plan.name}
                  </p>
                  <div className="mt-6 border-t border-slate-700 pt-5">
                    <p className="text-xs uppercase tracking-[0.14em] text-slate-400">
                      Implementação
                    </p>
                    <p className="mt-2 text-xl font-semibold text-shell">{plan.implementation}</p>
                  </div>
                  <div className="mt-6 border-t border-slate-700 pt-5">
                    <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Mensalidade</p>
                    <p className="mt-2 text-lg font-semibold text-shell">{plan.monthly}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.14em] text-slate-400">
                      {plan.contract}
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
