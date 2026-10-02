/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        emerald: {
          200: '#b4ffd8',
          300: '#73f7b3',
          400: '#39d98a',
        },
      },
    },
  },
  plugins: [],
};
