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
    "Escopos digitais da HINENI para empresas que precisam de site institucional, redes sociais, trafego pago e base tecnica de evolucao.",
  path: "/servicos",
});

type Service = {
  title: string;
  text: string;
  idealFor: string;
  deliverables: string[];
};

const services: Service[] = [
  {
    title: "Site Institucional Empresarial",
    text: "Projeto completo para fortalecer confiança da marca e organizar comunicação com clientes, parceiros e investidores.",
    idealFor: "Empresas em fase de consolidação ou reposicionamento institucional.",
    deliverables: [
      "Arquitetura de páginas e navegação",
      "Copy orientada à clareza de proposta",
      "Desenvolvimento responsivo com SEO técnico",
    ],
  },
  {
    title: "Landing Page de Captação",
    text: "Página orientada a campanha com estrutura objetiva para captar demanda qualificada em lançamentos e mídia paga.",
    idealFor: "Times comerciais e de marketing que precisam de conversão com leitura rápida.",
    deliverables: [
      "Estrutura de seção focada no objetivo da oferta",
      "Integração de contato e rastreamento de eventos",
      "Ajustes para performance e carregamento rápido",
    ],
  },
  {
    title: "Gestao de Redes Sociais",
    text: "Planejamento e execucao de conteudo para redes sociais com foco em consistencia de marca, clareza de mensagem e frequencia de publicacao.",
    idealFor: "Empresas que precisam fortalecer presenca digital e manter comunicacao ativa com o publico.",
    deliverables: [
      "Planejamento editorial e calendario de conteudo",
      "Direcao de copy e posicionamento nas redes",
      "Acompanhamento da consistencia visual e comunicacional",
    ],
  },
  {
    title: "Trafego Pago",
    text: "Estruturacao e gestao de campanhas para gerar alcance, captar demanda qualificada e apoiar metas comerciais com leitura de dados.",
    idealFor: "Empresas que querem acelerar aquisicao com campanhas mais objetivas e melhor rastreamento.",
    deliverables: [
      "Planejamento de campanhas e segmentacao",
      "Acompanhamento de criativos, anuncios e verba",
      "Leitura de resultados e ajustes de performance",
    ],
  },
  {
    title: "Evolução e Manutenção Técnica",
    text: "Ciclo de melhorias para manter o site atualizado, com governança de conteúdo e base pronta para novos movimentos.",
    idealFor: "Empresas que querem escalar sem reconstruir o projeto a cada nova demanda.",
    deliverables: [
      "Rotina de ajustes e melhorias",
      "Suporte técnico para novas páginas e integrações",
      "Revisão periódica de performance e estrutura",
    ],
  },
];

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

const planBenefits = [
  "Diagnostico inicial para definir prioridades",
  "Escopo claro antes da implementacao",
  "Acompanhamento estrategico da evolucao",
];

const planIncludes: Record<string, string[]> = {
  "Plano Essencial": ["Criacao de site", "Estruturacao digital base"],
  "Plano Profissional": [
    "Criacao de site",
    "Estruturacao digital",
    "Gestao de Instagram",
  ],
  "Plano Premium": [
    "Criacao de site",
    "Estruturacao digital",
    "Gestao de Instagram",
    "Trafego pago",
  ],
};

function splitImplementationLabel(value: string) {
  const match = value.match(/^(.*?)(\s*\((.*)\))$/);

  if (!match) {
    return { highlight: value, detail: "" };
  }

  return {
    highlight: match[1].trim(),
    detail: match[3].trim(),
  };
}

