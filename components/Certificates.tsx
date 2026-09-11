"use client";

import content from "@/data/content.json";
import { motion } from "framer-motion";

export function Certificates() {
  const certificates = content.certificates || [];

  return (
    <section id="certificados" className="mx-auto max-w-content px-6 py-4 sm:px-10 sm:py-6">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="grid gap-6 sm:grid-cols-[180px_1fr] sm:gap-12"
      >
        {/* Columna Izquierda: Encabezado y total */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-copper font-semibold">
              Certificaciones
            </p>
            <h2 className="mt-1 font-display text-2xl font-bold text-ink-light dark:text-ink sm:text-3xl">
              Certificados
            </h2>
          </div>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-canvas-light/40 dark:bg-canvas/40 px-3 py-1 font-mono text-xs backdrop-blur-sm text-ink-light-muted dark:text-ink-muted w-fit">
            <span className="text-copper font-bold">✦</span>
            <span>{certificates.length} Certificados</span>
          </div>
        </div>

        {/* Columna Derecha: Cuadrícula de Certificados */}
        <div className="grid gap-6 sm:grid-cols-2">
          {certificates.map((cert: any, index: number) => {
            // Comprueba si el certificado tiene un enlace válido (diferente de "#" o vacío)
            const hasLink = Boolean(cert.link && cert.link.trim() !== "" && cert.link !== "#");
            const CardTag = hasLink ? "a" : "div";

            return (
              <CardTag
                key={cert.title || index}
                {...(hasLink
                  ? {
                      href: cert.link,
                      target: "_blank",
                      rel: "noreferrer",
                    }
                  : {})}
                className={`group rounded-3xl bg-canvas-light/30 dark:bg-canvas/30 p-5 backdrop-blur-md shadow-sm border border-copper/10 transition-all duration-300 hover:bg-canvas-light/50 dark:hover:bg-canvas/50 flex flex-col justify-between ${
                  hasLink ? "cursor-pointer hover:border-copper/40" : ""
                }`}
              >
                <div>
                  {/* Imagen del Certificado */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-line/40 bg-black/20">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Información del Certificado */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between font-mono text-xs text-ink-light-muted dark:text-ink-muted">
                      <span className="text-copper font-medium">{cert.issuer}</span>
                      <span>{cert.date}</span>
                    </div>

                    <h3 className="mt-1 font-display text-base font-bold text-ink-light dark:text-ink group-hover:text-copper transition-colors">
                      {cert.title}
                    </h3>
                  </div>
                </div>

                {/* Indicador de credencial (solo aparece si tiene un enlace válido) */}
                {hasLink && (
                  <div className="mt-4 pt-3 border-t border-line/30 flex justify-end">
                    <span className="inline-flex items-center gap-1 font-mono text-xs text-copper group-hover:underline">
                      <span>Ver credencial</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        ↗
                      </span>
                    </span>
                  </div>
                )}
              </CardTag>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}