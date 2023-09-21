/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

const MyCustomClasses = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
    '.preserve-3d': {
      transformStyle: 'preserve-3d',
    },
    '.perspective': {
      perspective: '1000px',
    },
    '.backface-hidden': {
      perspective: 0,
      '-moz-backface-visibility': 'hidden',
      'backface-visibility': 'hidden',
    },
  });
});

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [MyCustomClasses],
}
