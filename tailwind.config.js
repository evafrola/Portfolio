/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'colorPrincipal' : '#aea4bf',
        'textoOscuro' : '#3b252c',
        'textoClaro' : '#e3e4db',
        'principalOscuro' : '#8f6593'
      },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

