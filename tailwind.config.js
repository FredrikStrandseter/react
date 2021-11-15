module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color: {
        customGray: "#5c5454",
        customBlue: "",
        oppacity: "",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
