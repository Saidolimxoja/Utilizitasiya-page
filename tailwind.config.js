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
          olive: '#4D6A28',
          'olive-dark': '#384e1d',
          'olive-light': '#5d8031',
          leaf: '#48A02C',
          'leaf-light': '#68BA38',
          accent: '#75CE3E',
        },
        eco: {
          bg: '#F8FAF9',
          surface: '#F1F5F2',
          border: '#E2EBE5',
          dark: '#1E2922',
          slate: '#2C3A32',
          muted: '#63756C',
        }
      },
      boxShadow: {
        'levitate': '0 20px 50px -15px rgba(77, 106, 40, 0.16)',
        'levitate-hover': '0 25px 60px -10px rgba(77, 106, 40, 0.22)',
        'glow-leaf': '0 0 30px rgba(72, 160, 44, 0.25)',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
