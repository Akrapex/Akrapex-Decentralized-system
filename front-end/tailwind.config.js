/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Grotesk: ["Space Grotesk", "san serif"],
        inter: ["'Inter'", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#0A0A23",
        },
        secondary: {
          DEFAULT: "#141F39",
        },
        tertiary: {
          DEFAULT: "#20B2AA",
        },
        light: {
          DEFAULT: "#FFFFFF99",
        },
      },
    },
  },
  plugins: [],
};