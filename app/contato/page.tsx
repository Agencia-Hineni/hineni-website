import type { Metadata } from "next";
import { Reveal } from "@/components/animations/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SECTION_CLASSES } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contato",
  description:
    "Entre em contato com a HINENI para solicitar proposta e estruturar um projeto digital empresarial com alto padrão.",
  path: "/contato",
});

export default function ContatoPage() {
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
            <p>Atendimento institucional: atendimento@hineni.com.br</p>
            <p>Prazo de retorno: até 1 dia útil</p>
            <p>Formato: reunião de alinhamento estratégico</p>
            <p>Instagram: @hineni.digital</p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form className="premium-card-light rounded-3xl p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm text-slate-700">
                Nome
                <input
                  required
                  type="text"
                  name="nome"
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white/80 px-4 py-3 outline-none focus:border-tech-blue"
                  placeholder="Seu nome"
                />
              </label>
              <label className="text-sm text-slate-700">
                Empresa
                <input
                  required
                  type="text"
                  name="empresa"
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white/80 px-4 py-3 outline-none focus:border-tech-blue"
                  placeholder="Nome da empresa"
                />
              </label>
              <label className="text-sm text-slate-700">
                E-mail corporativo
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white/80 px-4 py-3 outline-none focus:border-tech-blue"
                  placeholder="voce@empresa.com"
                />
              </label>
              <label className="text-sm text-slate-700">
                Telefone
                <input
                  type="tel"
                  name="telefone"
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white/80 px-4 py-3 outline-none focus:border-tech-blue"
                  placeholder="+55 (00) 00000-0000"
                />
              </label>
            </div>

            <label className="mt-5 block text-sm text-slate-700">
              Serviço de interesse
              <select
                required
                name="servico"
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white/80 px-4 py-3 outline-none focus:border-tech-blue"
                defaultValue=""
              >
                <option value="" disabled>
                  Selecione uma opção
                </option>
                <option>Sites Institucionais Empresariais</option>
                <option>Landing Pages Estratégicas</option>
                <option>Estrutura Digital para Negócios</option>
              </select>
            </label>

            <label className="mt-5 block text-sm text-slate-700">
              Contexto do projeto
              <textarea
                required
                name="contexto"
                rows={5}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white/80 px-4 py-3 outline-none focus:border-tech-blue"
                placeholder="Descreva objetivos, prazo e escopo esperado."
              />
            </label>

            <button
              type="submit"
              className="mt-7 inline-flex rounded-full bg-tech-blue px-7 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-shell shadow-[0_12px_28px_rgba(30,58,138,0.24)] hover:bg-[#2749ad]"
            >
              Enviar Solicitação
            </button>
          </form>
        </Reveal>
      </Container>
    </section>
  );
}
