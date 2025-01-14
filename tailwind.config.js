const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#ff8a00',
        success: '#00b207',
        info: '#17A2B8',
        warning: '#FFC107',
        danger: '#DC3545',
        light: '#F8F9FA',
        dark: '#343A40',
      },
    },
  },
  plugins: [
    require('daisyui'),
    flowbite.plugin(),
  ],
}