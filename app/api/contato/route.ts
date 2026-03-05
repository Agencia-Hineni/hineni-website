import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { SITE_CONFIG } from "@/lib/constants";

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

type RateEntry = {
  count: number;
  expiresAt: number;
};

const rateLimitStore = new Map<string, RateEntry>();

function getClientIp(req: NextRequest) {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = rateLimitStore.get(ip);

  if (!current || current.expiresAt < now) {
    rateLimitStore.set(ip, { count: 1, expiresAt: now + WINDOW_MS });
    return false;
  }

  current.count += 1;
  if (current.count > MAX_REQUESTS) return true;
  return false;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { ok: false, message: "Muitas tentativas. Tente novamente em instantes." },
        { status: 429 },
      );
    }

    const body = await req.json();
    const nome = String(body.nome ?? "").trim();
    const empresa = String(body.empresa ?? "").trim();
    const email = String(body.email ?? "").trim();
    const telefone = String(body.telefone ?? "").trim();
    const servico = String(body.servico ?? "").trim();
    const contexto = String(body.contexto ?? "").trim();
    const website = String(body.website ?? "").trim();

    if (website) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    if (!nome || !empresa || !email || !servico || !contexto) {
      return NextResponse.json(
        { ok: false, message: "Preencha todos os campos obrigatórios." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ ok: false, message: "E-mail inválido." }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT ?? "465");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.CONTACT_TO ?? SITE_CONFIG.contactEmail;

    if (!host || !port || !user || !pass) {
      return NextResponse.json(
        { ok: false, message: "Configuração de e-mail incompleta no servidor." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Site HINENI" <${user}>`,
      to,
      replyTo: email,
      subject: `[Contato Site] ${empresa} - ${servico}`,
      text: [
        `Nome: ${nome}`,
        `Empresa: ${empresa}`,
        `E-mail: ${email}`,
        `Telefone: ${telefone || "Não informado"}`,
        `Serviço: ${servico}`,
        "",
        "Contexto do projeto:",
        contexto,
      ].join("\n"),
      html: `
        <h2>Novo contato pelo site HINENI</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Empresa:</strong> ${empresa}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone || "Não informado"}</p>
        <p><strong>Serviço:</strong> ${servico}</p>
        <p><strong>Contexto do projeto:</strong></p>
        <p>${contexto.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ ok: true, message: "Solicitação enviada com sucesso." });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Falha no envio. Tente novamente." },
      { status: 500 },
    );
  }
}
