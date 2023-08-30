/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'],
        bebas: ['"Bebas Neue"'],
      },
      colors: {
        primary: '#16405B',
        blue: { 4: '#4DABF7', 5: '#339AF0', ...colors.green },
        neutral: {
          0: '#F8F9FA',
          5: '#ADB5BD',
          6: '#868E96',
          8: '#343A40',
          9: '#212529',
          ...colors.gray,
        },
        green: { 6: '#40C057', ...colors.green },
      },
      dropShadow: {
        'base-lg': [
          '0px 1px 2px rgba(16, 24, 40, 0.06)',
          '0px 1px 3px rgba(16, 24, 40, 0.10)',
        ],
      },
    },
  },
  plugins: [],
}
