import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0b241c",
          50: "#eef4f1",
          100: "#d3e3db",
          200: "#a7c7b8",
          300: "#7aab94",
          400: "#4f8f71",
          500: "#2f6b4f",
          600: "#1c4a37",
          700: "#153a2b",
          800: "#0f2f24",
          900: "#0b241c",
          950: "#071813",
        },
        gold: {
          DEFAULT: "#c8a24d",
          50: "#fbf6ea",
          100: "#f4e7c6",
          200: "#ead7a1",
          300: "#dfc47a",
          400: "#d4b35c",
          500: "#c8a24d",
          600: "#ac8539",
          700: "#8a692c",
          800: "#6a5122",
          900: "#4b3818",
        },
        cream: {
          DEFAULT: "#f8f2e6",
          50: "#fefcf8",
          100: "#f8f2e6",
          200: "#f0e6cf",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 30px -12px rgba(11, 36, 28, 0.25)",
        card: "0 2px 12px -2px rgba(11, 36, 28, 0.12)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
