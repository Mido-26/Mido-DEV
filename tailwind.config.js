/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slideIn: 'slideIn 1s ease-out',
        fadeIn: 'fadeIn 1.5s ease-in',
        gradientText: 'gradientText 2s linear infinite',
        bounceIn: 'bounceIn 0.8s ease-out',
        zoomIn: 'zoomIn 1s ease-out',
      },
      keyframes: {
        slideIn: {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: 0
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1
          },
        },
        fadeIn: {
          '0%': {
            opacity: 0
          },
          '100%': {
            opacity: 1
          },
        },
        gradientText: {
          '0%': {
            backgroundPosition: '0% 50%'
          },
          '50%': {
            backgroundPosition: '100% 50%'
          },
          '100%': {
            backgroundPosition: '0% 50%'
          },
        },
        bounceIn: {
          '0%': {
            transform: 'scale(0.8)',
            opacity: 0
          },
          '50%': {
            transform: 'scale(1.05)',
            opacity: 0.5
          },
          '100%': {
            transform: 'scale(1)',
            opacity: 1
          },
        },
        zoomIn: {
          '0%': {
            transform: 'scale(0.8)',
            opacity: 0
          },
          '100%': {
            transform: 'scale(1)',
            opacity: 1
          },
        },
      },
    },
  },
  plugins: [],
}