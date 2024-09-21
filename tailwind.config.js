/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundColor: {
        'main-100': '#E7ECEC',
        'main-200': '#DDE4E4',
        'main-300': '#CED9D9',
        'main-400': '#C0D8D8',
        'main-500': '#0E8080'
      },
      colors: {
        'main-100': '#E7ECEC',
        'main-200': '#DDE4E4',
        'main-300': '#CED9D9',
        'main-400': '#C0D8D8',
        'main-500': '#0E8080',
        'overlay': 'rgba(0,0,0,0.5)'
      },
      keyframes: {
        'slide-right': {
          '0%': {
            '-webkit-transform': 'translateX(-500px);',
            transform: 'translateX(-500px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0);',
            transform: 'translateX(0);'
          }
        },
        'slide-left': {
          '0%': {
            '-webkit-transform': 'translateX(500px);',
            transform: 'translateX(500px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0);',
            transform: 'translateX(0);'
          }
        },
        'slide-left-2': {
          '0%': {
            '-webkit-transform': 'translateX(500px);',
            transform: 'translateX(500px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0);',
            transform: 'translateX(0);'
          }
        },
        'rotate-center': {
          '0%': {
            '-webkit-transform': 'rotate(0)',
            transform: 'rotate(0);'
          },
          '100%': {
            '-webkit-transform': 'rotate(360deg)',
            transform: 'rotate(360deg);'
          },
        },
        'rotate-center-pause': {
          '0%': {
            '-webkit-transform': 'rotate(0)',
            transform: 'rotate(0);',
            'border-radius': 99999
          },
          '100%': {
            '-webkit-transform': 'rotate(360deg)',
            transform: 'rotate(360deg);',
          }
        },
        'scale-up-center': {
          '0%': {
            '-webkit-transform': 'scale(0)',
            transform: 'scale(1);',
          },
          '100%': {
            '-webkit-transform': 'scale(1)',
            transform: 'scale(1.1);',
          }
        },
      },
      animation: {
        'slide-right': 'slide-right 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'slide-left': 'slide-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'slide-left-2': 'slide-left-2 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'rotate-center': 'rotate-center 10s linear infinite;',
        'rotate-center-pause': 'rotate-center-pause 0.5s linear 1 both;',
        'scale-up-center': 'scale-up-center 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;'
      },
      flex: {
        '3': '3 3 0%',
        '4': '4 4 0%',
        '6': '6 6 0%',
        '7': '7 7 0%'
      },
    },
  },
  plugins: [],
}
