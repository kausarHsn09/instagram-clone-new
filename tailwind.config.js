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
        'white': 'FFFFFF',
      }
    },
  },
  plugins: [],
}