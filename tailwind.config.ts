import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "rgb(var(--canvas-rgb) / <alpha-value>)",
          alt: "rgb(var(--canvas-alt-rgb) / <alpha-value>)",
        },
        ink: {
          DEFAULT: "rgb(var(--ink-rgb) / <alpha-value>)",
          muted: "rgb(var(--ink-muted-rgb) / <alpha-value>)",
        },
        copper: {
          DEFAULT: "#C6803D",
          soft: "#E0A868",
        },
        trace: {
          DEFAULT: "#4FBCB0",
          soft: "#8CD6CD",
        },
        line: {
          DEFAULT: "rgb(var(--line-rgb) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        modern: ["var(--font-modern)", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
      backgroundImage: {
        grid: "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
    },
  },
  plugins: [],
};

export default config;