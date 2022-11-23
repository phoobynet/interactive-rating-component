/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#262E38',
        'very-dark-blue': '#131518',
        'light-grey': '#969FAD',
        'medium-grey': '#7C8798',
        orange: '#FC7614',
        'black-gradient-start': '#232A34',
        'black-gradient-end': '#181E27',
      },
      fontSize: {
        'heading-lg': [
          '1.75rem',
          {
            letterSpacing: '0rem',
            lineHeight: 'auto',
            paragraphSpacing: '0.063rem',
          },
        ],
        'heading-md': [
          '1rem',
          {
            letterSpacing: '0.125rem',
            lineHeight: 'auto',
            paragraphSpacing: '0.063rem',
          },
        ],
        body: [
          '0.9375rem',
          {
            letterSpacing: '0rem',
            lineHeight: '1.5rem',
            paragraphSpacing: '0.063rem',
            fontWeight: '400',
          },
        ],
        rating: [
          '1.5rem',
          {
            lineHeight: '1.5rem',
            letterSpacing: '0.013rem',
            paragraphSpacing: '0.063rem',
          },
        ],
      },
    },
    fontFamily: {
      sans: ['Overpass', 'sans-serif'],
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}
