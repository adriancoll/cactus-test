module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#948e89'
      },
      backgroundImage: {
        base: "url('/images/base.jpeg')"
      },
      animation: {
        fadeInLeft: 'fadeInLeft 1s ease-out'
      },
      keyframes: {
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        }
      }
    }
  },
  variants: {},
  plugins: []
}
