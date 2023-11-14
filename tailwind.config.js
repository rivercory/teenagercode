/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#94D82D',
        'secondary': '#C0EB75'
      }
    },
  },
  plugins: [require("daisyui")],
}