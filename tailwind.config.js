
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-gradient': 'linear-gradient(90deg, rgb(254, 249, 236) 0%, 41.1932%, rgb(250, 237, 232) 82.3864%, 91.1932%, rgb(233, 246, 234) 100%)',

        'shop-gradient': 'linear-gradient(90.62deg, rgba(71, 205, 109, 0.63) -152.17%, rgba(240, 93, 54, 0.53) 9.16%, rgba(252, 215, 118, 0.6) 43.83%)',
        'circle-bg': 'linear-gradient(178.51deg, rgba(255, 255, 255, 0.55) 10.42%, rgba(71, 205, 109, 0.55) 160.91%)',
      },

      colors: {
        primary: "#777777",
        secondary: '#47CD6D',
        subHeading: '#443B3D',
        cardBg: "#F3F6F5",
        btnBg: "#FF5F2C",
        btn2Bg:"#1C1B1E",
        starBg: "#FC8F1A",
        arrowBg:"rgba(255, 95, 44, 0.19)",
        footerBg: '#1AAD83',
        shopText: '#565656',
        arrowBg2: '#FF5F2C',
      },
      fontFamily: {
        poppins: ["Poppins"]
      }
    },
  },
  plugins: [
  ],
};
