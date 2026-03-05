"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { SelectField, TextArea, TextInput } from "@/components/ui/field";

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
          <TextInput
            required
            type="text"
            name="nome"
            value={form.nome}
            onChange={(event) => setForm((prev) => ({ ...prev, nome: event.target.value }))}
            className="mt-2"
            placeholder="Seu nome"
          />
        </label>
        <label className="text-sm text-slate-700">
          Empresa
          <TextInput
            required
            type="text"
            name="empresa"
            value={form.empresa}
            onChange={(event) => setForm((prev) => ({ ...prev, empresa: event.target.value }))}
            className="mt-2"
            placeholder="Nome da empresa"
          />
        </label>
        <label className="text-sm text-slate-700">
          E-mail corporativo
          <TextInput
            required
            type="email"
            name="email"
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            className="mt-2"
            placeholder="voce@empresa.com"
          />
        </label>
        <label className="text-sm text-slate-700">
          Telefone
          <TextInput
            type="tel"
            name="telefone"
            value={form.telefone}
            onChange={(event) => setForm((prev) => ({ ...prev, telefone: event.target.value }))}
            className="mt-2"
            placeholder="+55 (00) 00000-0000"
          />
        </label>
      </div>

      <label className="mt-5 block text-sm text-slate-700">
        Serviço de interesse
        <SelectField
          required
          name="servico"
          value={form.servico}
          onChange={(event) => setForm((prev) => ({ ...prev, servico: event.target.value }))}
          className="mt-2"
        >
          <option value="" disabled>
            Selecione uma opção
          </option>
          <option>Sites Institucionais Empresariais</option>
          <option>Landing Pages Estratégicas</option>
          <option>Estrutura Digital para Negócios</option>
        </SelectField>
      </label>

      <label className="mt-5 block text-sm text-slate-700">
        Contexto do projeto
        <TextArea
          required
          name="contexto"
          value={form.contexto}
          onChange={(event) => setForm((prev) => ({ ...prev, contexto: event.target.value }))}
          rows={5}
          className="mt-2"
          placeholder="Descreva objetivos, prazo e escopo esperado."
        />
      </label>

      <Button type="submit" disabled={status === "loading"} className="mt-7">
        {status === "loading" ? "Enviando..." : "Enviar Solicitação"}
      </Button>

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
