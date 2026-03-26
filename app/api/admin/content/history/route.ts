import { NextRequest, NextResponse } from "next/server";
import { getContentHistory } from "@/lib/site-content";

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

  const history = await getContentHistory();
  return NextResponse.json({ ok: true, history });
}
