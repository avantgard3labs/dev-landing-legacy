/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      nav: "#2B2940",
      card1: "#383356",
      card2: "#252934",
      card3: "#403D80",
      white: colors.white,
      red: "#F55050",
      alphablack: "#0000007A",
      gray: "background: #EDEEEF99",
    },
    extend: {
      keyframes: {
        fade: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        fade: "fade 0.8s ease-in-out",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      backgroundImage: {
        "card-pattern": "url('/assets/cardBg.svg')",
      },
    },
  },
  plugins: [],
};
