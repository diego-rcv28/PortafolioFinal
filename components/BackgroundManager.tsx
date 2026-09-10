"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type BackgroundType = "grid" | "aurora" | "nodes";

interface BackgroundContextType {
  bgType: BackgroundType;
  setBgType: (type: BackgroundType) => void;
}

const BackgroundContext = createContext<BackgroundContextType>({
  bgType: "grid",
  setBgType: () => {},
});

export const useBackground = () => useContext(BackgroundContext);

export function BackgroundProvider({ children }: { children: ReactNode }) {
  const [bgType, setBgType] = useState<BackgroundType>("grid");

  return (
    <BackgroundContext.Provider value={{ bgType, setBgType }}>
      {/* Fondo Dinámico según Selección */}
      {bgType === "grid" && (
        <div 
          className="pointer-events-none fixed inset-0 -z-10 h-full w-full bg-grid-pattern transition-opacity duration-500" 
          aria-hidden="true" 
        />
      )}

      {bgType === "aurora" && (
        <div className="pointer-events-none fixed inset-0 -z-10 h-full w-full overflow-hidden bg-canvas transition-opacity duration-500">
          <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-copper/20 blur-[120px] animate-pulse" />
          <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-trace/20 blur-[140px] animate-pulse [animation-delay:2s]" />
          <div className="absolute -bottom-40 left-1/3 h-[500px] w-[500px] rounded-full bg-purple-600/15 blur-[120px] animate-pulse [animation-delay:4s]" />
        </div>
      )}

      {bgType === "nodes" && (
        <div className="pointer-events-none fixed inset-0 -z-10 h-full w-full bg-canvas transition-opacity duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--line-rgb)_1px,_transparent_1px)] bg-[size:24px_24px] opacity-40" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-copper/10 blur-[100px] animate-bounce [animation-duration:10s]" />
        </div>
      )}

      {children}
    </BackgroundContext.Provider>
  );
}