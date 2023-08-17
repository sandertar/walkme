const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    // app content
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    // include packages if not transpiling
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: '#fff',
      red: colors.red,
      green: colors.green,
      primary: {
        50: '#fef5ee',
        100: '#fce7d8',
        200: '#f9ccaf',
        300: '#f4a87d',
        400: '#ef7948',
        500: '#eb5d2c',
        600: '#dc3f1a',
        700: '#b62e18',
        800: '#91261b',
        900: '#752219',
        950: '#3f0e0b',
      },
      secondary: {
        50: '#f1fcfa',
        100: '#d1f6f1',
        200: '#a3ece4',
        300: '#6edad2',
        400: '#40c1bc',
        500: '#26a6a3',
        600: '#1c8585',
        700: '#1b6a6a',
        800: '#1a5455',
        900: '#1a4647',
        950: '#09292b',
      },
    },
  },
  plugins: [],
};
