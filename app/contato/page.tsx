import type { Metadata } from "next";
import { Reveal } from "@/components/animations/reveal";
import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SECTION_CLASSES, SITE_CONFIG } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";
import { getSiteContent } from "@/lib/site-content";

export const metadata: Metadata = createPageMetadata({
  title: "Contato",
  description:
    "Entre em contato com a HINENI para avaliar escopo, prazos e melhor formato de execução para seu projeto digital.",
  path: "/contato",
});

const requirements = [
  "Objetivo principal do projeto",
  "Prazo desejado para publicação",
  "Equipe envolvida nas aprovações",
  "Referências de sites ou materiais existentes",
];

type ContatoPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function ContatoPage({ searchParams }: ContatoPageProps) {
  const content = await getSiteContent();
  const params = await searchParams;

  const initialInterest = typeof params.interesse === "string" ? params.interesse : undefined;
  const initialOrigin = typeof params.origem === "string" ? params.origem : undefined;
  const initialPack = typeof params.pacote === "string" ? params.pacote : undefined;

  return (
    <section className={`section-shell bg-shell ${SECTION_CLASSES.standard}`}>
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="Contato"
            title="Vamos avaliar seu cenário e definir o melhor escopo de execução."
            description="Preencha os dados ao lado para receber um retorno objetivo com orientação inicial de estrutura, prazo e investimento."
            className="mb-0"
          />
          <dl className="mt-8 divide-y divide-slate-200 border-t border-slate-200 text-sm">
            <div className="flex items-center justify-between gap-4 py-3">
              <dt className="text-slate-400">Atendimento</dt>
              <dd className="font-medium text-slate-700">{content.contact.email}</dd>
            </div>
            <div className="flex items-center justify-between gap-4 py-3">
              <dt className="text-slate-400">Prazo de retorno</dt>
              <dd className="font-medium text-slate-700">Até 1 dia útil</dd>
            </div>
            <div className="flex items-center justify-between gap-4 py-3">
              <dt className="text-slate-400">Formato</dt>
              <dd className="font-medium text-slate-700">Reunião online</dd>
            </div>
            <div className="flex items-center justify-between gap-4 py-3">
              <dt className="text-slate-400">Instagram</dt>
              <dd className="font-medium text-slate-700">{content.contact.instagram}</dd>
            </div>
            <div className="flex items-center justify-between gap-4 py-3">
              <dt className="text-slate-400">CNPJ</dt>
              <dd className="font-medium text-slate-700">{SITE_CONFIG.cnpj}</dd>
            </div>
          </dl>

          <div className="premium-card-light mt-8 rounded-2xl p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-tech-blue">
              Para agilizar o diagnóstico
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
              {requirements.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <ContactForm initialInterest={initialInterest} initialOrigin={initialOrigin} initialPack={initialPack} />
        </Reveal>
      </Container>
    </section>
  );
}
