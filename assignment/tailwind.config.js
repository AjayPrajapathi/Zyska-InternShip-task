/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customRed:'#E63F3A',
        customBlack:'#475467',
         darkBlack:'#101828'

        
      }
    },
  },
  plugins: [],
}

