/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '450px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '769px',
      // => @media (min-width: 768px) { ... }

      'lg': '1025px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl' : '1700px'
    },
    extend: {     
       animation: {
      wiggle: 'wiggle 1s ease-in-out 1',
      pulses :'pulses 0.6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      pulses_ :'pulses_ 0.6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      spins: 'spins 10s linear infinite',
      move: 'move 3s ease-in-out infinite'
    }
,
      keyframes: {
        wiggle: {
          '10%, 90%': {
            transform: 'translate3d(-1px, 0, 0)'
          }
          ,
          
          '20%, 80%' :{
            transform: 'translate3d(2px, 0, 0)'
          }
        ,
          '30%  ,50%, 70%' :{
            transform: 'translate3d(-4px, 0, 0)'
          }
        ,
          '40%, 60%' : {
            transform: 'translate3d(4px, 0, 0)'
          }
        },
        pulses: {
          '0%, 100%' :{
            opacity: 1
          },
          '50%' :{
            opacity: .5
          }
        }
        ,
        pulses_: {
          '0%, 100%' :{
            opacity: .5
          },
          '50%' :{
            opacity: 1
          }
        },
        spins :{
          from :{
            'transform': 'rotate(0deg)'
          },
          'to' :{
            'transform': 'rotate(360deg)'
          }
        },
        move:{
          '0%, 100%':{
            'transform': 'translate3d(0px, 0, 0)'
          },
          '50%':{
            'transform': 'translate3d(60px, 0, 0)'
          }
        }
        
      },

    },
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
      ligth_dark : "#1F2533",
      gray : "#AEAEBD",
      cream : "#FEBF35",
      black : "#000000",
      l_dark : "#181F2A",
      blood_r : "#09090B",
      dak: "#0D131B",
      blood: "#090E16",
      about: "#10171F"
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
