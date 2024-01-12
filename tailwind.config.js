/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'violetaClaro' : '#aea4bf',
        'marronOscuro' : '#3b252c',
        'silverClaro' : '#e3e4db',
        'violetaOscuro' : '#8f6593',
        'purpuraClaro' : '#D8B4FE',
        'silverOscuro' : '#cdcdcd',
        'violetaTransparencia' : '#aea4bfde'
      },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

