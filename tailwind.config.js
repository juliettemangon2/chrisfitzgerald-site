/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{js,jsx}',      // make sure tailwind can scan your components
  ],
  theme: {
    extend: {
      colors: {
        'cl-cream':  '#FAF8F2',
        'cl-ink':    '#1C1B16',
        'cl-orange': '#FF6C3F',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['"Playfair Display"', 'ui-serif', 'Georgia'],
      },
    },
  },
  plugins: [],
};

  
