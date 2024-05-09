/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs", "./public/script/**/*.js"],
  theme: {
    extend: {
      spacing: {
        '45%': '45%',
        '5%': '5%'
      },
      keyframes:{
        'trans-slide-right':{
          'animation-timing-function': 'cubic-bezier(0, 0.2, 0.2, 1)',
          '50%':{ transform: 'translateX(50%) translateZ(-225px) rotateY(45deg)'},
          '100%':{transform:'translateX(100%) rotateY(90deg)'}
        },
        'trans-slide-left':{
          'animation-timing-function': 'cubic-bezier(0, 0.2, 0.2, 1)',
          '50%':{ transform: 'translateX(-50%) translateZ(-225px) rotateY(-45deg)'},
          '100%':{transform:'translateX(-100%) rotateY(-90deg)'}
        },
        'fold-right':{
          '0%':{
            transform: 'translate3d(0, 0, 0) rotateY(0deg)'
          },
          '100%':{ 
            transform: 'translate3d(100%, 0, 0) rotateY(90deg)'
          }
        },
        'fold-left':{
          '0%':{
            transform: 'translate3d(0, 0, 0) rotateY(0deg)'
          },
          '100%':{ 
            transform: 'translate3d(-100%, 0, 0) rotateY(calc(90deg * -1))'
          }
        },
        'rotate-fall-right':{
          '0%':{ transform: 'rotateZ(0deg)'},
          '40%':{ transform: 'rotateZ(16deg)'},
          '60%':{ transform: 'rotateZ(calc(16deg - 2deg))'},
          '100%':{ transform: 'translateY(100%) rotateZ(calc(16deg * 2))'}
        },
        'rotate-fall-left':{
          '0%':{ transform: 'rotateZ(0deg)'},
          '40%':{ transform: 'rotateZ(calc(16deg * -1))'},
          '60%':{ transform: 'rotateZ(calc(16deg - 2deg) * -1)'},
          '100%':{ transform: 'translateY(100%) rotateZ(calc(16deg * -2))'}
        },
        'open-burger':{
          '0%':{transform: 'scale(0.9)'},
          '75%':{transform: 'scale(1)'}
        },
        'drop-in':{
          '0%':{ transform: 'rotate(-30deg) translateY(-100%)', opacity: 0},
          '100%':{ transform: 'rotate(0deg) translateY(0%)', opacity: 1}
        }
      },
      animation:{
        'trans-slide-right':'trans-slide-right 0.5s ease-in-out',
        'trans-slide-left':'trans-slide-left 0.5s ease-in-out',
        'open-burger': 'open-burger 0.5s ease-out',
        'rotate-fall-right': 'rotate-fall-right 0.5s ease-in-out',
        'rotate-fall-left': 'rotate-fall-left 0.5s ease-in-out',
        'fold-right': 'fold-right 0.5s ease-in-out',
        'fold-left': 'fold-left 0.5s ease-in-out',
        'drop-in': 'drop-in 0.5s ease-in-out'
      }
    },
  },
  plugins: [],
}