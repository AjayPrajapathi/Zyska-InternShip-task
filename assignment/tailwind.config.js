/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // screens: {
      //   sm: "375px",
      // },
      colors: {
        customRed: "#E63F3A",
        customBlack: "#475467",
        darkBlack: "#101828",
        bgColor: "#F9FAFB",
      },
    },
  },
  plugins: [],
};
