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
          dark: "#526F83",
          deep: "#F8FAFC",
          slate: "#F5F7FA",
          light: "#F8FAFC",
          card: "#FFFFFF",
          ink: "#3F5870",
          muted: "#7C8FA1",
          orange: "#F4A640",
          orangeHover: "#FFAA3D"
        }
      },
      fontFamily: {
        sans: ["Montserrat", "Inter", "Poppins", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(63, 88, 112, 0.12)",
        dark: "0 22px 70px rgba(63, 88, 112, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
