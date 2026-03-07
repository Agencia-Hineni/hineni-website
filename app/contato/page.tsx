import type { Metadata } from "next";
import { Reveal } from "@/components/animations/reveal";
import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SECTION_CLASSES } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";
import { getSiteContent } from "@/lib/site-content";

export const metadata: Metadata = createPageMetadata({
  title: "Contato",
  description:
    "Entre em contato com a HINENI para avaliar escopo, prazos e melhor formato de execucao para seu projeto digital.",
  path: "/contato",
});

const requirements = [
  "Objetivo principal do projeto",
  "Prazo desejado para publicacao",
  "Equipe envolvida nas aprovacoes",
  "Referencias de sites ou materiais existentes",
];

export default async function ContatoPage() {
  const content = await getSiteContent();

  return (
    <section className={`section-shell bg-shell ${SECTION_CLASSES.standard}`}>
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="Contato"
            title="Vamos avaliar seu cenario e definir o melhor escopo de execucao."
            description="Preencha os dados ao lado para receber um retorno objetivo com orientacao inicial de estrutura, prazo e investimento."
            className="mb-0"
          />
          <div className="mt-8 grid gap-3 text-sm text-slate-600">
            <p className="rounded-xl border border-slate-200 bg-white/80 px-4 py-3">
              Atendimento: {content.contact.email}
            </p>
            <p className="rounded-xl border border-slate-200 bg-white/80 px-4 py-3">
              Prazo de retorno: ate 1 dia util
            </p>
            <p className="rounded-xl border border-slate-200 bg-white/80 px-4 py-3">
              Formato: reuniao online de alinhamento
            </p>
            <p className="rounded-xl border border-slate-200 bg-white/80 px-4 py-3">
              Instagram: {content.contact.instagram}
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-tech-blue">
              Para agilizar o diagnostico
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {requirements.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <ContactForm />
        </Reveal>
      </Container>
    </section>
  );
}
