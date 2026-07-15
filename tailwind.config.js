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
          orange: '#ff6600',
          'orange-light': '#ff8c00',
          'orange-dark': '#cc5200',
          dark: '#0a0a0f',
          card: '#0f0f1a',
          border: '#1a1a2e',
          surface: '#111128',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}

