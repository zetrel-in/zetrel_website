/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.html',
  ],
  theme: {
    extend: {
      animation: {
        'loop-scroll': 'loop-scroll 30s linear infinite', // Adjusted duration for smoother scrolling
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      colors: {
        logoblue1: "#69b7f9",
        logoblue2: "#42a5f6",
        logoblue3: "#093476",
      },
      backgroundImage: {
        moonbg: "url('Images/Designer (17).png')",
      },

    },
  },
  plugins: [],
}
