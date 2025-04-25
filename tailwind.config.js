/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{js,jsx}',      // make sure tailwind can scan your components
  ],
  theme: {
    extend: {
      colors: {
        'cl-cream':  '#fffaeb',
        'cl-ink':    '#1C1B16',
        'cl-orange': '#ff7f3f',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['"Playfair Display"', 'ui-serif', 'Georgia'],
      },
    },
  },
  plugins: [],
};

  
