"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import content from "@/data/content.json";

export function Timeline() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Desplazamiento automático continuo
  useEffect(() => {
    if (isPaused) return;

    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      // Si llega al final del contenido, vuelve arriba suavemente
      if (container.scrollTop + container.clientHeight >= container.scrollHeight - 2) {
        container.scrollTop = 0;
      } else {
        container.scrollTop += 1;
      }
    }, 40); // Ajusta este número si quieres cambiar la velocidad

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="trayectoria" className="mx-auto max-w-content px-6 py-20 sm:px-10 sm:py-28">
      <div className="grid gap-10 rounded-4xl border border-line/60 bg-background/50 p-8 shadow-sm backdrop-blur-sm sm:grid-cols-[200px_1fr] sm:gap-16 sm:p-12">
        
        {/* Columna izquierda: Título e indicador de estado */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="font-modern text-sm font-medium text-ink-light-muted dark:text-ink-muted">
              Trayectoria
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
              Experiencia & Educación
            </h2>
          </div>

          {/* Estado de auto-scroll */}
          <div className="mt-6 flex items-center gap-2 font-mono text-xs text-ink-light-muted dark:text-ink-muted">

          </div>
        </div>

        {/* Columna derecha: Cuadro con auto-scroll y pausa al pasar el cursor */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative max-h-[420px] overflow-y-auto rounded-2xl border border-line/50 bg-canvas-light/60 dark:bg-canvas/60 p-6 sm:p-8 shadow-inner backdrop-blur-md transition-colors hover:border-copper/50"
        >
          <ol className="relative max-w-2xl border-l border-line/60 pl-8">
            {content.timeline.map((item, i) => (
              <li 
                key={i} 
                className="group relative pb-10 last:pb-0 transition-all duration-300 hover:translate-x-1"
              >
                {item.image ? (
                  <span className="absolute -left-[54px] top-0 flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-line/60 bg-canvas-light dark:bg-canvas shadow-md transition-all duration-300 group-hover:scale-110 group-hover:border-copper sm:h-10 sm:w-10">
                    <Image
                      src={item.image}
                      alt=""
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </span>
                ) : (
                  <span className="node-dot absolute -left-[34px] top-1.5 transition-transform duration-300 group-hover:scale-125" />
                )}

                {/* Micro-tarjeta interactiva en cada elemento */}
                <div className="rounded-xl border border-transparent p-3 transition-all duration-300 group-hover:border-line/40 group-hover:bg-background/80 group-hover:shadow-sm">
                  <p className="font-modern text-xs font-semibold text-copper">
                    {item.period}
                  </p>
                  <h3 className="mt-1 font-modern text-lg font-bold group-hover:text-copper transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-modern text-sm text-ink-light-muted dark:text-ink-muted">
                    {item.place}
                  </p>
                  <p className="mt-2 font-modern text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

      </div>
    </section>
  );
}