/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-pulse': 'spin 40s linear infinite',
      },
    },
  },
  plugins: [],
};
