/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C9962B',
        secondary: '#8B6914',
        cream: '#FFF8E7',
        brown: {
          700: '#5C4A2B',
          800: '#4A3A1F',
          900: '#3A2F18',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
