/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      colors: {
        "primary-red": '#F5167E',
        "primary-black": '#242565',
        "primary-blue": '#242565',
        "secondary-blue": '#3D37F1',
        "primary-gray": '#6A6A6A',
        "primary-muted": '#F2F4FF',

      }
    },
  },
  plugins: [],
}

