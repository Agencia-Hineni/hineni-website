"use client";

import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { SiteContent } from "@/lib/site-content";

const emptyContent: SiteContent = {
  contact: { email: "", instagram: "" },
  localSeo: { headline: "", description: "", cities: [] },
  plans: [],
};

function PanelSection({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-[2rem] border border-slate-200/80 bg-white/88 p-6 shadow-[0_14px_34px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:p-8">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-tech-blue">{eyebrow}</p>
      <h2 className="mt-3 text-2xl text-deep-blue">{title}</h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">{description}</p>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{label}</span>
      {hint ? <span className="mt-1 block text-xs leading-relaxed text-slate-500">{hint}</span> : null}
      <div className="mt-3">{children}</div>
    </label>
  );
}

const inputClassName =
  "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] focus:border-tech-blue focus:ring-4 focus:ring-tech-blue/10";

export function AdminPanel() {
  const [token, setToken] = useState("");
  const [content, setContent] = useState<SiteContent>(emptyContent);
  const [status, setStatus] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const disabled = useMemo(() => !token.trim(), [token]);
  const normalizedStatus = status.toLowerCase();
  const statusTone =
    normalizedStatus.includes("falha") || normalizedStatus.includes("nao autorizado")
      ? "border-rose-200 bg-rose-50 text-rose-700"
      : normalizedStatus.includes("salv") || normalizedStatus.includes("carregado")
        ? "border-emerald-200 bg-emerald-50 text-emerald-700"
        : "border-slate-200 bg-white/80 text-slate-600";

  async function loadContent() {
    setStatus("Carregando...");
    const [contentResponse, historyResponse] = await Promise.all([
      fetch("/api/admin/content", {
        headers: { "x-admin-token": token.trim() },
      }),
      fetch("/api/admin/content/history", {
        headers: { "x-admin-token": token.trim() },
      }),
    ]);
    const data = await contentResponse.json();

    if (!contentResponse.ok || !data.ok) {
      setStatus(data.message ?? "Falha ao carregar.");
      return;
    }

    setContent(data.content as SiteContent);
    if (historyResponse.ok) {
      const historyData = (await historyResponse.json()) as { ok: boolean; history?: string[] };
      setHistory(historyData.history ?? []);
    }

    setLoaded(true);
    setStatus("Conteudo carregado.");
  }

  async function saveContent() {
    setStatus("Salvando...");
    const response = await fetch("/api/admin/content", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-admin-token": token.trim(),
      },
      body: JSON.stringify(content),
    });
    const data = await response.json();
    setStatus(data.message ?? (response.ok ? "Salvo." : "Falha ao salvar."));
    if (response.ok) {
      await loadContent();
    }
  }

  return (
    <div className="mt-10 space-y-6">
      <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-[radial-gradient(circle_at_top_left,rgba(30,58,138,0.14),transparent_34%),linear-gradient(160deg,rgba(255,255,255,0.96),rgba(241,245,249,0.9))] shadow-[0_22px_54px_rgba(15,23,42,0.12)]">
        <div className="border-b border-slate-200/70 px-6 py-6 sm:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-tech-blue">
                Ambiente administrativo
              </p>
              <h2 className="mt-3 text-3xl text-deep-blue">Gerencie o conteudo do site com mais clareza.</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Edite contato, SEO local e planos comerciais em uma interface mais organizada, sem precisar tocar nos arquivos manualmente.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-[1fr_auto] lg:min-w-[420px]">
              <input
                type="password"
                placeholder="Senha admin"
                value={token}
                onChange={(event) => setToken(event.target.value)}
                className={inputClassName}
              />
              <button
                type="button"
                onClick={loadContent}
                disabled={disabled}
                className="rounded-2xl bg-tech-blue px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-shell shadow-[0_16px_30px_rgba(30,58,138,0.24)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                Carregar painel
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-4 px-6 py-5 sm:grid-cols-3 sm:px-8">
          <div className="rounded-2xl border border-slate-200/70 bg-white/78 px-4 py-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Status</p>
            <p className="mt-2 text-lg text-deep-blue">{loaded ? "Painel carregado" : "Aguardando acesso"}</p>
          </div>
          <div className="rounded-2xl border border-slate-200/70 bg-white/78 px-4 py-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Planos</p>
            <p className="mt-2 text-lg text-deep-blue">{content.plans.length || 0} configurados</p>
          </div>
          <div className="rounded-2xl border border-slate-200/70 bg-white/78 px-4 py-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Snapshots</p>
            <p className="mt-2 text-lg text-deep-blue">{history.length || 0} versoes salvas</p>
          </div>
        </div>
      </div>

      <div className={`rounded-2xl border px-4 py-3 text-sm ${statusTone}`}>{status || "Pronto para editar."}</div>

      {loaded ? (
        <div className="space-y-6">
          <PanelSection
            eyebrow="Contato"
            title="Informacoes institucionais"
            description="Atualize os dados de contato que alimentam o site e o painel comercial."
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="E-mail principal">
                <input
                  value={content.contact.email}
                  onChange={(event) =>
                    setContent((prev) => ({
                      ...prev,
                      contact: { ...prev.contact, email: event.target.value },
                    }))
                  }
                  placeholder="atendimento@hineni.agency"
                  className={inputClassName}
                />
              </Field>
              <Field label="Instagram">
                <input
                  value={content.contact.instagram}
                  onChange={(event) =>
                    setContent((prev) => ({
                      ...prev,
                      contact: { ...prev.contact, instagram: event.target.value },
                    }))
                  }
                  placeholder="@hineni.digital"
                  className={inputClassName}
                />
              </Field>
            </div>
          </PanelSection>

          <PanelSection
            eyebrow="SEO Local"
            title="Presenca geolocalizada"
            description="Edite o texto de atendimento regional e as cidades exibidas no site."
          >
            <div className="space-y-5">
              <Field label="Headline">
                <input
                  value={content.localSeo.headline}
                  onChange={(event) =>
                    setContent((prev) => ({
                      ...prev,
                      localSeo: { ...prev.localSeo, headline: event.target.value },
                    }))
                  }
                  placeholder="Atendimento estrategico em todo o Brasil"
                  className={inputClassName}
                />
              </Field>
              <Field label="Descricao">
                <textarea
                  value={content.localSeo.description}
                  onChange={(event) =>
                    setContent((prev) => ({
                      ...prev,
                      localSeo: { ...prev.localSeo, description: event.target.value },
                    }))
                  }
                  rows={4}
                  placeholder="Descreva como a HINENI atende empresas em diferentes regioes."
                  className={`${inputClassName} min-h-[132px] resize-y`}
                />
              </Field>
              <Field
                label="Cidades ou marcadores"
                hint="Separe os itens por virgula. Exemplo: Atendimento nacional, Operacao 100% digital."
              >
                <textarea
                  value={content.localSeo.cities.join(", ")}
                  onChange={(event) =>
                    setContent((prev) => ({
                      ...prev,
                      localSeo: {
                        ...prev.localSeo,
                        cities: event.target.value
                          .split(",")
                          .map((city) => city.trim())
                          .filter(Boolean),
                      },
                    }))
                  }
                  rows={3}
                  placeholder="Atendimento nacional, Operacao 100% digital"
                  className={`${inputClassName} min-h-[112px] resize-y`}
                />
              </Field>
            </div>
          </PanelSection>

          <PanelSection
            eyebrow="Planos"
            title="Oferta comercial"
            description="Revise nomes, valores e destaque comercial de cada plano diretamente no painel."
          >
            <div className="space-y-4">
              {content.plans.map((plan, idx) => (
                <article
                  key={`${plan.name}-${idx}`}
                  className="rounded-[1.75rem] border border-slate-200/80 bg-[linear-gradient(165deg,rgba(255,255,255,0.95),rgba(248,250,252,0.9))] p-5 shadow-[0_12px_28px_rgba(15,23,42,0.06)]"
                >
                  <div className="flex flex-col gap-3 border-b border-slate-200/80 pb-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-tech-blue">
                        Plano {String(idx + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 text-xl text-deep-blue">{plan.name || "Novo plano"}</h3>
                    </div>
                    <label className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
                      <input
                        type="checkbox"
                        checked={plan.featured}
                        onChange={(event) =>
                          setContent((prev) => ({
                            ...prev,
                            plans: prev.plans.map((item, i) =>
                              i === idx ? { ...item, featured: event.target.checked } : item,
                            ),
                          }))
                        }
                      />
                      Plano destacado
                    </label>
                  </div>

                  <div className="mt-5 grid gap-5 md:grid-cols-2">
                    <Field label="Nome do plano">
                      <input
                        value={plan.name}
                        onChange={(event) =>
                          setContent((prev) => ({
                            ...prev,
                            plans: prev.plans.map((item, i) =>
                              i === idx ? { ...item, name: event.target.value } : item,
                            ),
                          }))
                        }
                        className={inputClassName}
                      />
                    </Field>
                    <Field label="Implementacao" hint="Use o formato que aparece no card do site.">
                      <input
                        value={plan.implementation}
                        onChange={(event) =>
                          setContent((prev) => ({
                            ...prev,
                            plans: prev.plans.map((item, i) =>
                              i === idx ? { ...item, implementation: event.target.value } : item,
                            ),
                          }))
                        }
                        className={inputClassName}
                      />
                    </Field>
                    <Field label="Mensalidade">
                      <input
                        value={plan.monthly}
                        onChange={(event) =>
                          setContent((prev) => ({
                            ...prev,
                            plans: prev.plans.map((item, i) =>
                              i === idx ? { ...item, monthly: event.target.value } : item,
                            ),
                          }))
                        }
                        className={inputClassName}
                      />
                    </Field>
                    <Field label="Contrato">
                      <input
                        value={plan.contract}
                        onChange={(event) =>
                          setContent((prev) => ({
                            ...prev,
                            plans: prev.plans.map((item, i) =>
                              i === idx ? { ...item, contract: event.target.value } : item,
                            ),
                          }))
                        }
                        className={inputClassName}
                      />
                    </Field>
                  </div>
                </article>
              ))}
            </div>
          </PanelSection>

          <div className="sticky bottom-4 z-20">
            <div className="flex flex-col gap-4 rounded-[1.75rem] border border-slate-200/80 bg-white/92 p-5 shadow-[0_18px_42px_rgba(15,23,42,0.14)] backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-tech-blue">
                  Publicacao
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Salve as alteracoes para gerar um novo snapshot e atualizar o conteudo exibido no site.
                </p>
              </div>
              <button
                type="button"
                onClick={saveContent}
                className="rounded-2xl bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-shell shadow-[0_18px_32px_rgba(15,23,42,0.18)]"
              >
                Salvar alteracoes
              </button>
            </div>
          </div>

          <PanelSection
            eyebrow="Historico"
            title="Snapshots recentes"
            description="Cada salvamento cria uma nova versao de seguranca do conteudo anterior."
          >
            <div className="grid gap-3">
              {history.length ? (
                history.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 py-3 text-sm text-slate-600"
                  >
                    {item}
                  </div>
                ))
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50/70 px-4 py-6 text-sm text-slate-500">
                  Nenhum snapshot salvo ainda.
                </div>
              )}
            </div>
          </PanelSection>
        </div>
      ) : null}
    </div>
  );
}
