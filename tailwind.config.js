/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb', // blue-600
          hover: '#1d4ed8', // blue-700
        },
        accent: {
          DEFAULT: '#fbbf24', // yellow-400
          hover: '#f59e0b', // yellow-500
        }
      }
    },
  },
  plugins: [],
};