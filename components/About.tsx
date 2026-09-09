"use client";

import { useState } from "react";
import content from "@/data/content.json";

export function About() {
  const [isHovered, setIsHovered] = useState(false);

  // Texto alternativo/secundario (puedes moverlo a tu content.json si prefieres)
  const secondaryText =
    "¡Hola! Soy un desarrollador web y de software apasionado por crear experiencias digitales. Me especializo en construir interfaces intuitivas y funcionales, siempre buscando aprender y mejorar mis habilidades. Mi enfoque se centra en la eficiencia, la creatividad y la resolución de problemas, con el objetivo de ofrecer soluciones que realmente marquen la diferencia. ¡Vamos a construir algo increíble juntos!";

  return (
    <section id="sobre-mi" className="mx-auto max-w-content px-6 py-20 sm:px-10 sm:py-28">
      <div className="grid gap-10 rounded-4xl border border-line/60 bg-background/50 p-8 shadow-sm backdrop-blur-sm sm:grid-cols-[200px_1fr] sm:gap-16 sm:p-12">
        
        {/* Columna Izquierda */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="font-modern text-sm font-medium text-ink-light-muted dark:text-ink-muted">
              Sobre mí
            </p>

            {/* Badge interactivo */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-line/50 bg-canvas-light/60 dark:bg-canvas/60 px-3 py-1 font-mono text-xs">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Disponible</span>
            </div>
          </div>

        </div>

        {/* Columna Derecha: Tarjetas Bento Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          
          {/* Tarjeta Principal Interactiva */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative sm:col-span-2 min-h-[160px] overflow-hidden rounded-2xl border border-line/50 bg-canvas-light/60 dark:bg-canvas/60 p-6 backdrop-blur-md transition-all duration-500 hover:border-copper/60 hover:shadow-md cursor-pointer"
          >
            {/* Texto Principal (Por defecto) */}
            <div
              className={`transition-all duration-500 ease-in-out ${
                isHovered
                  ? "opacity-0 -translate-y-4 pointer-events-none"
                  : "opacity-100 translate-y-0"
              }`}
            >
              <p className="font-modern text-lg leading-relaxed sm:text-xl text-ink-light dark:text-ink">
                {content.about}
              </p>
            </div>

            {/* Texto Secundario (Muestra al hacer hover) */}
            <div
              className={`absolute inset-0 p-6 flex items-center transition-all duration-500 ease-in-out ${
                isHovered
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <p className="font-modern text-lg leading-relaxed sm:text-xl text-copper">
                {secondaryText}
              </p>
            </div>
          </div>

          {/* Tarjeta 2: Enfoque */}
          <div className="rounded-2xl border border-line/50 bg-canvas-light/60 dark:bg-canvas/60 p-5 backdrop-blur-md">
            <span className="font-mono text-xs text-copper font-semibold">ENFOQUE</span>
            <h3 className="mt-1 font-display text-base font-bold">Desarrollo Web & Software</h3>
            <p className="mt-1 font-modern text-xs text-ink-light-muted dark:text-ink-muted">
              Creando interfaces intuitivas, rápidas y funcionales.
            </p>
          </div>

          {/* Tarjeta 3: Filosofía */}
          <div className="rounded-2xl border border-line/50 bg-canvas-light/60 dark:bg-canvas/60 p-5 backdrop-blur-md">
            <span className="font-mono text-xs text-copper font-semibold">FILOSOFÍA</span>
            <h3 className="mt-1 font-display text-base font-bold">Aprendizaje Continuo</h3>
            <p className="mt-1 font-modern text-xs text-ink-light-muted dark:text-ink-muted">
              Apasionado por resolver problemas y explorar nuevas tecnologías.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}