/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          50:  '#f0faf3',
          100: '#d9f2e0',
          200: '#b3e4c2',
          300: '#7ccf98',
          400: '#44b46a',
          500: '#2E9E4F',
          600: '#1F7A3F',
          700: '#185f32',
          800: '#174d2b',
          900: '#143f25',
        },
        orange: {
          50:  '#fff8ed',
          100: '#ffefd3',
          200: '#ffdba6',
          300: '#ffbf6d',
          400: '#FF9E2C',
          500: '#f97a0a',
          600: '#ea5d04',
          700: '#c24306',
          800: '#9a360d',
          900: '#7c2e0e',
        },
        leaf: '#2E9E4F',
        mango: '#FF9E2C',
        forest: '#1F7A3F',
      },
      fontFamily: {
        display: ['"Outfit"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        card: '0 4px 24px -4px rgba(31, 122, 63, 0.15)',
        'card-hover': '0 12px 40px -8px rgba(31, 122, 63, 0.3)',
        mango: '0 4px 24px -4px rgba(255, 158, 44, 0.3)',
      },
      backgroundImage: {
        'gradient-green': 'linear-gradient(135deg, #1F7A3F 0%, #2E9E4F 50%, #44b46a 100%)',
        'gradient-orange': 'linear-gradient(135deg, #FF9E2C 0%, #f97a0a 100%)',
        'gradient-hero': 'linear-gradient(135deg, rgba(31,122,63,0.95) 0%, rgba(46,158,79,0.85) 60%, rgba(255,158,44,0.3) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'fade-up': 'fadeUp 0.6s ease-out both',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
