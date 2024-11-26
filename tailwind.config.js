/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        "3000": "3000ms"
      },
      keyframes: {
        loadIn: {
          from: {bottom: "-96px"},
          to: {bottom: "-32px"}
        },
      },
      animation: {
        loadIn: "loadIn 3s linear"
      }
    },
    colors: {
      "dark-blue": "#202733",
      "dark-grayish-blue": "#313A48",
      "grayish-blue": "#4F5D74",
      "light-cyan": "#CEE3E9",
      "neon-green": "#53FFAA"
    }
  },
  plugins: [],
}