const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        xl: "8rem",
        "2xl": "14rem",
        "3xl": "20rem",
        "4xl": "20rem",
      },
    },
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1854px",
      "4xl": "2166px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        green: {
          500: "#43C185",
          600: "#32ad71",
          700: "#1c8e57",
        },
        primary: "#00d09c",
        secondary: "#11cfec",
      },
      spacing: {
        xxs: "14rem",
        "1/8": "12.5%",
        "1/6": "16.666%",
        132: "32rem",
        164: "40rem",
        196: "48rem",
        "1/2vw": "50vw",
        "1/4vw": "25vw",
        "1/3vw": "33.333vw",
        "2/3vw": "66.666vw",
        "3/4vw": "75vw",
        "1/2vh": "50vh",
        "1/4vh": "25vh",
        "1/3vh": "33.333vh",
        "2/3vh": "66.666vh",
        "3/4vh": "75vh",
      },
    },
  },
  plugins: [],
};
