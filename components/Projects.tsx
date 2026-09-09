"use client";

import { useState } from "react";
import content from "@/data/content.json";

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const projects = content.projects;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="proyectos" className="mx-auto max-w-content px-6 py-20 sm:px-10 sm:py-28 overflow-hidden">
      <div className="grid gap-10 rounded-3xl border border-line/60 bg-background/50 p-8 shadow-sm backdrop-blur-sm sm:grid-cols-[200px_1fr] sm:gap-16 sm:p-12 items-center">
        
        {/* Columna izquierda: Título y controles */}
        <div className="flex flex-col justify-between h-full">
          <p className="font-mono text-sm text-ink-light-muted dark:text-ink-muted">
            Proyectos
          </p>
          
          {/* Botones de navegación (visibles en escritorio) */}
          <div className="hidden sm:flex gap-3 mt-6">
            <button
              onClick={handlePrev}
              className="rounded-full border border-line/60 p-3 text-ink-light-muted hover:border-copper hover:text-copper dark:text-ink-muted transition-colors"
              aria-label="Proyecto anterior"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="rounded-full border border-line/60 p-3 text-ink-light-muted hover:border-copper hover:text-copper dark:text-ink-muted transition-colors"
              aria-label="Siguiente proyecto"
            >
              →
            </button>
          </div>
        </div>

        {/* Columna derecha: Contenedor del carrusel 3D */}
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-3xl min-h-[340px] flex items-center justify-center [perspective:1000px]">
            {projects.map((project, index) => {
              const offset = (index - activeIndex + projects.length) % projects.length;
              
              let transformStyle = "";
              let zIndex = 0;
              let opacity = "opacity-0 pointer-events-none";

              if (offset === 0) {
                // Al frente
                transformStyle = "translate3d(0px, 0px, 0px) rotateY(0deg) scale(1)";
                zIndex = 30;
                opacity = "opacity-100";
              } else if (offset === 1) {
                // A la derecha
                transformStyle = "translate3d(60px, 0px, -80px) rotateY(-12deg) scale(0.92)";
                zIndex = 20;
                opacity = "opacity-70 hover:opacity-100 cursor-pointer";
              } else {
                // A la izquierda
                transformStyle = "translate3d(-60px, 0px, -80px) rotateY(12deg) scale(0.92)";
                zIndex = 10;
                opacity = "opacity-70 hover:opacity-100 cursor-pointer";
              }

              return (
                <article
                  key={project.name}
                  onClick={() => setActiveIndex(index)}
                  style={{
                    transform: transformStyle,
                    zIndex: zIndex,
                  }}
                  className={`absolute w-full rounded-2xl border border-line/60 bg-white dark:bg-zinc-900 p-6 shadow-xl transition-all duration-500 ease-out hover:border-copper/70 ${opacity}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl font-semibold">
                      {project.name}
                    </h3>
                    <div className="flex shrink-0 gap-3 font-mono text-xs">
                      {project.github && (
                        <a 
                          href={project.github} 
                          className="text-ink-light-muted hover:text-copper dark:text-ink-muted" 
                          target="_blank" 
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          GitHub
                        </a>
                      )}
                      {project.demo && (
                        <a 
                          href={project.demo} 
                          className="text-ink-light-muted hover:text-copper dark:text-ink-muted" 
                          target="_blank" 
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <p className="mt-3 text-base leading-relaxed text-ink-light-muted dark:text-ink-muted">
                    {project.description}
                  </p>
                  
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md bg-line/20 px-2.5 py-1 font-mono text-xs text-ink-light-muted dark:text-ink-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

          {/* Botones de navegación (visibles solo en móvil) */}
          <div className="flex sm:hidden justify-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="rounded-full border border-line/60 px-5 py-2 font-mono text-xs text-ink-light-muted dark:text-ink-muted"
            >
              Anterior
            </button>
            <button
              onClick={handleNext}
              className="rounded-full border border-line/60 px-5 py-2 font-mono text-xs text-ink-light-muted dark:text-ink-muted"
            >
              Siguiente
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}