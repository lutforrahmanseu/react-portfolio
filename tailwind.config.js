/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        dash: {
          to: { strokeDashoffset: '0' }
        },
        check: {
          '0%': { strokeDasharray: '0,100' },
          '100%': { strokeDasharray: '100,100' }
        }
      },
      animation: {
        blink: 'blink 1s step-end infinite',
         dash: 'dash 1.5s ease-in-out forwards',
        check: 'check 0.5s ease-in-out forwards 1.5s'
      },
      colors: {
        dark: {
          bg: '#1a202c',
          text: '#f7fafc',
        },
        light: {
          bg: '#f7fafc',
          text: '#1a202c',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
