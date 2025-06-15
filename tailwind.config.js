/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // You are toggling this via JS
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        gold: "#D4AF37",
      },
    },
  },
  plugins: [],
};
