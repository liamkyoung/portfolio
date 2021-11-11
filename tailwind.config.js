module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        portfolio: {
          DEFAULT: '#181818',
          subtitle: '#767676',
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
      monsterrat: "'Montserrat', 'sans-serif'",
      notable: "'Notable', 'sans-serif'",
      paytone: "'Paytone One', 'sans-serif'",
      reem: "'Reem Kufi', 'sans-serif'"
    },
    minHeight: {
      '0': '0',
      '1/4': '25vh',
      '1/2': '50vh',
      '3/4': '75vh'
    },
    width: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
