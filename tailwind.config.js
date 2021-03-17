module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      stroke: ["hover"],
      height: {
        "60vh": "60vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
