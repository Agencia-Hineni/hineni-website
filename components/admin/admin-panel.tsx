"use client";

import { useMemo, useState } from "react";
import type { SiteContent } from "@/lib/site-content";

const emptyContent: SiteContent = {
  contact: { email: "", instagram: "" },
  localSeo: { headline: "", description: "", cities: [] },
  plans: [],
};

export function AdminPanel() {
  const [token, setToken] = useState("");
  const [content, setContent] = useState<SiteContent>(emptyContent);
  const [status, setStatus] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const disabled = useMemo(() => !token.trim(), [token]);

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
    setStatus("Conteúdo carregado.");
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
    <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_16px_35px_rgba(15,23,42,0.08)]">
      <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
        <input
          type="password"
          placeholder="Senha admin (ADMIN_PASSWORD)"
          value={token}
          onChange={(event) => setToken(event.target.value)}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-tech-blue"
        />
        <button
          type="button"
          onClick={loadContent}
          disabled={disabled}
          className="rounded-xl bg-tech-blue px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-shell disabled:opacity-60"
        >
          Carregar
        </button>
      </div>

      {loaded ? (
        <div className="mt-8 space-y-8">
          <section>
            <h2 className="text-xl text-deep-blue">Contato</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <input
                value={content.contact.email}
                onChange={(event) =>
                  setContent((prev) => ({
                    ...prev,
                    contact: { ...prev.contact, email: event.target.value },
                  }))
                }
                placeholder="E-mail"
                className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-tech-blue"
              />
              <input
                value={content.contact.instagram}
                onChange={(event) =>
                  setContent((prev) => ({
                    ...prev,
                    contact: { ...prev.contact, instagram: event.target.value },
                  }))
                }
                placeholder="Instagram"
                className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-tech-blue"
              />
            </div>
          </section>

          <section>
            <h2 className="text-xl text-deep-blue">SEO Local</h2>
            <div className="mt-4 space-y-4">
              <input
                value={content.localSeo.headline}
                onChange={(event) =>
                  setContent((prev) => ({
                    ...prev,
                    localSeo: { ...prev.localSeo, headline: event.target.value },
                  }))
                }
                placeholder="Headline local"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-tech-blue"
              />
              <textarea
                value={content.localSeo.description}
                onChange={(event) =>
                  setContent((prev) => ({
                    ...prev,
                    localSeo: { ...prev.localSeo, description: event.target.value },
                  }))
                }
                rows={3}
                placeholder="Descrição local"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-tech-blue"
              />
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
                rows={2}
                placeholder="Cidades separadas por vírgula"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-tech-blue"
              />
            </div>
          </section>

          <section>
            <h2 className="text-xl text-deep-blue">Planos</h2>
            <div className="mt-4 space-y-4">
              {content.plans.map((plan, idx) => (
                <div key={plan.name} className="rounded-2xl border border-slate-200 p-4">
                  <div className="grid gap-3 sm:grid-cols-2">
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
                      className="rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-tech-blue"
                    />
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
                      className="rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-tech-blue"
                    />
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
                      className="rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-tech-blue"
                    />
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
                      className="rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-tech-blue"
                    />
                  </div>
                  <label className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-slate-600">
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
              ))}
            </div>
          </section>

          <button
            type="button"
            onClick={saveContent}
            className="rounded-xl bg-ink px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-shell"
          >
            Salvar alterações
          </button>

          <section>
            <h2 className="text-xl text-deep-blue">Histórico de versões</h2>
            <p className="mt-2 text-sm text-slate-600">
              A cada atualização, o conteúdo anterior é salvo em snapshot.
            </p>
            <ul className="mt-3 space-y-2">
              {history.length ? (
                history.map((item) => (
                  <li key={item} className="rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-600">
                    {item}
                  </li>
                ))
              ) : (
                <li className="rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-500">
                  Sem histórico ainda.
                </li>
              )}
            </ul>
          </section>
        </div>
      ) : null}

      <p className="mt-4 text-sm text-slate-600">{status}</p>
    </div>
  );
}
