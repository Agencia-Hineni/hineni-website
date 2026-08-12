import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { SECTION_CLASSES } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";
import { getSiteContent } from "@/lib/site-content";

export const metadata: Metadata = createPageMetadata({
  title: "Serviços",
  description:
    "Sites, landing pages, sistemas web e produtos SaaS desenvolvidos sob medida pela HINENI para empresas que querem evoluir atraves da tecnologia.",
  path: "/servicos",
});

const process = [
  "Diagnóstico do contexto atual e dos objetivos do negócio",
  "Definição de escopo, cronograma e prioridades de entrega",
  "Criação da arquitetura de conteúdo e direção de interface",
  "Desenvolvimento, validação e publicação",
  "Acompanhamento pós-lançamento com plano de evolução",
];

const principles = [
  "Escopo fechado por etapa, com transparência de investimento",
  "Comunicação direta sobre status e dependências do projeto",
  "Decisões técnicas orientadas por impacto real para o negócio",
  "Base preparada para SEO, analytics e crescimento contínuo",
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
              title="Soluções digitais sob medida, do primeiro contato à entrega."
              description="Da landing page ao sistema mais complexo, cada projeto é conduzido com o mesmo padrão técnico e a mesma visão de negócio."
            />
          </Reveal>
        </Container>
      </section>

      <section className={`section-shell bg-shell ${SECTION_CLASSES.standard}`}>
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {content.services.map((service, index) => (
              <Reveal key={service.name} delay={index * 0.08}>
                <article className="premium-card-light card-service flex h-full flex-col rounded-3xl p-8">
                  <span className="text-eyebrow inline-flex w-fit rounded-full border border-slate-300 px-3 py-1 text-slate-500">
                    Escopo {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-4 text-xl leading-snug text-deep-blue">{service.name}</h2>
                  <p className="text-body-soft mt-4 text-sm text-slate-600">{service.description}</p>

                  <div className="mt-6 border-t border-slate-200 pt-5">
                    <p className="text-eyebrow text-tech-blue">Investimento</p>
                    <p className="mt-2 text-lg font-semibold text-deep-blue">{service.price}</p>
                  </div>

                  <LinkButton href="/contato" size="sm" className="mt-6 w-full justify-center">
                    Falar com a Hineni
                  </LinkButton>
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
              eyebrow="Como conduzimos"
              title="Etapas objetivas para entregar com consistência técnica."
              description="A condução segue um fluxo simples e transparente para facilitar decisão, aprovação e implantação."
              className="mb-0"
            />
            <div className="mt-8 space-y-3 border-t border-slate-800 pt-6">
              {principles.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <Link
              href="/contato"
              className="link-underline mt-8 inline-flex items-center text-xs font-semibold uppercase tracking-[0.17em] text-gold-accent hover:text-shell"
            >
              Falar com a Hineni
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <ol className="space-y-4">
              {process.map((step, index) => (
                <li
                  key={step}
                  className="premium-card-dark flex items-start gap-4 rounded-2xl px-5 py-4 text-sm leading-relaxed text-slate-200"
                >
                  <span className="text-xs font-semibold text-gold-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
