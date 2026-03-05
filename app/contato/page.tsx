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
    "Entre em contato com a HINENI para solicitar proposta e estruturar um projeto digital empresarial com alto padrão.",
  path: "/contato",
});

export default async function ContatoPage() {
  const content = await getSiteContent();

  return (
    <section className={`bg-shell ${SECTION_CLASSES.standard}`}>
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="Contato"
            title="Vamos estruturar seu projeto digital com padrão empresarial."
            description="Preencha os dados ao lado para iniciarmos um diagnóstico estratégico do seu cenário e objetivos."
            className="mb-0"
          />
          <div className="mt-8 space-y-3 text-sm text-slate-600">
            <p>Atendimento institucional: {content.contact.email}</p>
            <p>Prazo de retorno: até 1 dia útil</p>
            <p>Formato: reunião de alinhamento estratégico</p>
            <p>Instagram: {content.contact.instagram}</p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <ContactForm />
        </Reveal>
      </Container>
    </section>
  );
}
