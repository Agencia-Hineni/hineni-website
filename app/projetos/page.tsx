import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SECTION_CLASSES } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Projetos",
  description:
    "Projetos desenvolvidos pela HINENI com foco em clareza de operação, posicionamento de marca e experiência de navegação.",
  path: "/projetos",
});

type Project = {
  name: string;
  category: string;
  status: string;
  url: string;
  summary: string;
  context: string;
  solution: string;
  results: string[];
  stack: string[];
  imageSrc: string;
  imageAlt: string;
  accentClass: string;
};

const projects: Project[] = [
  {
    name: "Igreja TDA",
    category: "Institucional",
    status: "Projeto publicado",
    url: "https://igrejatda.com",
    summary:
      "Plataforma institucional criada para organizar comunicação, fortalecer presença digital e facilitar o acesso rápido às informações principais da comunidade.",
    context:
      "O projeto precisava reunir agenda, contatos, informações institucionais e canais de apoio em uma navegação simples, com leitura clara no desktop e no celular.",
    solution:
      "Estruturamos a arquitetura de conteúdo, refinamos a hierarquia visual e desenvolvemos uma navegação objetiva para reduzir atrito e melhorar a experiência de acesso.",
    results: [
      "Navegação institucional mais clara e direta",
      "Experiência responsiva para celular e computador",
      "Contato e acesso às informações principais em menos cliques",
    ],
    stack: ["Next.js", "Tailwind CSS", "Formulários"],
    imageSrc: "/branding/tda-cover.png",
    imageAlt: "Capa do projeto Igreja TDA",
    accentClass:
      "bg-[radial-gradient(circle_at_18%_22%,rgba(184,148,66,0.2),transparent_28%),linear-gradient(180deg,rgba(11,15,25,0.1),rgba(11,15,25,0.88))]",
  },
  {
    name: "DropHouse",
    category: "E-commerce",
    status: "Projeto publicado",
    url: "https://drophouse.shop",
    summary:
      "E-commerce desenvolvido para apresentar catálogo, facilitar a jornada de compra e sustentar uma operação digital com identidade visual forte e navegação fluida.",
    context:
      "A marca precisava de uma estrutura que combinasse apelo visual, organização de produtos e uma experiência de compra simples para mobile e desktop.",
    solution:
      "Construímos uma loja com foco em clareza de vitrine, leitura rápida dos produtos e uma interface preparada para apoiar crescimento comercial e campanhas.",
    results: [
      "Estrutura de e-commerce pensada para conversão",
      "Catálogo organizado para navegação mais fluida",
      "Base visual e técnica pronta para expansão da loja",
    ],
    stack: ["E-commerce", "Catálogo", "UX Mobile"],
    imageSrc: "/branding/drophouse-cover.webp",
    imageAlt: "Capa do projeto DropHouse",
    accentClass:
      "bg-[radial-gradient(circle_at_82%_18%,rgba(30,58,138,0.35),transparent_26%),radial-gradient(circle_at_24%_78%,rgba(184,148,66,0.18),transparent_32%),linear-gradient(180deg,rgba(8,13,24,0.16),rgba(8,13,24,0.92))]",
  },
];

export default function ProjetosPage() {
  return (
    <>
      <section className={`section-shell bg-shell ${SECTION_CLASSES.compact}`}>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Projetos"
              title="Cases construídos para resolver operação, comunicação e experiência."
              description="Cada projeto nasce de um contexto específico. O objetivo não é apenas publicar um site bonito, mas entregar uma estrutura digital que funcione no dia a dia."
            />
          </Reveal>
        </Container>
      </section>

      <section className={`bg-deep-blue ${SECTION_CLASSES.standard}`}>
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal key={project.name} delay={index * 0.08}>
                <article className="premium-card-dark card-case flex h-full flex-col overflow-hidden rounded-3xl text-slate-200">
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={68}
                      className="object-cover object-center opacity-45 transition-transform duration-500 hover:scale-[1.03]"
                    />
                    <div className={`absolute inset-0 ${project.accentClass}`} />
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-3">
                      <p className="text-eyebrow text-slate-300">{project.category}</p>
                      <span className="rounded-full border border-gold-accent/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-gold-accent">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <div>
                      <h2 className="text-2xl leading-snug text-shell">{project.name}</h2>
                      <p className="text-body-soft mt-4 text-sm text-slate-300">{project.summary}</p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-slate-600/70 bg-slate-900/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 grid gap-6 sm:grid-cols-2">
                      <div>
                        <p className="text-eyebrow text-slate-400">Contexto</p>
                        <p className="text-body-soft mt-2 text-sm text-slate-300">{project.context}</p>
                      </div>
                      <div>
                        <p className="text-eyebrow text-slate-400">Solução</p>
                        <p className="text-body-soft mt-2 text-sm text-slate-300">{project.solution}</p>
                      </div>
                    </div>

                    <div className="mt-7 border-t border-slate-700 pt-6">
                      <p className="text-eyebrow text-slate-400">Entregas principais</p>
                      <ul className="mt-3 space-y-2 text-sm text-slate-300">
                        {project.results.map((item) => (
                          <li key={item}>- {item}</li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 inline-flex rounded-full border border-gold-accent/40 bg-gold-accent/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold-accent hover:bg-gold-accent/18 hover:text-shell"
                    >
                      Visitar projeto
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
