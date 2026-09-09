"use client";

import { useState } from "react";
import content from "@/data/content.json";

export function Contact() {
  const { profile } = content;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contacto" className="mx-auto max-w-content px-6 py-20 sm:px-10 sm:py-28">
      <div className="grid gap-10 rounded-4xl border border-line/60 bg-background/50 p-8 shadow-sm backdrop-blur-sm sm:grid-cols-[200px_1fr] sm:gap-16 sm:p-12">
        
        {/* Columna Izquierda: Encabezado */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="font-mono text-sm text-ink-light-muted dark:text-ink-muted">
              Contacto
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
              ¡Hablemos!
            </h2>
          </div>

          <div className="mt-6 flex items-center gap-2 font-mono text-xs text-ink-light-muted dark:text-ink-muted">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Respuestas en &lt; 24h</span>
          </div>
        </div>

        {/* Columna Derecha: Tarjeta Principal con Interacción */}
        <div className="flex flex-col gap-6">
          <div className="rounded-2xl border border-line/50 bg-canvas-light/60 dark:bg-canvas/60 p-6 sm:p-8 backdrop-blur-md">
            <p className="font-modern text-lg leading-relaxed text-ink-light dark:text-ink">
              ¿Tienes un proyecto en mente, una consulta o simplemente quieres saludar? Estaré encantado de conversar.
            </p>

            {/* Copiar Correo Interactivo */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={handleCopyEmail}
                className="group relative inline-flex items-center gap-3 rounded-xl border border-line/60 bg-background/80 px-4 py-2.5 font-mono text-sm font-medium transition-all hover:border-copper hover:text-copper"
              >
                <span>{profile.email}</span>
                <span className="rounded-md bg-line/30 px-2 py-0.5 text-xs text-ink-light-muted dark:text-ink-muted group-hover:text-copper">
                  {copied ? "¡Copiado!" : "Copiar"}
                </span>
              </button>
            </div>
          </div>

          {/* Redes Sociales y Links */}
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-line/50 bg-canvas-light/60 dark:bg-canvas/60 p-4 transition-all duration-300 hover:border-copper/60 hover:translate-x-1"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-semibold">GitHub</span>
              </div>
              <span className="font-mono text-xs text-copper transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </a>

            <div className="flex items-center justify-between rounded-2xl border border-line/50 bg-canvas-light/60 dark:bg-canvas/60 p-4">
              <span className="font-mono text-xs text-ink-light-muted dark:text-ink-muted">Ubicación</span>
              <span className="font-mono text-xs font-medium">Remoto / Híbrido</span>
            </div>
          </div>
        </div>

      </div>

      <div className="trace-divider mt-24" />
      <p className="mt-8 font-mono text-xs text-ink-light-muted dark:text-ink-muted">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </section>
  );
}