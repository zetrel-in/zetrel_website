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
        },
        'digonal':{
          '0% , 100%':{transform:'translateX(10px)',transform:'translateY(10px)'},
          '50%':{transform:'translateX(0)',trasnform:'translateY(0)'}
        }
      },
      animation:{
        'digonal':'digonal 1.5s ease-in-out infinite'
      },
      colors: {
        logoblue1: "#69b7f9",
        logoblue2: "#42a5f6",
        logoblue3: "#093476",
        cardbg: "#1F2937",
        bgblack:"#171717"
      },
      fontFamily:{
        kanit:['kanit']
      },
      backgroundImage: {
        futuregame:"url('Images/blogs_image/future_of_gaming.jpg')",
        moonbg: "url('Images/Designer (17)-comp.png')",
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
