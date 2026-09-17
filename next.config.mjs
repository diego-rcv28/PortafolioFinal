/** @type {import('next').NextConfig} */

/**
 * Cabeceras de seguridad HTTP.
 * OWASP A05:2021 - Security Misconfiguration.
 *
 * La Content-Security-Policy NO se define aquí: se genera por petición en
 * `middleware.ts` porque necesita un nonce aleatorio distinto cada vez.
 */
const securityHeaders = [
  // Evita que el navegador "adivine" el tipo MIME (XSS por archivos subidos).
  { key: "X-Content-Type-Options", value: "nosniff" },

  // Anti clickjacking. Complementa a frame-ancestors del CSP para navegadores viejos.
  { key: "X-Frame-Options", value: "DENY" },

  // No filtrar la URL completa hacia sitios externos.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },

  // Desactiva APIs del navegador que este sitio no usa.
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), interest-cohort=()",
  },

  // Obliga a usar HTTPS durante 2 años (solo tiene efecto sobre HTTPS).
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },

  // Aislamiento de ventana y de recursos entre orígenes.
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },

  // Bloquea políticas Flash/Acrobat heredadas (crossdomain.xml).
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },

  // No resolver DNS de forma anticipada hacia terceros.
  { key: "X-DNS-Prefetch-Control", value: "off" },
];

const nextConfig = {
  reactStrictMode: true,

  // A05: no revelar el framework usado en la cabecera X-Powered-By (fingerprinting).
  poweredByHeader: false,

  // A10 (SSRF): el optimizador de imágenes solo puede leer archivos locales.
  // Con `remotePatterns` vacío, ninguna URL remota puede pasar por /_next/image.
  images: {
    remotePatterns: [],
    dangerouslyAllowSVG: false,
    contentDispositionType: "attachment",
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
