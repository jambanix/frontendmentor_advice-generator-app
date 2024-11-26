/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0px 0px 32px 3px rgba(82, 255, 168, 0.5);"
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