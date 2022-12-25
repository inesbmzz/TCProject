/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '55': '3.5%',
        '100': '1%'
      }
    },
  },
  plugins: [],
}