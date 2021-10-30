module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              color: '#F05454',
            },
            h2: {
              color: '#F05454',
            },
            h3: {
              color: '#F05454',
            },
            p: {
              fontWeight: '400',
              lineHeight: '1.5em'
            },
            li: {
              marginTop: '0.15em',
              marginBottom: '0.15em',
              fontWeight: '400'
            }
          },
        },
      },
    },
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
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
