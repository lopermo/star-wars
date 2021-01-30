const colors = require('tailwindcss/colors')
module.exports = {
  important: true,
  darkMode: 'class',
  purge: [],
  theme: {
    container: {
      padding: {
        DEFAULT: '2rem',
        sm: '3rem',
        lg: '0rem',
        xl: '0rem',
        '2xl': '0rem'
      }
    },
    extend: {
      borderWidth: {
        3: '3px'
      },
      colors: {
        darth: {
          DEFAULT: '#a6242c',
          red: '#a6242c',
          dark: '#472121',
          bg: '#4c3a3b'
        },
        jedi: {
          DEFAULT: '#123d5c',
          blue: '#123d5c',
          dark: '#526681',
          bg: '#849ea9'
        },
        gray: colors.coolGray,
        blue: colors.lightBlue,
        red: colors.rose,
        pink: colors.fuchsia
      }
    }
  },
  variants: {
    extend: {
      rotate: ['group-hover']
    }
  },
  plugins: []
}
