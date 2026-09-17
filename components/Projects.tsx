"use client";

import { useState } from "react";
import content from "@/data/content.json";
import { motion } from "framer-motion";

// Paleta de degradados oscuros con cristal para cada tarjeta
const CARD_STYLES = [
  "bg-gradient-to-br from-blue-900/80 via-slate-900/90 to-black/95 border-blue-500/30 shadow-blue-500/10",
  "bg-gradient-to-br from-emerald-900/80 via-slate-900/90 to-black/95 border-emerald-500/30 shadow-emerald-500/10",
  "bg-gradient-to-br from-rose-900/80 via-slate-900/90 to-black/95 border-rose-500/30 shadow-rose-500/10",
  "bg-gradient-to-br from-amber-900/80 via-slate-900/90 to-black/95 border-amber-500/30 shadow-amber-500/10",
  "bg-gradient-to-br from-violet-900/80 via-slate-900/90 to-black/95 border-violet-500/30 shadow-violet-500/10",
  "bg-gradient-to-br from-cyan-900/80 via-slate-900/90 to-black/95 border-cyan-500/30 shadow-cyan-500/10",
];

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const projects = content.projects;
  const total = projects.length;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <section id="proyectos" className="mx-auto max-w-content px-6 py-4 sm:px-10 sm:py-6 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="grid gap-6 sm:grid-cols-[180px_1fr] sm:gap-12"
      >
        {/* Columna izquierda: Título y controles de navegación */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-copper font-semibold">
              Proyectos
            </p>
            <h2 className="mt-1 font-display text-2xl font-bold text-ink-light dark:text-ink sm:text-3xl">
              Trabajo Destacado
            </h2>
          </div>

          {/* Botones Prev / Next */}
          <div className="mt-6 flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="rounded-full bg-canvas-light/40 dark:bg-canvas/40 border border-copper/20 px-4 py-1.5 font-mono text-xs font-semibold text-ink-light dark:text-ink backdrop-blur-sm hover:bg-copper hover:text-canvas transition-all active:scale-95 cursor-pointer shadow-sm"
              aria-label="Proyecto anterior"
            >
              ← Prev
            </button>
            <button
              onClick={handleNext}
              className="rounded-full bg-canvas-light/40 dark:bg-canvas/40 border border-copper/20 px-4 py-1.5 font-mono text-xs font-semibold text-ink-light dark:text-ink backdrop-blur-sm hover:bg-copper hover:text-canvas transition-all active:scale-95 cursor-pointer shadow-sm"
              aria-label="Siguiente proyecto"
            >
              Next →
            </button>
          </div>
        </div>

        {/* Columna derecha: Escenario 3D Coverflow */}
        <div className="relative w-full h-[420px] sm:h-[450px] flex items-center justify-center [perspective:1200px] overflow-visible">
          {projects.map((project, index) => {
            let diff = index - activeIndex;
            if (diff > total / 2) diff -= total;
            if (diff < -total / 2) diff += total;

            let x = "0%";
            let z = 0;
            let rotateY = 0;
            let scale = 1;
            let opacity = 0;
            let zIndex = 0;

            if (diff === 0) {
              x = "0%";
              z = 100;
              rotateY = 0;
              scale = 1;
              opacity = 1;
              zIndex = 30;
            } else if (diff === 1) {
              x = "45%";
              z = -60;
              rotateY = -35;
              scale = 0.85;
              opacity = 0.85;
              zIndex = 20;
            } else if (diff === -1) {
              x = "-45%";
              z = -60;
              rotateY = 35;
              scale = 0.85;
              opacity = 0.85;
              zIndex = 20;
            } else if (diff === 2 || diff === -total + 2) {
              x = "78%";
              z = -180;
              rotateY = -50;
              scale = 0.7;
              opacity = 0.55;
              zIndex = 10;
            } else if (diff === -2 || diff === total - 2) {
              x = "-78%";
              z = -180;
              rotateY = 50;
              scale = 0.7;
              opacity = 0.55;
              zIndex = 10;
            }

            const styleColor = CARD_STYLES[index % CARD_STYLES.length];

            return (
              <motion.article
                key={project.name}
                onClick={() => setActiveIndex(index)}
                animate={{
                  x,
                  z,
                  rotateY,
                  scale,
                  opacity,
                }}
                transition={{
                  duration: 0.55,
                  ease: [0.25, 1, 0.5, 1],
                }}
                style={{
                  zIndex,
                  pointerEvents: opacity > 0 ? "auto" : "none",
                }}
                className={`absolute w-[280px] sm:w-[380px] lg:w-[440px] h-[370px] sm:h-[400px] rounded-3xl border p-6 sm:p-8 shadow-xl backdrop-blur-md cursor-pointer flex flex-col justify-between text-white ${styleColor}`}
              >
                {/* Número flotante e hipervínculos */}
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl sm:text-4xl font-black text-copper/40 select-none">
                    0{index + 1}
                  </span>
                  <div className="flex gap-2 font-mono text-xs">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="rounded-full bg-black/40 border border-white/10 px-3 py-1 backdrop-blur-md hover:bg-copper hover:text-canvas transition-colors"
                      >
                        GitHub ↗
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="rounded-full bg-copper/20 border border-copper/40 px-3 py-1 backdrop-blur-md hover:bg-copper hover:text-canvas transition-colors"
                      >
                        Demo ↗
                      </a>
                    )}
                  </div>
                </div>

                {/* Contenido del Proyecto */}
                <div className="my-auto">
                  <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white drop-shadow-sm">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-white/80 line-clamp-4 font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Etiquetas de Tecnologías */}
                <ul className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-black/40 border border-white/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-white/90 backdrop-blur-sm"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
}