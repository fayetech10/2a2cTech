/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['SF Pro Display', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        sans: ['SF Pro Text', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        dark: {
          950: '#0b0b0c',
          900: '#1d1d1f',
          800: '#2b2b2f',
          700: '#424245',
        },
        primary: {
          DEFAULT: '#0071e3',
          50: '#eef7ff',
          100: '#d9ecff',
          200: '#bddfff',
          300: '#8cc7ff',
          400: '#51a8ff',
          500: '#2488ff',
          600: '#0071e3',
          700: '#005bb5',
        },
        accent: {
          DEFAULT: '#5ac8fa',
          400: '#81d9ff',
          500: '#5ac8fa',
        },
      },
      boxShadow: {
        glow: '0 22px 70px -32px rgba(0, 113, 227, 0.38)',
        glass: '0 18px 48px -28px rgba(15, 23, 42, 0.12)',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out 2s infinite',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
