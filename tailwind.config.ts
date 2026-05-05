import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        resilium: {
          dark: "#2F3B4E",
          deep: "#354258",
          slate: "#44516A",
          light: "#F5F6F8",
          ink: "#303A4D",
          muted: "#5E6677",
          orange: "#FF7A00",
          orangeHover: "#E86F00"
        }
      },
      fontFamily: {
        sans: ["Montserrat", "Inter", "Poppins", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 60px rgba(31, 42, 59, 0.12)",
        dark: "0 22px 80px rgba(10, 18, 31, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
