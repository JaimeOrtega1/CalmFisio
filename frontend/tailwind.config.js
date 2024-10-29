/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#845EC2",
        yellowColor: "#FEB60D",
        purpleColor: "#AF13F2",
        irisBlueColor: "#4cc2d4", 
        headingColor: "#181A1E",
        textColor: "#000000",
        grayColor: "#D5CABD"
      },

      boxShadow: {
        panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;",
      },

    },
  },
  plugins: [],
}

