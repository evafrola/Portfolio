/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'violetaClaro' : '#aea4bf',
        'marronOscuro' : '#3b252c',
        'marronTransparencia' : '#3b252c9a',
        'silverClaro' : '#e3e4db',
        'violetaOscuro' : '#8f6593',
        'purpuraClaro' : '#D8B4FE',
        'silverOscuro' : '#cdcdcd',
        'violetaTransparencia' : '#aea4bfde',
        'rojo' : '#92140c',
        'azul' : '#29339b',
        'blanco' : '#fffbfc'
      },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('@tailwindcss/forms'),
  ],
}

