"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useBackground } from "@/components/BackgroundManager";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { bgType, setBgType } = useBackground();


  useEffect(() => {
    setMounted(true);
  }, []);

  // Detectar scroll para ajustar opacidad del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sobre mí", href: "#sobre-mi" },
    { name: "Trayectoria", href: "#trayectoria" },
    { name: "Habilidades", href: "#habilidades" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Certificados", href: "#certificados" },
    { name: "Contacto", href: "#contacto" },
  ];

  const themes = [
    { id: "grid", label: "Cuadrícula", icon: "⊞" },
    { id: "aurora", label: "Aurora Animada", icon: "✦" },
    { id: "nodes", label: "Puntos / Nodos", icon: "⚛" },
  ];

  const isDark = mounted ? (resolvedTheme === "dark" || theme === "dark") : true;

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-canvas/80 backdrop-blur-md border-b border-black/10 dark:border-line/60 py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto max-w-content px-6 sm:px-10 flex items-center justify-between">
        
        {/* Logo / Nombre */}
        <a 
          href="#" 
          className="font-display text-xl font-bold text-black dark:text-ink hover:text-copper transition-colors"
        >
          MiPortafolio<span className="text-copper">.</span>
        </a>

        {/* Navegación Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-mono text-xs font-medium text-zinc-800 dark:text-ink-muted hover:text-copper dark:hover:text-copper transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Botón Modo Claro / Oscuro con Iconos SVG */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            className="flex items-center gap-2 rounded-full border border-black/20 dark:border-copper/20 bg-black/5 dark:bg-canvas/40 px-3 py-1.5 font-mono text-xs text-black dark:text-ink hover:border-copper transition-colors cursor-pointer"
            title="Cambiar modo"
          >
            {mounted ? (
              <>
                {isDark ? (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                    </svg>
                    <span>Claro</span>
                  </>
                ) : (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                    <span>Oscuro</span>
                  </>
                )}
              </>
            ) : (
              <span className="w-12 h-4 inline-block" />
            )}
          </button>

          {/* Menú Desplegable de Estilos de Fondo */}
          <div className="relative">
            <button
              onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
              className="flex items-center gap-2 rounded-full border border-black/20 dark:border-copper/20 bg-black/5 dark:bg-canvas/40 px-3 py-1.5 font-mono text-xs text-black dark:text-ink hover:border-copper transition-colors cursor-pointer"
            >
              <span>Fondo: {themes.find((t) => t.id === bgType)?.icon}</span>
            </button>

            {/* Menú Desplegable: En Modo Claro es Caja Negra con Letras Blancas y viceversa */}
            {isThemeMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-2xl border border-black/10 dark:border-black/20 bg-black text-white dark:bg-white dark:text-black p-2 shadow-2xl backdrop-blur-md z-50">
                <p className="px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  Estilo de fondo
                </p>
                {themes.map((themeItem) => (
                  <button
                    key={themeItem.id}
                    onClick={() => {
                      setBgType(themeItem.id as any);
                      setIsThemeMenuOpen(false);
                    }}
                    className={`flex w-full items-center gap-2 rounded-xl px-3 py-2 font-mono text-xs transition-colors ${
                      bgType === themeItem.id
                        ? "bg-copper text-white font-semibold"
                        : "text-zinc-200 dark:text-zinc-800 hover:bg-zinc-800 dark:hover:bg-zinc-100"
                    }`}
                  >
                    <span>{themeItem.icon}</span>
                    <span>{themeItem.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Botón Móvil */}
        <button 
          onClick={toggleTheme} 
          aria-label="Cambiar tema"
          className="md:hidden flex items-center justify-center p-2 rounded-full border border-black/20 dark:border-copper/20 text-black dark:text-ink"
        >
          {mounted && isDark ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>

      </div>
    </header>
  );
}