/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      padding:{
        '2size': '15px 10px'
      }
    },
    fontFamily:{
      'iransans': 'Iranian Sans'                        
    },
  },
  plugins: [],
}