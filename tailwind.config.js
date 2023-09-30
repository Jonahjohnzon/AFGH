/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'barlow' : ['Barlow', 'san-serif'],
      'berlin' : ['Berlin' , 'san-serif']
    },
    colors: {
      white : 'white',
      green : '#00FF7B',
      transparent : 'transparent',
      dark : '#121924',
      backgd_dark: "#0B0E13",
      ligth_dark : "#171F28",
      gray : "#938F8B",
      cream : "#FEBF35"
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
