/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D56A8',
        secondary: '#EAEEF6',
        black: '#000000',
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ["Inter", 'sans-serif'],
      },
    },
  },
  plugins: [],
};

