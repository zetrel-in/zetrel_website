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
        'logo-blue1': "#69b7f9",
        'logo-blue2': "#42a5f6",
        'logo-blue3': "#093476",
      },
    },
  },
  plugins: [],
}
