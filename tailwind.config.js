/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#86C232",
          dark: "#61892F",
          light: "#A6E44A",
        },
        secondary: {
          DEFAULT: "#222629",
          light: "#474B4F",
          dark: "#1A1E21",
        },
        neutral: {
          DEFAULT: "#6B6E70",
          light: "#D9D9D9",
          dark: "#474B4F",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
