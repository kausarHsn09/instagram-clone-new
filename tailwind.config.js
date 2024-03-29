/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
      },
      colors:{
        'grey': '#DBDBDB',
        'black':'#000000',
        'white': '#FFFFFF',
        'blue' :'#1799F6',
         'dkhover':'rgba(248, 248, 248, 0.136)'
      }
    },
  },
  plugins: [],
}