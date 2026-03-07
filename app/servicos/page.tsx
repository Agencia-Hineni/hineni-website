import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SECTION_CLASSES } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";
import { getSiteContent } from "@/lib/site-content";

export const metadata: Metadata = createPageMetadata({
  title: "Servicos",
  description:
    "Escopos digitais da HINENI para empresas que precisam de site institucional, paginas de conversao e base tecnica de evolucao.",
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
    text: "Projeto completo para fortalecer confianca da marca e organizar comunicacao com clientes, parceiros e investidores.",
    idealFor: "Empresas em fase de consolidacao ou reposicionamento institucional.",
    deliverables: [
      "Arquitetura de paginas e navegacao",
      "Copy orientada a clareza de proposta",
      "Desenvolvimento responsivo com SEO tecnico",
    ],
  },
  {
    title: "Landing Page de Captacao",
    text: "Pagina orientada a campanha com estrutura objetiva para captar demanda qualificada em lancamentos e midia paga.",
    idealFor: "Times comerciais e de marketing que precisam de conversao com leitura rapida.",
    deliverables: [
      "Estrutura de secao focada no objetivo da oferta",
      "Integracao de contato e rastreamento de eventos",
      "Ajustes para performance e carregamento rapido",
    ],
  },
  {
    title: "Evolucao e Manutencao Tecnica",
    text: "Ciclo de melhorias para manter o site atualizado, com governanca de conteudo e base pronta para novos movimentos.",
    idealFor: "Empresas que querem escalar sem reconstruir o projeto a cada nova demanda.",
    deliverables: [
      "Rotina de ajustes e melhorias",
      "Suporte tecnico para novas paginas e integracoes",
      "Revisao periodica de performance e estrutura",
    ],
  },
];

const process = [
  "Diagnostico do contexto atual e dos objetivos do negocio",
  "Definicao de escopo, cronograma e prioridades de entrega",
  "Criacao da arquitetura de conteudo e direcao de interface",
  "Desenvolvimento, validacao e publicacao",
  "Acompanhamento pos-lancamento com plano de evolucao",
];

const principles = [
  "Escopo fechado por etapa, com transparencia de investimento",
  "Comunicacao direta sobre status e dependencias do projeto",
  "Decisoes tecnicas orientadas por impacto real para o negocio",
  "Base preparada para SEO, analytics e crescimento continuo",
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
              eyebrow="Servicos"
              title="Solucoes digitais com escopo claro e execucao profissional."
              description="Cada projeto e conduzido com metodo, acompanhamento e foco em resultado aplicavel no dia a dia da empresa."
            />
          </Reveal>
        </Container>
      </section>

      <section className={`section-shell bg-shell ${SECTION_CLASSES.standard}`}>
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.08}>
                <article className="premium-card-light h-full rounded-3xl p-8">
                  <span className="inline-flex rounded-full border border-slate-300 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                    Escopo {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-xl leading-snug text-deep-blue">{service.title}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">{service.text}</p>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-tech-blue">
                    Ideal para
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.idealFor}</p>
                  <div className="mt-6 border-t border-slate-200 pt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-tech-blue">
                      Entregaveis base
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-slate-600">
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
              eyebrow="Diretrizes de execucao"
              title="Padrao de trabalho para manter qualidade e previsibilidade."
              description="A operacao e estruturada para que o projeto avance com seguranca tecnica e alinhamento com o time da empresa."
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
              title="Modelos comerciais para diferentes estagios de operacao."
              description="Escolha um ponto de partida e evolua a estrutura conforme a demanda do negocio."
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
                    <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Implementacao</p>
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
              eyebrow="Como conduzimos"
              title="Etapas objetivas para entregar com consistencia tecnica."
              description="A conducao segue um fluxo simples e transparente para facilitar decisao, aprovacao e implantacao."
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
