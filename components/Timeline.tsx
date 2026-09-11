"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import content from "@/data/content.json";
import { motion } from "framer-motion";

export function Timeline() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Desplazamiento automático continuo
  useEffect(() => {
    if (isPaused) return;

    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (container.scrollTop + container.clientHeight >= container.scrollHeight - 2) {
        container.scrollTop = 0;
      } else {
        container.scrollTop += 1;
      }
    }, 40);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="trayectoria" className="mx-auto max-w-content px-6 py-4 sm:px-10 sm:py-6">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="grid gap-6 sm:grid-cols-[180px_1fr] sm:gap-12"
      >
        {/* Columna izquierda: Título e indicador de estado */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-copper font-semibold">
              Trayectoria
            </p>
            <h2 className="mt-1 font-display text-2xl font-bold text-ink-light dark:text-ink sm:text-3xl">
              Experiencia & Educación
            </h2>
          </div>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-canvas-light/40 dark:bg-canvas/40 px-3 py-1 font-mono text-xs backdrop-blur-sm text-ink-light-muted dark:text-ink-muted w-fit">
            <span className={`h-2 w-2 rounded-full ${isPaused ? "bg-amber-400" : "bg-emerald-400 animate-pulse"}`} />
            <span>{isPaused ? "Pausado" : "Auto-scroll"}</span>
          </div>
        </div>

        {/* Columna derecha: Recuadro delimitado únicamente para la zona de desplazamiento */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative max-h-[380px] overflow-y-auto rounded-3xl border border-line/60 dark:border-line/30 bg-canvas-light/20 dark:bg-canvas/20 p-4 sm:p-6 backdrop-blur-md shadow-sm [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={{
            maskImage: "linear-gradient(to bottom, transparent, black 6%, black 94%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black 6%, black 94%, transparent)"
          }}
        >
          <ol className="relative border-l border-copper/30 pl-8 ml-3 my-2">
            {content.timeline.map((item, i) => (
              <li 
                key={i} 
                className="group relative pb-8 last:pb-2 transition-all duration-300 hover:translate-x-1"
              >
                {item.image ? (
                  <span className="absolute -left-[53px] top-0 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-canvas-light dark:bg-canvas shadow-md transition-all duration-300 group-hover:scale-110 ring-2 ring-copper/30">
                    <Image
                      src={item.image}
                      alt=""
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </span>
                ) : (
                  <span className="absolute -left-[37px] top-2 h-3 w-3 rounded-full bg-copper ring-4 ring-copper/20 transition-transform duration-300 group-hover:scale-125" />
                )}

                <div className="rounded-2xl p-3 transition-all duration-300 group-hover:bg-canvas-light/40 dark:group-hover:bg-canvas/40">
                  <p className="font-mono text-xs font-semibold text-copper">
                    {item.period}
                  </p>
                  <h3 className="mt-1 font-display text-base font-bold text-ink-light dark:text-ink group-hover:text-copper transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-modern text-xs font-medium text-ink-light-muted dark:text-ink-muted">
                    {item.place}
                  </p>
                  <p className="mt-2 font-modern text-sm leading-relaxed text-ink-light dark:text-ink/90">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

      </motion.div>
    </section>
  );
}