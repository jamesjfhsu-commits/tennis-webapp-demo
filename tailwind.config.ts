import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#061522",
          900: "#0b2033",
          800: "#12314c",
        },
        tennis: {
          green: "#0f7a4f",
          blue: "#176b9b",
          yellow: "#d7ff43",
          clay: "#d96d2b",
          mint: "#e9fff4",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      boxShadow: {
        premium: "0 24px 80px rgba(6, 21, 34, 0.18)",
        court: "0 18px 50px rgba(15, 122, 79, 0.22)",
      },
      backgroundImage: {
        "court-lines":
          "linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        reveal: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        reveal: "reveal .65s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
