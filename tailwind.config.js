/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}"],
  theme: {
    extend: {
      colors:{
        'primary' : '#22252d', 
        'secondary': '#292d36', 
        'operators' : '#f56b6a', 
        'numbers' : '#fefefe',
        'functions' : '#25d7bf'
      }, 
      fontFamily:{
        'display' : "'Roboto', sans-serif"
      },
      dropShadow: {
        '4xl': '0px 16px 10px #000000'
      }
    },

  },
  plugins: [],
}
