/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './public/index.html',
      './src/**/*.{js,jsx}',
    ],
    theme: {
      extend: {
        /* ← put every brand color, font-size, etc. here */
        colors: {
          primary: '#12245e',   // blue you used for text & buttons
          secondary: '#f8f8ff', // light background if you need it
        },
      },
    },
    plugins: [],
  };
  