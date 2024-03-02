/** @type {import('tailwindcss').Config} */
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
  plugins: [],
}
