import type { Metadata } from "next";
import { headers } from "next/headers";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { BackgroundProvider } from "@/components/BackgroundManager";
import { Navbar } from "@/components/Header";
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Nonce generado por middleware.ts para esta petición (ver Content-Security-Policy).
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} ${modern.variable} relative min-h-screen font-body bg-canvas text-ink antialiased transition-colors duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} nonce={nonce}>
          <BackgroundProvider>
            {/* Menú de navegación flotante superior */}
            <Navbar />

            <main className="pt-24 sm:pt-28">
              {children}
            </main>
          </BackgroundProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}