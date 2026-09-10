"use client";

import { useState, useEffect } from "react";
import { useBackground } from "@/components/BackgroundManager";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const { bgType, setBgType } = useBackground();

  // Detectar el scroll para cambiar el fondo de transparente a sólido/difuminado
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Trayectoria", href: "#trayectoria" },
    { name: "Habilidades", href: "#habilidades" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Contacto", href: "#contacto" },
  ];

  const themes = [
    { id: "grid", label: "Cuadrícula", icon: "⊞" },
    { id: "aurora", label: "Aurora Animada", icon: "✦" },
    { id: "nodes", label: "Puntos / Nodos", icon: "⚛" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-canvas/80 backdrop-blur-md border-b border-line/60 py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto max-w-content px-6 sm:px-10 flex items-center justify-between">
        
        {/* Logo o Nombre */}
        <a 
          href="#" 
          className="font-display text-xl font-bold text-gradient hover:text-copper transition-colors"
        >
          MiPortafolio<span className="text-copper">.</span>
        </a>

        {/* Navegación Desktop y Selector de Tema */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-mono text-sm font-medium text-ink-muted hover:text-copper transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Menú Desplegable de Temas Animados */}
          <div className="relative">
            <button
              onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
              className="tech-pill hover:border-copper transition-colors cursor-pointer"
            >
              <span>Fondo: {themes.find((t) => t.id === bgType)?.icon}</span>
            </button>

            {isThemeMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-xl border border-line/60 bg-canvas/95 p-2 shadow-xl backdrop-blur-md">
                <p className="px-3 py-1 font-mono text-[10px] text-ink-muted uppercase tracking-wider">
                  Estilo de fondo
                </p>
                {themes.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => {
                      setBgType(theme.id as any);
                      setIsThemeMenuOpen(false);
                    }}
                    className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 font-mono text-xs transition-colors ${
                      bgType === theme.id
                        ? "bg-copper/15 text-copper font-semibold"
                        : "text-ink-muted hover:bg-canvas-alt hover:text-ink"
                    }`}
                  >
                    <span>{theme.icon}</span>
                    <span>{theme.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Botón de Menú Móvil */}
        <button className="md:hidden flex flex-col gap-1.5 p-2 group">
          <span className="w-6 h-0.5 bg-ink-muted group-hover:bg-copper transition-colors" />
          <span className="w-4 h-0.5 bg-ink-muted group-hover:bg-copper transition-colors self-end" />
          <span className="w-6 h-0.5 bg-ink-muted group-hover:bg-copper transition-colors" />
        </button>

      </div>
    </header>
  );
}