// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        spinY: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        spinX: {
          '0%': { transform: 'rotateX(0deg)' },
          '100%': { transform: 'rotateX(360deg)' },
        },
      },
      animation: {
        spinY: 'spinY 4s linear infinite',
        spinX: 'spinX 4s linear infinite',
      },
    },
  },
};