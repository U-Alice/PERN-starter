/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'darkb': "#022140",
        'blue': 'rgb(210, 233, 255, 45%)',
        'gray': '#C0C0C0'
      }, 
      fontFamily:{
        'quicksand': ['Quicksand', 'sans']
      }
    },
  },
  plugins: [],
}

