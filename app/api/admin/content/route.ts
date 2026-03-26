import { NextRequest, NextResponse } from "next/server";
import { getSiteContent, setSiteContent, type SiteContent } from "@/lib/site-content";

function isAuthorized(req: NextRequest) {
  const token = req.headers.get("x-admin-token")?.trim();
  const expected = process.env.ADMIN_PASSWORD?.trim();
  if (!expected) return false;
  return token === expected;
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ ok: false, message: "Não autorizado." }, { status: 401 });
  }

  const content = await getSiteContent();
  return NextResponse.json({ ok: true, content });
}

export async function PUT(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ ok: false, message: "Não autorizado." }, { status: 401 });
  }

  try {
    const body = (await req.json()) as SiteContent;

    if (!body?.plans?.length || !body?.localSeo?.cities?.length || !body?.contact?.email) {
      return NextResponse.json(
        { ok: false, message: "Conteúdo inválido. Verifique os campos obrigatórios." },
        { status: 400 },
      );
    }

    await setSiteContent(body);
    return NextResponse.json({ ok: true, message: "Conteúdo atualizado com sucesso." });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Falha ao salvar conteúdo." },
      { status: 500 },
    );
  }
}
