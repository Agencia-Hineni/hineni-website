import type { Metadata } from "next";
import { Reveal } from "@/components/animations/reveal";
import { ProspectMockup } from "@/components/prospect/prospect-mockup";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { SECTION_CLASSES } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Hineni Prospect | Plataforma de Prospecção Comercial com IA",
  description:
    "O Hineni Prospect é a plataforma da HINENI para prospecção comercial com inteligência artificial, feita para equipes que precisam encontrar empresas, organizar oportunidades e acelerar vendas.",
  path: "/prospect",
  keywords: [
    "prospecção comercial",
    "plataforma de prospecção",
    "inteligência artificial",
    "leads",
    "equipes comerciais",
  ],
});

const problems = [
  "Perda de tempo procurando empresas para prospectar",
  "Prospecção manual, repetitiva e pouco escalável",
  "Informações de leads espalhadas em planilhas e conversas",
  "Dificuldade para organizar e priorizar oportunidades",
  "Baixa produtividade comercial no dia a dia da equipe",
];

const solutionPoints = [
  "Centralize a prospecção da sua equipe em um só lugar",
  "Use inteligência artificial para acelerar sua prospecção",
  "Organize seu processo comercial do primeiro contato à oportunidade",
  "Aumente a produtividade do time com um fluxo de trabalho único",
];

const benefits = [
  {
    title: "Menos tempo procurando empresas",
    text: "Concentre sua equipe no contato comercial, não na busca manual de oportunidades.",
  },
  {
    title: "Mais oportunidades para abordar",
    text: "Amplie o volume de empresas que sua equipe pode encontrar e prospectar.",
  },
  {
    title: "Equipe organizada",
    text: "Cada vendedor pode ter seu próprio acesso e atividade dentro da organização.",
  },
  {
    title: "Usuários ilimitados",
    text: "Adicione sua equipe sem pagar por usuário.",
  },
];

const features = [
  {
    title: "Prospecção de empresas",
    text: "Encontre empresas alinhadas ao perfil de cliente da sua operação comercial.",
  },
  {
    title: "IA aplicada à prospecção",
    text: "Inteligência artificial auxilia na identificação e organização de oportunidades.",
  },
  {
    title: "Organização de leads",
    text: "Centralize e organize os leads encontrados em um único fluxo de trabalho.",
  },
  {
    title: "Sistema de créditos",
    text: "Uso da plataforma controlado por um sistema de créditos por organização.",
  },
  {
    title: "Controle de utilização",
    text: "Acompanhe o consumo e a utilização da plataforma pela sua equipe.",
  },
  {
    title: "Dashboard",
    text: "Visualize a operação de prospecção da sua equipe em um painel único.",
  },
  {
    title: "Gestão de equipe",
    text: "Gerencie os usuários da sua organização dentro da plataforma.",
  },
  {
    title: "Controle de permissões",
    text: "Defina o que cada usuário da equipe pode acessar e fazer na plataforma.",
  },
];

const technicalHighlights = [
  "Arquitetura multi-tenant",
  "Autenticação segura",
  "Controle de acesso por função",
  "Validação no backend",
  "Isolamento de dados entre organizações",
  "Controle de créditos e utilização",
  "Backup automático",
  "Ambiente de produção",
  "Logs e gerenciamento do servidor",
];

const plans = [
  {
    name: "Starter",
    price: "R$ 149",
    credits: "300 créditos/mês",
    description:
      "Para times que estão começando a prospectar com apoio de IA e querem validar o processo com uma operação enxuta.",
    featured: false,
  },
  {
    name: "Pro",
    price: "R$ 229",
    credits: "600 créditos/mês",
    description:
      "Para equipes comerciais em crescimento que precisam de mais volume de prospecção e mais controle sobre o time.",
    featured: true,
  },
  {
    name: "Business",
    price: "R$ 349",
    credits: "1.100 créditos/mês",
    description:
      "Para operações comerciais maiores, com maior volume de prospecção e necessidade de gestão avançada da equipe.",
    featured: false,
  },
];

const creditPacks = [
  { credits: "+1.000", price: "R$ 249" },
  { credits: "+2.500", price: "R$ 599" },
  { credits: "+5.000", price: "R$ 1.149" },
  { credits: "+10.000", price: "R$ 2.199" },
  { credits: "+25.000", price: "R$ 5.499" },
  { credits: "+50.000", price: "R$ 9.999" },
];

