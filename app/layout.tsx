import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import content from "@/data/content.json";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const modern = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-modern",
});

export const metadata: Metadata = {
  title: `${content.profile.name} — ${content.profile.role}`,
  description: content.profile.tagline,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} ${modern.variable} relative min-h-screen font-body bg-canvas-light text-ink-light dark:bg-canvas dark:text-ink antialiased transition-colors duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {/* Capa fija de cuadrícula para todo el sitio */}
          <div 
            className="pointer-events-none fixed inset-0 -z-10 h-full w-full bg-grid-pattern" 
            aria-hidden="true" 
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}