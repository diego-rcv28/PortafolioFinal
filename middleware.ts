import { NextRequest, NextResponse } from "next/server";

/**
 * Content-Security-Policy generada por petición.
 * OWASP A05:2021 - Security Misconfiguration.
 *
 * Se necesita un nonce distinto en cada request (no se puede definir de forma
 * estática en next.config.mjs), por eso vive en middleware.
 *
 * - script-src usa nonce + 'strict-dynamic': solo se ejecutan los scripts que
 *   Next.js inyecta con ese nonce; cualquier script inyectado por un XSS
 *   (sin el nonce correcto) queda bloqueado.
 * - style-src incluye 'unsafe-inline' como *fallback* para navegadores viejos
 *   que no soportan nonces en estilos; los navegadores modernos ignoran
 *   'unsafe-inline' en cuanto detectan un nonce válido (comportamiento
 *   estándar de CSP Level 2+), así que no debilita la protección real.
 * - 'unsafe-eval' solo se agrega en desarrollo (lo requiere el Fast Refresh
 *   de Next.js); en producción no se incluye.
 */
export function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const isDev = process.env.NODE_ENV !== "production";

  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic'${isDev ? " 'unsafe-eval'" : ""};
    style-src 'self' 'nonce-${nonce}' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self' data:;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `;
  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, " ")
    .trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue
  );

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  response.headers.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue
  );

  return response;
}

export const config = {
  matcher: [
    // Aplica a todo excepto assets estáticos y archivos con extensión.
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
