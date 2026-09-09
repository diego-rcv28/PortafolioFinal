"use client";

import content from "@/data/content.json";

// Íconos SVG por defecto según el nombre de la categoría (con fallback genérico)
function CategoryIcon({ category }: { category: string }) {
  const name = category.toLowerCase();

  if (name.includes("front") || name.includes("ui") || name.includes("web")) {
    return (
      <svg className="h-6 w-6 text-copper" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    );
  }
  if (name.includes("back") || name.includes("server") || name.includes("api")) {
    return (
      <svg className="h-6 w-6 text-copper" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
      </svg>
    );
  }
  if (name.includes("data") || name.includes("base") || name.includes("sql")) {
    return (
      <svg className="h-6 w-6 text-copper" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    );
  }
  // Ícono de herramientas / otros
  return (
    <svg className="h-6 w-6 text-copper" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
    </svg>
  );
}

export function Skills() {
  return (
    <section id="habilidades" className="mx-auto max-w-content px-6 py-20 sm:px-10 sm:py-28">
      {/* Definición de la animación horizontal suave en CSS */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-slow {
          display: flex;
          width: max-content;
          animation: marquee 22s linear infinite;
        }
        .animate-marquee-slow:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="grid gap-10 rounded-4xl border border-line/60 bg-background/50 p-8 shadow-sm backdrop-blur-sm sm:grid-cols-[200px_1fr] sm:gap-16 sm:p-12">
        {/* Columna Izquierda: Título de Sección */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="font-mono text-sm text-ink-light-muted dark:text-ink-muted">
              Habilidades
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
              Stack Técnico
            </h2>
          </div>
          
        </div>

        {/* Columna Derecha: Rejilla con las 4 tarjetas de habilidades */}
        <div className="grid gap-6 sm:grid-cols-2">
          {content.skillGroups.map((group) => (
            <div
              key={group.category}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-line/60 bg-canvas-light/70 dark:bg-canvas/70 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-copper/60 hover:shadow-md"
            >
              {/* Encabezado fijo con ícono y título */}
              <div className="flex items-center gap-3 border-b border-line/40 pb-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-copper/10 border border-copper/20">
                  <CategoryIcon category={group.category} />
                </div>
                <h3 className="font-display text-base font-bold text-ink-light dark:text-ink">
                  {group.category}
                </h3>
              </div>

              {/* Carrusel Horizontal Automático de Tecnologías */}
              <div className="relative mt-5 overflow-hidden py-1">
                {/* Degradados sutiles en los bordes lateral izquierdo y derecho */}
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-6 bg-gradient-to-r from-canvas-light dark:from-canvas to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-6 bg-gradient-to-l from-canvas-light dark:from-canvas to-transparent" />

                <div className="animate-marquee-slow gap-2">
                  {/* Duplicamos la lista para crear el bucle infinito y continuo */}
                  {[...group.skills, ...group.skills].map((skill, index) => (
                    <span
                      key={`${skill}-${index}`}
                      className="inline-flex shrink-0 items-center rounded-lg border border-line/60 bg-background/80 px-3 py-1.5 font-mono text-xs text-ink-light-muted dark:text-ink-muted transition-colors hover:border-copper hover:text-copper"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}