function formatImplementation(value: string) {
  const { highlight, detail } = splitImplementationLabel(value);
  const totalMatch = detail.match(/^total\s+(.*)$/i);
  const normalizedTotal = (totalMatch ? totalMatch[1].trim() : detail || highlight).replace(/^de\s+/i, "");

  return {
    installment: highlight,
    total: normalizedTotal,
  };
}

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
              title="Soluções digitais com escopo claro e execução profissional."
              description="Atuamos com sites, redes sociais, trafego pago e evolucao tecnica para empresas que precisam de uma operacao digital mais completa."
            />
          </Reveal>
        </Container>
      </section>

      <section className={`section-shell bg-shell ${SECTION_CLASSES.standard}`}>
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.08}>
                <article className="premium-card-light card-service h-full rounded-3xl p-8">
                  <span className="text-eyebrow inline-flex rounded-full border border-slate-300 px-3 py-1 text-slate-500">
                    Escopo {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-xl leading-snug text-deep-blue">{service.title}</h2>
                  <p className="text-body-soft mt-4 text-sm text-slate-600">{service.text}</p>
                  <p className="text-eyebrow mt-5 text-tech-blue">
                    Ideal para
                  </p>
                  <p className="text-body-soft mt-2 text-sm text-slate-600">{service.idealFor}</p>
                  <div className="mt-6 border-t border-slate-200 pt-5">
                    <p className="text-eyebrow text-tech-blue">
                      Entregáveis base
                    </p>
                    <ul className="text-body-soft mt-3 space-y-2 text-sm text-slate-600">
                      {service.deliverables.map((item) => (
                        <li key={item}>- {item}</li>
                      ))}
                    </ul>
                  </div>
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
              eyebrow="Diretrizes de execução"
              title="Padrão de trabalho para manter qualidade e previsibilidade."
              description="A operação é estruturada para que o projeto avance com segurança técnica e alinhamento com o time da empresa."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {principles.map((item, index) => (
              <Reveal key={item} delay={index * 0.06}>
                <article className="premium-card-light rounded-2xl px-6 py-5">
                  <p className="text-sm font-medium leading-relaxed text-slate-700">{item}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className={`soft-divider bg-deep-blue ${SECTION_CLASSES.compact}`}>
        <Container>
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow="Planos"
              title="Modelos comerciais para diferentes estágios de operação."
              description="Escolha um ponto de partida e evolua a estrutura conforme a demanda do negócio."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {content.plans.map((plan, index) => (
              <Reveal key={plan.name} delay={index * 0.08}>
                {(() => {
                  const implementation = formatImplementation(plan.implementation);
                  const includedItems = planIncludes[plan.name] ?? ["Escopo personalizado sob diagnostico"];

                  return (
                    <article
                      className={`relative flex h-full flex-col overflow-hidden rounded-[2rem] p-8 text-slate-200 ${
                        plan.featured
                          ? "border border-gold-accent/45 bg-[radial-gradient(circle_at_top,rgba(183,141,45,0.18),transparent_34%),linear-gradient(165deg,rgba(11,15,25,0.96),rgba(30,58,138,0.4))] shadow-[0_28px_58px_rgba(2,6,23,0.56)]"
                          : "premium-card-dark"
                      }`}
                    >
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                            {plan.featured ? "Plano em destaque" : "Plano sob medida"}
                          </p>
                          <h3 className="mt-3 text-2xl text-shell">{plan.name}</h3>
                        </div>
                        {plan.featured ? (
                          <span className="inline-flex rounded-full border border-gold-accent/45 bg-gold-accent/12 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-accent">
                            Recomendado
                          </span>
                        ) : null}
                      </div>

                      <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-slate-950/28 p-6">
                        <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Valor total</p>
                        <p className="mt-3 text-4xl font-semibold leading-tight text-shell">
                          {implementation.total}
                        </p>
                        <div className="mt-4 rounded-2xl border border-gold-accent/20 bg-gold-accent/8 px-4 py-3">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-accent">
                            Parcelado em ate 12x no cartao
                          </p>
                          <p className="mt-2 text-base font-medium leading-relaxed text-slate-200">
                            {implementation.installment}
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 rounded-[1.5rem] border border-slate-700/80 bg-slate-950/36 px-5 py-4">
                        <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Mensalidade de suporte</p>
                        <p className="mt-2 text-xl font-semibold text-shell">{plan.monthly}</p>
                        <p className="mt-2 text-xs uppercase tracking-[0.14em] text-slate-400">
                          {plan.contract}
                        </p>
                      </div>

                      <div className="mt-6 rounded-[1.5rem] border border-slate-700/80 bg-slate-950/22 px-5 py-5">
                        <p className="text-xs uppercase tracking-[0.14em] text-gold-accent">Este plano inclui</p>
                        <div className="mt-4 space-y-3">
                          {includedItems.map((item) => (
                            <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-200">
                              <span className="mt-1.5 h-2 w-2 rounded-full bg-gold-accent" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 space-y-3 border-t border-slate-700/80 pt-6">
                        {planBenefits.map((benefit) => (
                          <div key={benefit} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
                            <span className="mt-1.5 h-2 w-2 rounded-full bg-gold-accent" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8">
                        <LinkButton
                          href="/contato"
                          variant={plan.featured ? "secondary" : "primary"}
                          size="lg"
                          className={`w-full ${plan.featured ? "shadow-[0_18px_34px_rgba(183,141,45,0.16)]" : ""}`}
                        >
                          Solicitar diagnostico
                        </LinkButton>
                        <p className="mt-3 text-center text-xs leading-relaxed text-slate-400">
                          Conversamos sobre seu momento e indicamos o melhor plano para crescimento.
                        </p>
                      </div>
                    </article>
                  );
                })()}
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
