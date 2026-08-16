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

const serviceDeliverables: Record<string, string[]> = {
  "Landing Pages": [
    "Design personalizado",
    "Página responsiva",
    "SEO técnico básico",
    "Publicação e SSL",
    "Até 2 rodadas de ajustes",
  ],
  "Sites Institucionais": [
    "Site responsivo",
    "Até 5 páginas principais",
    "Formulário e WhatsApp",
    "SEO técnico básico",
    "Até 2 rodadas de ajustes",
  ],
  "Sites Premium": [
    "Design mais personalizado",
    "Até 10 páginas/seções",
    "Animações e interações",
    "Otimização de performance",
    "Até 3 rodadas de ajustes",
  ],
  "Sistemas Web": [
    "Levantamento e definição de escopo",
    "Frontend e backend sob medida",
    "Banco de dados quando necessário",
    "Autenticação quando necessária",
    "Testes e documentação básica",
  ],
  SaaS: [
    "Descoberta da ideia",
    "Análise inicial de viabilidade",
    "Definição do MVP",
    "Infraestrutura e publicação",
    "Suporte conforme contratação",
  ],
};

const faqs = [
  {
    question: "Quanto custa um projeto?",
    answer:
      "Cada serviço tem um valor inicial de referência, apresentado nesta página. Projetos com escopo maior ou mais complexo podem ter o investimento ajustado conforme a necessidade.",
  },
  {
    question: "Quanto tempo leva para desenvolver?",
    answer:
      "O prazo varia conforme o tipo e a complexidade do projeto, e é definido durante a etapa de diagnóstico e definição de escopo.",
  },
  {
    question: "Vocês trabalham com empresas de qualquer lugar?",
    answer: "Sim. A Hineni atende empresas de qualquer lugar do Brasil, de forma remota.",
  },
  {
    question: "O que acontece depois da entrega?",
    answer:
      "Após a entrega, oferecemos planos de continuidade com infraestrutura, manutenção e suporte, conforme o serviço contratado.",
  },
  {
    question: "Posso solicitar alterações?",
    answer:
      "Sim. Os serviços incluem rodadas de ajuste dentro do escopo contratado (até 2 ou 3 rodadas, conforme o serviço). Alterações fora do escopo original podem ser orçadas separadamente.",
  },
  {
    question: "Vocês desenvolvem sistemas personalizados?",
    answer:
      "Sim. Além de sites e landing pages, desenvolvemos Sistemas Web e produtos SaaS sob medida para necessidades específicas do negócio.",
  },
];

const continuityPlans = [
  {
    name: "Hineni Essencial",
    price: "R$ 149",
    description: "Para manter sua presença digital funcionando com suporte e manutenção básica.",
    features: ["Infraestrutura", "SSL", "Backups", "Monitoramento básico", "Manutenção essencial", "Suporte básico"],
    featured: false,
  },
  {
    name: "Hineni Pro",
    price: "R$ 299",
    description: "Para quem quer, além da manutenção, pequenas evoluções e atendimento prioritário.",
    features: ["Tudo do Hineni Essencial", "Pequenas alterações", "Manutenção preventiva", "Suporte prioritário"],
    featured: true,
  },
  {
    name: "Hineni Growth",
    price: "R$ 599",
    description: "Para quem busca evolução contínua da solução, com desenvolvimento e melhorias.",
    features: ["Tudo do Hineni Pro", "Horas mensais de desenvolvimento", "Melhorias contínuas"],
    featured: false,
  },
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

                  {serviceDeliverables[service.name] ? (
                    <ul className="mt-5 space-y-2">
                      {serviceDeliverables[service.name].map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-xs text-slate-600">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-tech-blue"
                          >
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  <div className="mt-6 flex-1 border-t border-slate-200 pt-5">
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

      <section className={`section-shell bg-shell ${SECTION_CLASSES.compact}`}>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Continuidade"
              title="Seu projeto não precisa parar depois do lançamento."
              description="A Hineni oferece planos de continuidade para manter sua solução digital funcionando, receber suporte e evoluir conforme as necessidades do negócio."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {continuityPlans.map((plan, index) => (
              <Reveal key={plan.name} delay={index * 0.08}>
                <article
                  className={`premium-card-light card-service relative flex h-full flex-col rounded-3xl p-8 ${
                    plan.featured ? "border-gold-accent/60" : ""
                  }`}
                >
                  {plan.featured ? (
                    <span className="text-eyebrow absolute -top-3 left-8 inline-flex w-fit rounded-full border border-gold-accent/60 bg-shell px-3 py-1 text-gold-accent">
                      Recomendado
                    </span>
                  ) : null}

                  <h3 className="text-xl leading-snug text-deep-blue">{plan.name}</h3>
                  <p className="text-body-soft mt-3 text-sm text-slate-600">{plan.description}</p>

                  <p className="mt-6 text-lg font-semibold text-deep-blue">
                    {plan.price}
                    <span className="text-sm font-normal text-slate-500">/mês</span>
                  </p>

                  <ul className="mt-6 flex-1 space-y-2.5 border-t border-slate-200 pt-5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          className="mt-0.5 h-4 w-4 shrink-0 text-tech-blue"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <LinkButton href="/contato" size="sm" className="mt-6 w-full justify-center">
                    Falar com a Hineni
                  </LinkButton>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16}>
            <p className="mt-8 max-w-2xl text-xs leading-relaxed text-slate-500">
              Mensalidade não significa desenvolvimento ilimitado. Os planos de continuidade são uma estrutura
              inicial da Hineni e podem ser ajustados conforme o projeto e as necessidades do cliente.
            </p>
          </Reveal>
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

      <section className={`section-shell bg-shell ${SECTION_CLASSES.standard}`}>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Perguntas frequentes"
              title="Ainda tem dúvidas sobre como funciona?"
              description="Se sua dúvida não estiver aqui, é só falar direto com a Hineni."
            />
          </Reveal>
          <div className="mt-10 space-y-3 lg:max-w-3xl">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 0.04}>
                <details className="group premium-card-light rounded-2xl px-6 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-deep-blue [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-4 w-4 shrink-0 text-tech-blue transition-transform duration-300 group-open:rotate-45"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </summary>
                  <p className="text-body-soft mt-4 text-sm text-slate-600">{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
