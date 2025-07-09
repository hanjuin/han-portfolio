/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      dropShadow: {
        'red': '0 4px 3px rgba(255, 0, 0, 0.4)',
        'custom-blue': '2px 4px 6px rgba(0, 0, 255, 0.5)',
        'white' : '0 4px 6px rgba(255, 255, 255, 0.1)',
      }
    },
  },
  plugins: [],
}