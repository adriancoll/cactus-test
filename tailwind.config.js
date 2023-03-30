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
        fadeIn: 'fadeIn 250ms ease-out',
        fadeInLeft: 'fadeInLeft 1s ease-out',
        fadeInScale: 'fadeInScale 250ms cubic-bezier(.17,.67,.83,.67)'
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        fadeInScale: {
          '0%': {
            opacity: '0',
            transform: 'scale(0)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        }
      }
    }
  },
  variants: {},
  plugins: []
}
