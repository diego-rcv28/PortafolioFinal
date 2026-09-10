"use client";

import Image from "next/image";
import content from "@/data/content.json";
import { ThemeToggle } from "./ThemeToggle";
import { motion } from "framer-motion";

export function Hero() {
  const { profile } = content;

  return (
    <header className="relative overflow-hidden bg-grid bg-[length:40px_40px]">
      {/* Luz ambiental decorativa */}
      <div className="absolute top-1/3 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-copper/20 blur-[120px] pointer-events-none" />

      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-6 sm:px-10">
        <span className="font-mono text-sm text-ink-light-muted dark:text-ink-muted">
          {profile.location}
        </span>
        <div className="flex items-center gap-6">
          <ThemeToggle />
        </div>
      </nav>

      {/* Contenedor principal */}
      <div className="mx-auto max-w-content px-6 pb-24 pt-12 sm:px-10 sm:pb-32 sm:pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative overflow-hidden rounded-4xl border border-line/60 bg-background/50 p-8 shadow-sm backdrop-blur-sm sm:p-12"
        >
          <div className="grid gap-12 md:grid-cols-2 items-end">
            
            {/* Columna Izquierda: Textos y Botones */}
            <div className="flex flex-col items-start justify-center pb-4 sm:pb-0">
              <p className="mb-4 font-mono text-sm text-copper font-medium">
                {profile.role}
              </p>
              
              <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink-light dark:text-ink sm:text-5xl lg:text-6xl">
                {profile.name}
              </h1>
              
              <p className="mt-6 max-w-xl text-lg text-ink-light-muted dark:text-ink-muted leading-relaxed">
                {profile.tagline}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="/cv.pdf"
                  download
                  className="rounded-full bg-copper px-6 py-3 text-sm font-medium text-canvas hover:bg-copper-soft transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Descargar CV (PDF)
                </a>
                <a
                  href="#contacto"
                  className="rounded-full border border-line/70 px-6 py-3 text-sm font-medium hover:border-copper transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Contactar
                </a>
              </div>
            </div>

            {/* Columna Derecha: Foto pegada al borde inferior */}
            <div className="flex items-end justify-center md:justify-end -mb-8 sm:-mb-12 pt-6">
              {profile.photo ? (
                <div className="relative w-full max-w-[340px] h-[360px] sm:h-[440px] lg:max-w-[400px]">
                  {/* Resplandor decorativo sutil */}
                  <div className="absolute inset-0 rounded-full bg-copper/15 blur-2xl -z-10" />
                  
                  <Image
                    src={profile.photo}
                    alt={profile.name}
                    fill
                    className="object-cover object-bottom drop-shadow-2xl"
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
              ) : (
                <div className="mb-8 flex items-center justify-center w-full max-w-[320px] aspect-square rounded-3xl border border-dashed border-line/60 bg-canvas/30 text-ink-muted font-mono text-xs text-center p-4">
                  Define la propiedad "photo" en content.json
                </div>
              )}
            </div>

          </div>
        </motion.div>
      </div>

      <div className="trace-divider" />
    </header>
  );
}