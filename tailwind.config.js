module.exports = {
  mode: 'jit',
  purge: [
    "**/*.html"
  ],

  darkMode: false, // or 'media' or 'class'
  theme: {
    screens:{
      1170:'1170px',
      1024:'1024px',
      768:'768px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
