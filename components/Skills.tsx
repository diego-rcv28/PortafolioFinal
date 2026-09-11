"use client";

import content from "@/data/content.json";
import { motion } from "framer-motion";

// Íconos SVG por defecto según el nombre de la categoría (con fallback genérico)
function CategoryIcon({ category }: { category: string }) {
  const name = category.toLowerCase();

  if (name.includes("front") || name.includes("ui") || name.includes("web")) {
    return (
      <svg className="h-5 w-5 text-copper" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    );
  }
  if (name.includes("back") || name.includes("server") || name.includes("api")) {
    return (
      <svg className="h-5 w-5 text-copper" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
      </svg>
    );
  }
  if (name.includes("data") || name.includes("base") || name.includes("sql")) {
    return (
      <svg className="h-5 w-5 text-copper" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    );
  }
  return (
    <svg className="h-5 w-5 text-copper" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
    </svg>
  );
}

export function Skills() {
  // Convierte la rueda vertical del mouse en scroll horizontal manual
  const handleWheelScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    if (e.deltaY !== 0) {
      e.currentTarget.scrollLeft += e.deltaY;
    }
  };

  return (
    <section id="habilidades" className="mx-auto max-w-content px-6 py-4 sm:px-10 sm:py-6">
      {/* Animación marquee + Estilos de scrollbar personalizado */}
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

        /* Scrollbar elegante y sutil en cobre */
        .custom-scrollbar::-webkit-scrollbar {
          height: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(184, 115, 51, 0.25);
          border-radius: 9999px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(184, 115, 51, 0.6);
        }
      `}</style>

      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="grid gap-6 sm:grid-cols-[180px_1fr] sm:gap-12"
      >
        {/* Columna Izquierda: Título y badge */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-copper font-semibold">
              Habilidades
            </p>
            <h2 className="mt-1 font-display text-2xl font-bold text-ink-light dark:text-ink sm:text-3xl">
              Stack Técnico
            </h2>
          </div>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-canvas-light/40 dark:bg-canvas/40 px-3 py-1 font-mono text-xs backdrop-blur-sm text-ink-light-muted dark:text-ink-muted w-fit">
            <span className="h-2 w-2 rounded-full bg-copper animate-pulse" />
            <span>Herramientas</span>
          </div>
        </div>

        {/* Columna Derecha: Tarjetas Bento con Carrusel y Scroll Manual */}
        <div className="grid gap-4 sm:grid-cols-2">
          {content.skillGroups.map((group) => (
            <div
              key={group.category}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-canvas-light/30 dark:bg-canvas/30 p-5 backdrop-blur-md transition-all duration-300 hover:bg-canvas-light/50 dark:hover:bg-canvas/50 shadow-sm"
            >
              {/* Encabezado con ícono y título */}
              <div className="flex items-center gap-3 border-b border-copper/10 pb-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-copper/10">
                  <CategoryIcon category={group.category} />
                </div>
                <h3 className="font-display text-base font-bold text-ink-light dark:text-ink">
                  {group.category}
                </h3>
              </div>

              {/* Contenedor del Carrusel con Soporte de Scroll Manual */}
              <div className="relative mt-4">
                {/* Sombras suaves fijas en los bordes */}
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-6 bg-gradient-to-r from-canvas-light/80 dark:from-canvas/80 to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-6 bg-gradient-to-l from-canvas-light/80 dark:from-canvas/80 to-transparent" />

                {/* Área Scrollable (Con soporte para rueda del mouse, touch y scrollbar) */}
                <div
                  onWheel={handleWheelScroll}
                  className="custom-scrollbar overflow-x-auto py-2 select-none cursor-grab active:cursor-grabbing"
                >
                  <div className="animate-marquee-slow gap-2">
                    {[...group.skills, ...group.skills].map((skill, index) => (
                      <span
                        key={`${skill}-${index}`}
                        className="inline-flex shrink-0 items-center rounded-full bg-background/60 dark:bg-background/40 px-3 py-1 font-mono text-xs font-medium text-ink-light dark:text-ink transition-all duration-300 hover:scale-105 hover:bg-copper hover:text-canvas"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}