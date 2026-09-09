import Image from "next/image";
import content from "@/data/content.json";
import { ThemeToggle } from "./ThemeToggle";

export function Hero() {
  const { profile } = content;

  return (
    <header className="relative overflow-hidden bg-grid bg-[length:40px_40px]">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-6 sm:px-10">
        <span className="font-mono text-sm text-ink-light-muted dark:text-ink-muted">
          {profile.location}
        </span>
        <div className="flex items-center gap-6">
          <a href="#proyectos" className="hidden text-sm hover:text-copper transition-colors sm:inline">
            Proyectos
          </a>
          <a href="#contacto" className="hidden text-sm hover:text-copper transition-colors sm:inline">
            Contacto
          </a>
          <ThemeToggle />
        </div>
      </nav>

      {/* 
        Contenedor exterior con paddings laterales (px-6 sm:px-10) 
        para que la tarjeta interior jamás tope con la pantalla.
      */}
      <div className="mx-auto max-w-content px-6 pb-24 pt-12 sm:px-10 sm:pb-32 sm:pt-20">
        
        {/* Tarjeta con borde fijo adaptable en lugar del rgb-card */}
        <div className="rounded-4xl border border-line/60 bg-background/50 p-8 shadow-sm backdrop-blur-sm sm:p-12">
          
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Columna Izquierda: Textos y Botones */}
            <div className="flex flex-col items-start justify-center">
              <p className="mb-4 font-mono text-sm text-copper">
                {profile.role}
              </p>
              
              <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                {profile.name}
              </h1>
              
              <p className="mt-6 max-w-xl text-lg text-ink-light-muted dark:text-ink-muted">
                {profile.tagline}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="/cv.pdf"
                  download
                  className="rounded-full bg-copper px-6 py-3 text-sm font-medium text-canvas hover:bg-copper-soft transition-colors"
                >
                  Descargar CV (PDF)
                </a>
                <a
                  href="#contacto"
                  className="rounded-full border border-line/70 px-6 py-3 text-sm font-medium hover:border-copper transition-colors"
                >
                  Contactar
                </a>
              </div>
            </div>

            {/* Columna Derecha: Imagen sin fondo */}
            <div className="flex items-center justify-center md:justify-end">
              {profile.photo && (
                // Envolvemos la imagen en un aspect-square para controlar bien el tamaño
                <div className="relative w-full max-w-[320px] aspect-square lg:max-w-[380px]">
                  <Image
                    src={profile.photo}
                    alt={profile.name}
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      <div className="trace-divider" />
    </header>
  );
}