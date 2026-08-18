import { createHash, timingSafeEqual } from "node:crypto";
import type { NextRequest } from "next/server";

const WINDOW_MS = 60_000;
const MAX_FAILED_ATTEMPTS = 8;

type AttemptEntry = {
  count: number;
  expiresAt: number;
};

type AdminAuthResult =
  | { ok: true }
  | {
      ok: false;
      status: 401 | 429;
      message: string;
    };

const failedAttempts = new Map<string, AttemptEntry>();

function hashToken(value: string) {
  return createHash("sha256").update(value).digest();
}

function constantTimeEquals(a: string, b: string) {
  return timingSafeEqual(hashToken(a), hashToken(b));
}

function getClientIp(req: NextRequest) {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return "unknown";
}

function hasTooManyFailures(key: string) {
  const now = Date.now();
  const current = failedAttempts.get(key);

  if (!current || current.expiresAt < now) {
    failedAttempts.delete(key);
    return false;
  }

  return current.count >= MAX_FAILED_ATTEMPTS;
}

function registerFailure(key: string) {
  const now = Date.now();
  const current = failedAttempts.get(key);

  if (!current || current.expiresAt < now) {
    failedAttempts.set(key, { count: 1, expiresAt: now + WINDOW_MS });
    return;
  }

  current.count += 1;
}

export function authorizeAdminRequest(req: NextRequest): AdminAuthResult {
  const key = getClientIp(req);

  if (hasTooManyFailures(key)) {
    return {
      ok: false,
      status: 429,
      message: "Muitas tentativas. Tente novamente em instantes.",
    };
  }

  const token = req.headers.get("x-admin-token")?.trim() ?? "";
  const expected = process.env.ADMIN_PASSWORD?.trim() ?? "";

  if (!expected || !token || !constantTimeEquals(token, expected)) {
    registerFailure(key);
    return { ok: false, status: 401, message: "Não autorizado." };
  }

  failedAttempts.delete(key);
  return { ok: true };
}
