/** @type {import('tailwindcss').Config} */
const flowbite = require('flowbite-react/tailwind');
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: '#664545',
        secondary: '#CDB0A9',
        third: '#93BB9E',
        fourth: '#E68E8E',
        fifth: '#E8E1E1',
      },
    },
  },
  plugins: [flowbite.plugin()],
};
