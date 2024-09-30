/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        // weights: bold 700 normal 400
        headers: [`var(--font-oswald)`],
        // default text, weights: light 300 semibold 600 bold 700 default: semibold 600
        sans: ['var(--font-nunito-sans)'],
        // weights: bold 700 normal 400
        poppins: ['var(--font-poppins)'],
        // weights: black 900 normal 400
        roboto: ['var(--font-roboto)'],
      },
      fontSize: {
        '10px': '10px',
        '11px': '11px',
        '12px': '12px',
        '14px': '14px',
        '16px': '16px',
        '18px': '18px',
        '24px': '24px',
        '26px': '26px',
        '28px': '28px',
        '32px': '32px',
        '38px': '38px',
      },
      backgroundImage: {
        'guide': "url('../public/Guide.png')",
        'hover-bg': "url('/BlueBirdIcon.svg')",
        'checked-bg': "url('/WhiteBirdIcon.svg')",
      },
      backgroundColor: {
        'customBlue': '#615EFF',
      },
      colors: {
        'custom-gray': '#74747C',
        'custom-blue': '#615EFF',
        'custom-green': '#0CC36B',
        'gradient-start': '#0CC36B',
        'gradient-end': '#615EFF',
      },
      screens: {
        'small': '350px',
        // => @media (min-width: 350px) { ... }
        'xsm': '420px',

        'xsx': '480px',

        'xlg': '540px',

        'sm': '640px',

        'md': '768px',

        'lg': '1024px',

        'xl': '1280px',

        '2xl': '1536px',

        'mlg': { 'max': '1023px' },
        // => @media (max-width: 1023px) { ... }
        'mmd': { 'max': '540px' },

        'mws': { 'max': '480px' },

        'msm': { 'max': '380px' },
      }
    },
  },
  plugins: [require("tw-elements/plugin.cjs")]
};
