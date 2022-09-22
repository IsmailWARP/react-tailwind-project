/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'pink': '#F55A5A',
    },
    screens:{
      'lg': '1024px',
    },
    extend: {},
  },
  plugins: [],
}