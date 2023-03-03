/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    values: {
      "100px": "100px",
    },
    flexGrow: {
      2: '2'
    },

    colors: {
     "secondary":"#D6763C",
     "white":"#ffffff", 
     "grey": "#555555",
     "blue":"#024E82",
     "black":"#1D1D1D",
     "dark":"#000000",
     "lightGrey":"#FBFBFB",
     "divider":"#E8E8E8",
     "darktext":"#3A3939"
     
    },

    fontFamily: {
      display: ["lato"],
    },

    backgroundImage: {
      heroImage: ["url(`./Assets/hero.png`)"],
    },
    extend: {},
  },
  plugins: [],
};