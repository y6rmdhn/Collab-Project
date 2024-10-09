/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grayCustomNav: ['#F5F5F5'],
        whiteBg: ['#FFFFFF'],
      },     
      fontFamily: {
        helvetica: ['Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}