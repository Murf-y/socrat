/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#EBEBEB',
        text: '#262626',
        gray: '#9E9E9E',
        lightgray: '#CECECE',
        // #677DB7 BLUE
      },

      animation: {
        wigglefade: 'wigglefade 10s ease-in-out infinite',
      },

      keyframes: {
        wigglefade: {
          '0%': { opacity: 0.2, transform: 'rotate(-10deg) translateX(-25%)' },
          '50%': { opacity: 0.75, transform: 'rotate(10deg) translateX(-20%)' },
          '100%': { opacity: 0.2, transform: 'rotate(-10deg) translateX(-25%)' },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'))
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]))

  addBase({
    ':root': newVars,
  })
}
