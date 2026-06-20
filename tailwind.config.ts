import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary — Dark Navy
        clay: {
          DEFAULT: "#1B2A4A",
          dark: "#0F1C33",
          light: "#2D4070",
          "50": "#EEF1F7",
          "100": "#D4DCF0",
          "200": "#AAB9E0",
          "300": "#7F96D1",
          "400": "#5474C1",
          "500": "#2D4070",
          "600": "#1B2A4A",
          "700": "#0F1C33",
          "800": "#090F1C",
          "900": "#04070E",
        },
        // Accent — Chrome Silver
        sage: {
          DEFAULT: "#8A9BB4",
          dark: "#6B7E99",
          light: "#B0BFCF",
        },
        gold: {
          DEFAULT: "#C0C8D4",
          dark: "#8A9BB4",
          light: "#D8E0E8",
        },
        // Neutrals
        espresso: "#0F1C33",
        cocoa: "#2D4070",
        mocha: "#6B7E99",
        adobe: "#C0C8D4",
        cream: "#F5F7FA",
        sand: "#E8EDF4",
      },
      backgroundImage: {
        "clay-gradient": "linear-gradient(135deg, #1B2A4A 0%, #2D4070 100%)",
        "warm-radial":
          "radial-gradient(ellipse 80% 60% at 50% 0%, #E8EDF4 0%, #F5F7FA 100%)",
        "gold-gradient": "linear-gradient(135deg, #8A9BB4 0%, #C0C8D4 100%)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 8px rgba(27,42,74,0.07), 0 1px 2px rgba(27,42,74,0.05)",
        "card-hover": "0 8px 24px rgba(27,42,74,0.13), 0 2px 6px rgba(27,42,74,0.08)",
        "warm-lg": "0 16px 48px rgba(27,42,74,0.16), 0 4px 12px rgba(27,42,74,0.10)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
