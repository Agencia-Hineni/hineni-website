"use client";

import { FormEvent, useState } from "react";

type FormState = {
  nome: string;
  empresa: string;
  email: string;
  telefone: string;
  servico: string;
  contexto: string;
  website: string;
};

const initialState: FormState = {
  nome: "",
  empresa: "",
  email: "",
  telefone: "",
  servico: "",
  contexto: "",
  website: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await response.json()) as { ok: boolean; message?: string };

      if (!response.ok || !data.ok) {
        setStatus("error");
        setMessage(data.message ?? "Falha ao enviar. Tente novamente.");
        return;
      }

      setStatus("success");
      setMessage(data.message ?? "Solicitação enviada com sucesso.");
      setForm(initialState);
    } catch {
      setStatus("error");
      setMessage("Falha ao enviar. Tente novamente.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="premium-card-light rounded-3xl p-8">
      <input
        tabIndex={-1}
        autoComplete="off"
        type="text"
        name="website"
        value={form.website}
        onChange={(event) => setForm((prev) => ({ ...prev, website: event.target.value }))}
        className="hidden"
        aria-hidden="true"
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm text-slate-700">
          Nome
          <input
            required
            type="text"
            name="nome"
            value={form.nome}
            onChange={(event) => setForm((prev) => ({ ...prev, nome: event.target.value }))}
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
            value={form.empresa}
            onChange={(event) => setForm((prev) => ({ ...prev, empresa: event.target.value }))}
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
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white/80 px-4 py-3 outline-none focus:border-tech-blue"
            placeholder="voce@empresa.com"
          />
        </label>
        <label className="text-sm text-slate-700">
          Telefone
          <input
            type="tel"
            name="telefone"
            value={form.telefone}
            onChange={(event) => setForm((prev) => ({ ...prev, telefone: event.target.value }))}
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
          value={form.servico}
          onChange={(event) => setForm((prev) => ({ ...prev, servico: event.target.value }))}
          className="mt-2 w-full rounded-xl border border-slate-300 bg-white/80 px-4 py-3 outline-none focus:border-tech-blue"
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
          value={form.contexto}
          onChange={(event) => setForm((prev) => ({ ...prev, contexto: event.target.value }))}
          rows={5}
          className="mt-2 w-full rounded-xl border border-slate-300 bg-white/80 px-4 py-3 outline-none focus:border-tech-blue"
          placeholder="Descreva objetivos, prazo e escopo esperado."
        />
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-7 inline-flex rounded-full bg-tech-blue px-7 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-shell shadow-[0_12px_28px_rgba(30,58,138,0.24)] hover:bg-[#2749ad] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Enviando..." : "Enviar Solicitação"}
      </button>

      {message ? (
        <p
          className={`mt-4 text-sm ${
            status === "success" ? "text-emerald-700" : status === "error" ? "text-red-700" : "text-slate-600"
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
