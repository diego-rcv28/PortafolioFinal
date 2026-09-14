/** @type {import('next').NextConfig} */
const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`;

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: cspHeader.replace(/\s{2,}/g, ' ').trim(),
  },
  {
    // Resuelve: Falta de cabecera Anti-Clickjacking
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    // Resuelve: Falta encabezado X-Content-Type-Options
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    // Mejora adicional de seguridad en navegadores
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  {
    // Atiende el aviso informativo sobre Directivas de Control de Caché
    key: 'Cache-Control',
    value: 'public, max-age=3600, must-revalidate',
  },
];

const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;