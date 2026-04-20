/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#050505',
          dark: '#0a0a0a',
          card: '#0f0f0f',
          accent: '#3b82f6',
          'accent-dark': '#2563eb',
          'accent-light': '#60a5fa',
          warm: '#f59e0b',
          violet: '#8b5cf6',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        'marquee-slow': 'marquee 50s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
