module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      dark: '#222831',
      darkblue: '#30475E',
      darkred: '#F05454',
      darkgray: '#DDDDDD',
      white: 'white',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
