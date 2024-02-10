/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        yellow: {
          DEFAULT: '#FFD700',
          dark: '#FFA500'
        },
        green: {
          DEFAULT: '#008000',
          dark: '#006400'
        },
        red: {
          DEFAULT: '#FF0000',
          dark: '#B22222'
        }
      }
    }
  },
  plugins: []
}
