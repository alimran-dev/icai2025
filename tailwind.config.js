/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary: {
        //   50: "#f0f9ff",
        //   100: "#e0f2fe",
        //   200: "#bae6fd",
        //   300: "#7dd3fc",
        //   400: "#38bdf8",
        //   500: "#0ea5e9",
        //   600: "#0284c7",
        //   700: "#0369a1",
        //   800: "#075985",
        //   900: "#0c4a6e",
        //   950: "#082f49",
        // },
        primary: {
          50: "#D4F0ED",
          100: "#C5EAE6",
          200: "#A7E0DA",
          300: "#89D5CD",
          400: "#6BCAC0",
          500: "#43BAAE",
          600: "#349187",
          700: "#256861",
          800: "#163E3A",
          900: "#081514",
          950: "#000000"
        },
        secondary: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
