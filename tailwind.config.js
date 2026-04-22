/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        surface: "#0f172a",
        surfaceAlt: "#1e293b",
        borderSoft: "#334155",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(99, 102, 241, 0.25), 0 8px 30px rgba(15, 23, 42, 0.65)",
      },
    },
  },
  plugins: [],
};
