/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./node_modules/flowbite/**/*.js"
  ],
  fontFamily: {
    'body': 'Roboto, sans-serif',
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
