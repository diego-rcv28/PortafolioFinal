"use client";

import { useState } from "react";
import content from "@/data/content.json";
import { motion } from "framer-motion";

export function About() {
  const [isHovered, setIsHovered] = useState(false);

  // Texto alternativo/secundario
  const secondaryText =
    "Soy un desarrollador web y de software apasionado por crear experiencias digitales. Me especializo en construir interfaces intuitivas y funcionales, siempre buscando aprender y mejorar mis habilidades. Mi enfoque se centra en la eficiencia, la creatividad y la resolución de problemas.";

  return (
    <section id="sobre-mi" className="mx-auto max-w-content px-6 py-4 sm:px-10 sm:py-6">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="grid gap-6 sm:grid-cols-[180px_1fr] sm:gap-12"
      >
        {/* Columna Izquierda: Título y estado */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-copper font-semibold">
              Sobre mí
            </p>
            <h2 className="mt-1 font-display text-2xl font-bold text-ink-light dark:text-ink sm:text-3xl">
              Perfil
            </h2>
          </div>

          {/* Badge interactivo con luz pulsante */}
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-canvas-light/40 dark:bg-canvas/40 px-3 py-1 font-mono text-xs backdrop-blur-sm text-ink-light-muted dark:text-ink-muted w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Disponible</span>
          </div>
        </div>

        {/* Columna Derecha: Tarjetas Bento Grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          
          {/* Tarjeta Principal Interactiva */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative sm:col-span-2 min-h-[160px] overflow-hidden rounded-3xl bg-canvas-light/30 dark:bg-canvas/30 p-6 sm:p-8 backdrop-blur-md transition-all duration-500 hover:bg-canvas-light/50 dark:hover:bg-canvas/50 cursor-pointer shadow-sm flex items-center"
          >
            {/* Indicador discreto en esquina */}
            <span className="absolute top-4 right-4 font-mono text-[10px] text-ink-light-muted/60 dark:text-ink-muted/60 uppercase tracking-wider">
              {isHovered ? "✦ Más de mí" : "✦ Pasa el cursor"}
            </span>

            {/* Texto Principal (Por defecto) */}
            <div
              className={`transition-all duration-500 ease-in-out w-full ${
                isHovered
                  ? "opacity-0 -translate-y-3 pointer-events-none"
                  : "opacity-100 translate-y-0"
              }`}
            >
              <p className="font-modern text-base leading-relaxed sm:text-lg text-ink-light dark:text-ink pr-8">
                {content.about}
              </p>
            </div>

            {/* Texto Secundario (Muestra al hacer hover) */}
            <div
              className={`absolute inset-0 p-6 sm:p-8 flex items-center transition-all duration-500 ease-in-out ${
                isHovered
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3 pointer-events-none"
              }`}
            >
              <p className="font-modern text-base leading-relaxed sm:text-lg text-copper pr-8 font-medium">
                {secondaryText}
              </p>
            </div>
          </div>

          {/* Tarjeta 2: Enfoque */}
          <div className="group rounded-3xl bg-canvas-light/30 dark:bg-canvas/30 p-6 backdrop-blur-md shadow-sm transition-all duration-300 hover:bg-canvas-light/50 dark:hover:bg-canvas/50">
            <span className="font-mono text-xs text-copper font-semibold tracking-wide">ENFOQUE</span>
            <h3 className="mt-1 font-display text-base font-bold text-ink-light dark:text-ink group-hover:text-copper transition-colors">
              Desarrollo Web & Software
            </h3>
            <p className="mt-1 font-modern text-xs leading-relaxed text-ink-light-muted dark:text-ink-muted">
              Creando interfaces intuitivas, rápidas y funcionales.
            </p>
          </div>

          {/* Tarjeta 3: Filosofía */}
          <div className="group rounded-3xl bg-canvas-light/30 dark:bg-canvas/30 p-6 backdrop-blur-md shadow-sm transition-all duration-300 hover:bg-canvas-light/50 dark:hover:bg-canvas/50">
            <span className="font-mono text-xs text-copper font-semibold tracking-wide">FILOSOFÍA</span>
            <h3 className="mt-1 font-display text-base font-bold text-ink-light dark:text-ink group-hover:text-copper transition-colors">
              Aprendizaje Continuo
            </h3>
            <p className="mt-1 font-modern text-xs leading-relaxed text-ink-light-muted dark:text-ink-muted">
              Apasionado por resolver problemas y explorar nuevas tecnologías.
            </p>
          </div>

        </div>
      </motion.div>
    </section>
  );
}