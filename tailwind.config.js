/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'colorPrincipal' : '#aea4bf',
        'textoOscuro' : '#3b252c'
      },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

