"use client";

import { FormEvent, useState } from "react";
import { trackLeadSubmission } from "@/lib/analytics";
import { Button } from "@/components/ui/button";
import { SelectField, TextArea, TextInput } from "@/components/ui/field";
import {
  CONTEXT_PLACEHOLDERS,
  CREDIT_PACKS,
  DEFAULT_CONTEXT_PLACEHOLDER,
  INQUIRY_INTERESTS,
  isInquiryInterest,
} from "@/lib/inquiry-options";

type FormState = {
  nome: string;
  empresa: string;
  email: string;
  telefone: string;
  servico: string;
  pacote: string;
  contexto: string;
  website: string;
};

type ContactFormProps = {
  initialInterest?: string;
  initialOrigin?: string;
  initialPack?: string;
};

function buildInitialState(initialInterest?: string, initialPack?: string): FormState {
  return {
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
    servico: initialInterest && isInquiryInterest(initialInterest) ? initialInterest : "",
    pacote: initialPack && CREDIT_PACKS.some((pack) => pack.id === initialPack) ? initialPack : "",
    contexto: "",
    website: "",
  };
}

const CREDIT_INTEREST = "Créditos adicionais do Hineni Prospect";

export function ContactForm({ initialInterest, initialOrigin, initialPack }: ContactFormProps) {
  const [form, setForm] = useState<FormState>(() => buildInitialState(initialInterest, initialPack));
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const origem = initialOrigin?.trim() || "Site";
  const showPackField = form.servico === CREDIT_INTEREST;
  const contextPlaceholder =
    (isInquiryInterest(form.servico) ? CONTEXT_PLACEHOLDERS[form.servico] : undefined) ??
    DEFAULT_CONTEXT_PLACEHOLDER;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, origem }),
      });
      const data = (await response.json()) as { ok: boolean; message?: string };

      if (!response.ok || !data.ok) {
        setStatus("error");
        setMessage(data.message ?? "Falha ao enviar. Tente novamente.");
        return;
      }

      setStatus("success");
      setMessage(data.message ?? "Solicitacao enviada com sucesso.");
      trackLeadSubmission(form.servico);
      setForm(buildInitialState());
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
        O que você procura?
        <SelectField
          required
          name="servico"
          value={form.servico}
          onChange={(event) =>
            setForm((prev) => ({
              ...prev,
              servico: event.target.value,
              pacote: event.target.value === CREDIT_INTEREST ? prev.pacote : "",
            }))
          }
          className="mt-2"
        >
          <option value="" disabled>
            Selecione uma opcao
          </option>
          {INQUIRY_INTERESTS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </SelectField>
      </label>

      {showPackField ? (
        <label className="mt-5 block text-sm text-slate-700">
          Pacote desejado
          <SelectField
            name="pacote"
            value={form.pacote}
            onChange={(event) => setForm((prev) => ({ ...prev, pacote: event.target.value }))}
            className="mt-2"
          >
            <option value="">Ainda não sei / quero orientação</option>
            {CREDIT_PACKS.map((pack) => (
              <option key={pack.id} value={pack.id}>
                {pack.credits} créditos — {pack.price}
              </option>
            ))}
          </SelectField>
        </label>
      ) : null}

      <label className="mt-5 block text-sm text-slate-700">
        Contexto do projeto
        <TextArea
          required
          name="contexto"
          value={form.contexto}
          onChange={(event) => setForm((prev) => ({ ...prev, contexto: event.target.value }))}
          rows={5}
          className="mt-2"
          placeholder={contextPlaceholder}
        />
      </label>

      <Button type="submit" disabled={status === "loading"} className="mt-7">
        {status === "loading" ? "Enviando..." : "Enviar Solicitacao"}
      </Button>

      {message ? (
        <p
          className={`mt-4 text-sm ${
            status === "success"
              ? "text-emerald-700"
              : status === "error"
                ? "text-red-700"
                : "text-slate-600"
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