export default function ProspectPage() {
  return (
    <>
      <section className="hero-depth relative overflow-hidden text-slate-100">
        <Container className={`relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center ${SECTION_CLASSES.hero}`}>
          <div>
            <Reveal transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.04 }}>
              <p className="mb-8 inline-flex rounded-full border border-gold-accent/45 bg-slate-900/72 px-5 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-gold-accent">
                Produto Hineni
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <h1 className="max-w-xl text-4xl leading-[1.04] text-shell sm:text-5xl lg:text-6xl">
                Encontre novas oportunidades e transforme prospecção em vendas.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-7 max-w-lg text-lg leading-relaxed text-slate-300">
                O Hineni Prospect utiliza inteligência artificial para ajudar equipes comerciais a encontrar
                empresas, organizar oportunidades e acelerar o processo de prospecção.
              </p>
            </Reveal>
            <Reveal delay={0.28} className="mt-10 flex flex-wrap gap-4">
              <LinkButton href="/contato">Quero conhecer o Prospect</LinkButton>
              <LinkButton href="#funcionalidades" variant="ghost">
                Ver como funciona
              </LinkButton>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <ProspectMockup />
          </Reveal>
        </Container>
      </section>

      <section className={`section-shell bg-shell ${SECTION_CLASSES.standard}`}>
        <Container>
          <SectionHeading
            eyebrow="O problema"
            title="Prospecção comercial ainda consome tempo demais."
            description="Boa parte do tempo de uma equipe comercial se perde antes mesmo da primeira conversa com um cliente em potencial."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {problems.map((item) => (
              <Reveal key={item}>
                <div className="flat-row flex items-start gap-3 py-1">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-accent" />
                  <p className="text-sm leading-relaxed text-slate-700">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className={`bg-deep-blue ${SECTION_CLASSES.compact}`}>
        <Container className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow="A solução"
              title="O Hineni Prospect centraliza sua prospecção em um só lugar."
              description="A plataforma organiza o processo de prospecção da sua equipe, do primeiro contato com uma empresa até a oportunidade organizada, com apoio de inteligência artificial."
              className="mb-0"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-3">
              {solutionPoints.map((item) => (
                <div
                  key={item}
                  className="premium-card-dark flex items-start gap-3 rounded-2xl px-5 py-4 text-sm leading-relaxed text-slate-200"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className={`section-shell bg-shell ${SECTION_CLASSES.standard}`}>
        <Container>
          <SectionHeading
            eyebrow="Benefícios"
            title="O que muda no dia a dia da sua equipe comercial."
            description="Mais do que funcionalidades, o Hineni Prospect muda a forma como sua equipe prospecta no dia a dia."
          />
          <div className="mt-12 grid gap-x-6 gap-y-5 sm:grid-cols-2">
            {benefits.map((item) => (
              <Reveal key={item.title}>
                <div className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-accent" />
                  <span>
                    <strong
                      className={`font-semibold ${item.title === "Usuários ilimitados" ? "text-gold-accent" : "text-deep-blue"}`}
                    >
                      {item.title}.
                    </strong>{" "}
                    {item.text}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="funcionalidades" className={`section-shell soft-divider bg-shell ${SECTION_CLASSES.standard}`}>
        <Container>
          <SectionHeading
            eyebrow="Funcionalidades"
            title="Tudo que sua equipe comercial precisa para prospectar melhor."
            description="Funcionalidades desenvolvidas para o dia a dia de uma operação comercial real."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {features.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 0.05}>
                <article className="premium-card-light card-service h-full rounded-2xl p-6">
                  <h2 className="text-base font-semibold text-deep-blue">{feature.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{feature.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className={`bg-ink ${SECTION_CLASSES.compact}`}>
        <Container>
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow="Diferenciais técnicos"
              title="Uma estrutura profissional por trás da plataforma."
              description="O Hineni Prospect também é uma demonstração da capacidade técnica da Hineni para construir e operar aplicações SaaS."
              className="mb-0"
            />
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {technicalHighlights.map((item, index) => (
              <Reveal key={item} delay={index * 0.04}>
                <div className="flex items-center gap-3 rounded-xl border border-slate-700/60 bg-slate-900/40 px-4 py-3 text-sm text-slate-300">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-4 w-4 shrink-0 text-gold-accent"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="demonstracao" className={`section-shell bg-shell ${SECTION_CLASSES.standard}`}>
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Demonstração"
              title="Veja como a operação de prospecção fica organizada."
              description="Um painel único para acompanhar créditos, leads e a atividade da equipe. A representação abaixo é ilustrativa, sem dados reais de clientes."
              className="mb-0"
            />
          </Reveal>
          <Reveal delay={0.12}>
            <ProspectMockup />
          </Reveal>
        </Container>
      </section>

      <section className={`section-shell soft-divider bg-shell ${SECTION_CLASSES.standard}`}>
        <Container>
          <SectionHeading
            eyebrow="Planos"
            title="Planos pensados para o tamanho da sua operação comercial."
            description="O acesso ao Hineni Prospect é ativado diretamente pela equipe da Hineni — o onboarding hoje é feito de forma manual, sem checkout ou cobrança automática dentro da plataforma."
          />

          <Reveal delay={0.06}>
            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl border border-gold-accent/35 bg-gold-accent/8 px-6 py-4">
              <span className="text-eyebrow text-gold-accent">Usuários ilimitados</span>
              <span className="text-sm text-slate-700">
                Adicione toda a sua equipe sem pagar por usuário — pague pelo uso, não pelo tamanho do time.
              </span>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {plans.map((plan, index) => (
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
                  <p className="mt-4 text-lg font-semibold text-deep-blue">
                    {plan.price}
                    <span className="text-sm font-normal text-slate-500">/mês</span>
                  </p>
                  <p className="text-body-soft mt-3 text-sm text-slate-600">{plan.description}</p>

                  <ul className="mt-6 space-y-2.5 border-t border-slate-200 pt-5">
                    <li className="flex items-start gap-2.5 text-sm text-slate-600">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="mt-0.5 h-4 w-4 shrink-0 text-tech-blue"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{plan.credits}</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm font-semibold text-gold-accent">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="mt-0.5 h-4 w-4 shrink-0"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Usuários ilimitados</span>
                    </li>
                  </ul>

                  <p className="mt-5 flex-1 text-xs leading-relaxed text-slate-500">
                    Créditos e recursos definidos pelo plano, com usuários ilimitados.
                  </p>

                  <LinkButton href="/contato" size="sm" className="mt-6 w-full justify-center">
                    Solicitar acesso
                  </LinkButton>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className={`section-shell soft-divider bg-shell ${SECTION_CLASSES.compact}`}>
        <Container>
          <SectionHeading
            eyebrow="Créditos adicionais"
            title="Precisa de mais créditos?"
            description="Continue prospectando sem precisar mudar de plano. Adicione créditos à sua organização conforme sua necessidade."
          />

          <Reveal delay={0.04}>
            <p className="mt-4 max-w-2xl text-sm font-semibold text-gold-accent">
              Usuários ilimitados. Créditos compartilhados por toda a empresa — qualquer usuário pode utilizá-los.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {creditPacks.map((pack, index) => (
              <Reveal key={pack.credits} delay={index * 0.04}>
                <div className="premium-card-light rounded-2xl px-4 py-5 text-center">
                  <p className="text-lg font-semibold text-deep-blue">{pack.credits}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.1em] text-slate-500">créditos</p>
                  <p className="mt-3 text-sm font-semibold text-tech-blue">{pack.price}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div className="mt-9 text-center">
              <LinkButton href="/contato" size="md">
                Solicitar créditos
              </LinkButton>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-slate-200 bg-white/70 px-6 py-5 text-center">
              <p className="text-sm font-semibold text-deep-blue">Seus créditos acabaram?</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Adicione um pacote de créditos para continuar prospectando ou fale com a Hineni para encontrar a
                melhor opção para sua operação.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className={`bg-deep-blue text-slate-100 ${SECTION_CLASSES.standard}`}>
        <Container className="text-center">
          <Reveal>
            <p className="mx-auto inline-flex rounded-full border border-slate-600/70 bg-slate-900/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-300">
              Hineni Prospect
            </p>
            <h2 className="mx-auto mt-5 max-w-2xl text-3xl leading-[1.05] text-shell sm:text-4xl lg:text-5xl">
              Pronto para tornar sua prospecção mais eficiente?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Conheça o Hineni Prospect e leve inteligência artificial para a prospecção da sua equipe.
            </p>
          </Reveal>
          <Reveal delay={0.12} className="mt-9">
            <LinkButton href="/contato" size="lg">
              Solicitar acesso
            </LinkButton>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
