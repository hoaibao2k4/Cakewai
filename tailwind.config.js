/** @type {import('tailwindcss').Config} */
const flowbite = require('flowbite-react/tailwind');
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: '#664545',
        secondary: '#CDB0A9',
      },
    },
  },
  plugins: [flowbite.plugin()],
};
