import { NextRequest, NextResponse } from "next/server";
import { authorizeAdminRequest } from "@/lib/admin-auth";
import { getContentHistory } from "@/lib/site-content";

export async function GET(req: NextRequest) {
  const auth = authorizeAdminRequest(req);
  if (!auth.ok) {
    return NextResponse.json({ ok: false, message: auth.message }, { status: auth.status });
  }

  const history = await getContentHistory();
  return NextResponse.json({ ok: true, history });
}
