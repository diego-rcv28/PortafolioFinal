"use client";

import { useState } from "react";
import content from "@/data/content.json";
import { motion } from "framer-motion";

export function Contact() {
  const { profile } = content;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (profile?.email) {
      navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="contacto" className="mx-auto max-w-content px-6 py-4 sm:px-10 sm:py-6">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="grid gap-6 sm:grid-cols-[180px_1fr] sm:gap-12"
      >
        {/* Columna Izquierda: Encabezado e indicador */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-copper font-semibold">
              Contacto
            </p>
            <h2 className="mt-1 font-display text-2xl font-bold text-ink-light dark:text-ink sm:text-3xl">
              ¡Hablemos!
            </h2>
          </div>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-canvas-light/40 dark:bg-canvas/40 px-3 py-1 font-mono text-xs backdrop-blur-sm text-ink-light-muted dark:text-ink-muted w-fit">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Respuestas &lt; 24h</span>
          </div>
        </div>

        {/* Columna Derecha: Tarjetas de contacto */}
        <div className="flex flex-col gap-4">
          {/* Tarjeta Principal */}
          <div className="rounded-3xl bg-canvas-light/30 dark:bg-canvas/30 p-6 backdrop-blur-md shadow-sm">
            <p className="font-modern text-base leading-relaxed text-ink-light dark:text-ink">
              ¿Tienes un proyecto en mente o una consulta? Estaré encantado de conversar.
            </p>

            {/* Botón de Copiar Correo */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                onClick={handleCopyEmail}
                className="group inline-flex items-center gap-3 rounded-full bg-background/60 dark:bg-background/40 border border-copper/20 px-4 py-2 font-mono text-xs sm:text-sm font-medium text-ink-light dark:text-ink transition-all duration-300 hover:border-copper hover:text-copper active:scale-95 cursor-pointer shadow-sm"
              >
                <span>{profile.email}</span>
                <span className="rounded-full bg-copper/10 px-2.5 py-0.5 text-xs text-copper group-hover:bg-copper group-hover:text-canvas transition-colors">
                  {copied ? "¡Copiado!" : "Copiar"}
                </span>
              </button>
            </div>
          </div>

          {/* Enlaces y Ubicación */}
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-3xl bg-canvas-light/30 dark:bg-canvas/30 p-4 backdrop-blur-md transition-all duration-300 hover:bg-canvas-light/50 dark:hover:bg-canvas/50 hover:translate-x-1 shadow-sm"
            >
              <span className="font-mono text-xs font-semibold text-ink-light dark:text-ink">GitHub</span>
              <span className="font-mono text-xs text-copper transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </a>

            <div className="flex items-center justify-between rounded-3xl bg-canvas-light/30 dark:bg-canvas/30 p-4 backdrop-blur-md shadow-sm">
              <span className="font-mono text-xs text-ink-light-muted dark:text-ink-muted">Ubicación</span>
              <span className="font-mono text-xs font-medium text-ink-light dark:text-ink">Remoto / Híbrido</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Pie de página / Copyright */}
      <div className="mt-16 border-t border-copper/10 pt-6 font-mono text-xs text-ink-light-muted dark:text-ink-muted">
        <p>© {new Date().getFullYear()} {profile.name}. Todos los derechos reservados.</p>
      </div>
    </section>
  );
}