/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#ffff",
        secondary: "#000",
        tertiary: "#41474d",
        "black-100": "#41474d",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "blue-100": "rgb(36, 240, 240)",
        "yellow-100" : "#f7c860",
        "red-100" : "#d65c6e",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
