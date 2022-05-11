/* eslint-disable */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Overpass'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
