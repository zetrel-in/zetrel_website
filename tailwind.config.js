/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.html',
  ],
  theme: {
    extend: {
      animation: {
        'loop-scroll': 'loop-scroll 20s linear infinite', // Adjusted duration for smoother scrolling
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
        // gridimg: "url('Images/Designer (18).png')",
        smokeimg: "url('Images/Designer (20).png')",
        contactbg: "url('Images/illustration/Fluktuasi Suara.svg')",
        joystick: "url('Images/joystick.png')",
        gdcimg: "url('Images/GDC.png')",
        mazeximg: "url('Images/Mazex logo.png')",
      },

    },
  },
  plugins: [],
}
