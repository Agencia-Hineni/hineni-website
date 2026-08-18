import { NextRequest, NextResponse } from "next/server";
import { authorizeAdminRequest } from "@/lib/admin-auth";
import { getSiteContent, setSiteContent, type SiteContent } from "@/lib/site-content";

export async function GET(req: NextRequest) {
  const auth = authorizeAdminRequest(req);
  if (!auth.ok) {
    return NextResponse.json({ ok: false, message: auth.message }, { status: auth.status });
  }

  const content = await getSiteContent();
  return NextResponse.json({ ok: true, content });
}

export async function PUT(req: NextRequest) {
  const auth = authorizeAdminRequest(req);
  if (!auth.ok) {
    return NextResponse.json({ ok: false, message: auth.message }, { status: auth.status });
  }

  try {
    const body = (await req.json()) as SiteContent;

    if (!body?.services?.length || !body?.localSeo?.cities?.length || !body?.contact?.email) {
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
