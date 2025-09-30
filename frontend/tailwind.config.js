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
          DEFAULT: "#27516C",
        },
        secondary: {
          DEFAULT: "#000000",
        },
        tertiary: {
          DEFAULT: "#20B2AA",
        },
        light: {
          DEFAULT: "#FFFFFF99",
        },
        yellow: {
          DEFAULT: "#E5BD3E",
        },
      },
    },
  },
  plugins: [],
};