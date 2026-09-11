"use client";

import Image from "next/image";
import content from "@/data/content.json";
import { motion } from "framer-motion";

export function Hero() {
  const { profile } = content;

  return (
    <section id="hero" className="relative overflow-hidden bg-grid bg-[length:40px_40px] pt-24 sm:pt-28">
      {/* Luz ambiental decorativa */}
      <div className="absolute top-1/3 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-copper/20 blur-[140px] pointer-events-none" />

      {/* Contenedor principal */}
      <div className="mx-auto max-w-content px-6 pb-4 pt-6 sm:px-10 sm:pb-6 sm:pt-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative overflow-hidden rounded-4xl bg-background/40 p-8 shadow-xl backdrop-blur-md sm:p-12"
        >
          {/* Resplandor suave interno */}
          <div className="absolute -left-10 -top-10 -z-10 h-60 w-60 rounded-full bg-copper/10 blur-3xl pointer-events-none" />

          <div className="grid gap-12 md:grid-cols-2 items-end">
            
            {/* Columna Izquierda: Textos y Botones */}
            <div className="flex flex-col items-start justify-center pb-4 sm:pb-0">
              {/* Badge/Pill con estado activo */}
              <div className="inline-flex items-center gap-2.5 rounded-full bg-copper/10 px-3.5 py-1.5 text-xs font-mono text-copper backdrop-blur-md mb-5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>{profile.role}</span>
              </div>
              
              <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink-light dark:text-ink sm:text-5xl lg:text-6xl">
                {profile.name}
              </h1>
              
              <p className="mt-5 max-w-xl text-lg text-ink-light-muted dark:text-ink-muted leading-relaxed">
                {profile.tagline}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
              </div>
            </div>

            {/* Columna Derecha: Foto */}
            <div className="flex items-end justify-center md:justify-end -mb-8 sm:-mb-12 pt-6">
              {profile.photo ? (
                <div className="relative w-full max-w-[340px] h-[360px] sm:h-[440px] lg:max-w-[400px]">
                  <div className="absolute inset-0 rounded-full bg-copper/20 blur-3xl -z-10" />
                  
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
                <div className="mb-8 flex items-center justify-center w-full max-w-[320px] aspect-square rounded-3xl bg-canvas/30 text-ink-muted font-mono text-xs text-center p-4">
                  Define la propiedad "photo" en content.json
                </div>
              )}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}