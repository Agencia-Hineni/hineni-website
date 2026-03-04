import type { Metadata } from "next";
import { Reveal } from "@/components/animations/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SECTION_CLASSES } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Projetos",
  description:
    "Portfólio institucional da HINENI com estrutura pronta para evolução em estudos de caso completos.",
  path: "/projetos",
});

const projects = [
  {
    name: "Atlas Corporate Group",
    segment: "Consultoria Empresarial",
    scope: "Reposicionamento institucional e jornada de autoridade digital.",
    status: "Case em estruturação",
  },
  {
    name: "Prime Nexus Logistics",
    segment: "Logística e Operações",
    scope: "Plataforma institucional orientada a expansão comercial B2B.",
    status: "Case em estruturação",
  },
  {
    name: "Vértice Health Solutions",
    segment: "Saúde Corporativa",
    scope: "Arquitetura digital para comunicação técnica e credibilidade de marca.",
    status: "Case em estruturação",
  },
  {
    name: "Orion Capital Partners",
    segment: "Financeiro",
    scope: "Página institucional de alto padrão com foco em relacionamento executivo.",
    status: "Case em estruturação",
  },
  {
    name: "NovaSteel Engenharia",
    segment: "Indústria",
    scope: "Presença digital robusta para portfólio industrial e captação corporativa.",
    status: "Case em estruturação",
  },
  {
    name: "Halo Property Group",
    segment: "Mercado Imobiliário",
    scope: "Estrutura digital preparada para expansão de empreendimentos e estudos futuros.",
    status: "Case em estruturação",
  },
];

export default function ProjetosPage() {
  return (
    <>
      <section className={`bg-shell ${SECTION_CLASSES.compact}`}>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Projetos"
              title="Portfólio em evolução contínua para estudos de caso detalhados."
              description="Esta estrutura foi desenhada para receber novos cases com profundidade estratégica, indicadores e resultados mensuráveis."
            />
          </Reveal>
        </Container>
      </section>

      <section className={`bg-deep-blue ${SECTION_CLASSES.standard}`}>
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.name} delay={(index % 3) * 0.08}>
                <article className="premium-card-dark h-full rounded-3xl p-7 text-slate-200">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                      {project.segment}
                    </p>
                    <span className="rounded-full border border-gold-accent/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-gold-accent">
                      {project.status}
                    </span>
                  </div>
                  <h2 className="mt-5 text-xl leading-snug text-shell">{project.name}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-slate-300">{project.scope}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
