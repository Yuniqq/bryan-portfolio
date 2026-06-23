/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'persona-red': '#D6001C',
        'persona-red-dark': '#A8001A',
        'persona-red-light': '#FF1A35',
        'persona-black': '#0A0A0A',
        'persona-surface': '#121212',
        'persona-surface-2': '#1A1A1A',
        'persona-surface-3': '#222222',
        'persona-white': '#FFFFFF',
        'persona-gray': '#AAAAAA',
        'persona-gray-light': '#DDDDDD',
        'persona-yellow': '#FFD700',
      },
      fontFamily: {
        'bebas': ['"Bebas Neue"', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
        'mono': ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'slide-in-left': 'slideInLeft 0.6s ease forwards',
        'slide-in-right': 'slideInRight 0.6s ease forwards',
        'slide-in-up': 'slideInUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'diagonal-reveal': 'diagonalReveal 0.8s ease forwards',
        'pulse-red': 'pulseRed 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-60px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(60px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        diagonalReveal: {
          '0%': { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
          '100%': { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
        },
        pulseRed: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(214, 0, 28, 0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(214, 0, 28, 0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'diagonal-stripe': 'repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(214,0,28,0.05) 10px, rgba(214,0,28,0.05) 20px)',
        'red-glow': 'radial-gradient(ellipse at center, rgba(214,0,28,0.15) 0%, transparent 70%)',
      },
      screens: {
        'xs': '375px',
      },
      transitionTimingFunction: {
        'persona': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
