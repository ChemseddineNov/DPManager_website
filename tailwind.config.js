/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          900: '#1F3B73',
        },
        violet: {
          600: '#6C5CE7',
          700: '#5A4BCF',
        },
        gray: {
          50: '#F5F6FA',
        },
        green: {
          500: '#4CD137',
          600: '#44BD32',
        },
        red: {
          600: '#E84118',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};