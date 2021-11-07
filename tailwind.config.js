const { urlObjectKeys } = require("next/dist/shared/lib/utils");

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        portfolio: {
          DEFAULT: '#181818',
          gray: '#0E2431',
          pink: '#852F42',
          red: '#FC3A52',
          orange: '#FB764D',
          yellow: '#F9B248',
          ivory: '#E8D5B7'
        }
      },
      backgroundImage: {
        'hero-pattern': "url('/public/bg.svg')"
      }
    },
    fontFamily: {
      display: ['Monsterrat']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
