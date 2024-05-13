/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  scrollBehavior: {
    smooth: 'smooth',
  },
  darkMode:"selector",
  theme: {
    fontFamily:{
      'navContent' : ['Poppins', 'sans-serif'],
      'heroCotent' : ['Raleway', 'sans-serif'],
    },
  
 
    extend: {
      animation: {
        clipTextMove: 'clipTextMove 2s linear infinite',
        amazingBannerMove: 'amazingBannerMove 10s linear infinite',
      },
      keyframes: {
        clipTextMove: {
          '0%': { backgroundPosition: '0' },
          '100%': { backgroundPosition: '-200%'  },
        },
        amazingBannerMove: {
          '0%': {transform: `translateX(0%)`, opacity: '1'},
          '16%': {transform: `translateX(0%)`, opacity: '1'},
          '58%': {transform: `translateX(-100%)`, opacity: '0'},
          '59%': {transform: `translateX(100%)`, opacity: '0'},
          
          '100%': {transform: `translateX(0%)`,opacity: '1'},
        }
      }

    },
  },
  plugins: [],
}

