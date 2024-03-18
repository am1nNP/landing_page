/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      padding:{
        '2size': '15px 10px'
      },
      rotate: {
        '30': '30deg',
        '60': '60deg',
    },
    fontFamily:{
      'iransans': 'Iranian Sans'                        
    },
  },
},
  plugins: [
    require('tailwindcss-3d')({ legacy: true }),
  ],
}