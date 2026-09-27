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
        // Primary - terracotta (was dark navy; token names kept)
        clay: {
          DEFAULT: "#8A3E1A",
          dark: "#6B2F13",
          light: "#B4552D",
          "50": "#FBF1EA",
          "100": "#F6DFD0",
          "200": "#EDC0A3",
          "300": "#E09A72",
          "400": "#CF7647",
          "500": "#B4552D",
          "600": "#8A3E1A",
          "700": "#6B2F13",
          "800": "#4F220D",
          "900": "#2E1408",
        },
        // Accent - warm steel (was chrome silver-blue)
        sage: {
          DEFAULT: "#A8A095",
          dark: "#78716C",
          light: "#D3CBC0",
        },
        gold: {
          DEFAULT: "#D98F2B",
          dark: "#B8741C",
          light: "#F0B458",
        },
        // Neutrals (warm)
        espresso: "#1C1410",
        cocoa: "#2E241E",
        mocha: "#6B625A",
        adobe: "#E0D6CA",
        cream: "#FBF8F3",
        sand: "#F3EEE6",
      },
      backgroundImage: {
        "clay-gradient": "linear-gradient(135deg, #8A3E1A 0%, #B4552D 100%)",
        "warm-radial":
          "radial-gradient(ellipse 80% 60% at 50% 0%, #F3EEE6 0%, #FBF8F3 100%)",
        "gold-gradient": "linear-gradient(135deg, #B8741C 0%, #D98F2B 100%)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 8px rgba(28,20,16,0.07), 0 1px 2px rgba(28,20,16,0.05)",
        "card-hover": "0 8px 24px rgba(28,20,16,0.13), 0 2px 6px rgba(28,20,16,0.08)",
        "warm-lg": "0 16px 48px rgba(28,20,16,0.16), 0 4px 12px rgba(28,20,16,0.10)",
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
