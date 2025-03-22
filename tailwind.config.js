/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-in forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'width': 'width 1.5s ease-out forwards',
        'tilt': 'tilt 10s infinite linear',
        'bounce': 'bounce 2s infinite'
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
            opacity: '0.3'
          },
          '50%': {
            transform: 'translateY(-20px)',
            opacity: '0.8'
          }
        },
        fadeIn: {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        width: {
          '0%': {
            width: '0',
            opacity: '0'
          },
          '100%': {
            width: '100%',
            opacity: '1'
          }
        },
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg) scale(1)'
          },
          '25%': {
            transform: 'rotate(1deg) scale(1.02)'
          },
          '75%': {
            transform: 'rotate(-1deg) scale(0.98)'
          }
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          }
        }
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 