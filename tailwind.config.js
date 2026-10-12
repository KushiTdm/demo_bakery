/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        terracotta: {
          50: '#FBF0EB',
          100: '#F5DDD2',
          200: '#EDC4B0',
          300: '#E5B299',
          400: '#D9A08B',
          500: '#C68468',
          600: '#A96A4F',
          700: '#8C5A3C',
          800: '#6B432E',
          900: '#4A2E20',
        },
        sage: {
          50: '#EEF7F4',
          100: '#D2E8E1',
          200: '#B5D5CC',
          300: '#A3C2B6',
          400: '#97C2B9',
          500: '#7DAE9F',
          600: '#5E9282',
          700: '#4A7668',
          800: '#395B50',
          900: '#294038',
        },
        oak: {
          50: '#F7EFE6',
          100: '#EBD9C4',
          200: '#D9BD9D',
          300: '#C49A6C',
          400: '#B0854F',
          500: '#8C5A3C',
          600: '#7A4D33',
          700: '#623E2A',
          800: '#4F3222',
          900: '#3D261D',
        },
        cream: {
          50: '#FEFDFB',
          100: '#FBF8F3',
          200: '#F7F1E8',
          300: '#F0E6D6',
          400: '#E8D9C2',
        },
        brass: {
          400: '#B89070',
          500: '#A67C52',
          600: '#8E6944',
        },
        espresso: '#3D261D',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'bounce-slow': 'bounceSlow 2s ease-in-out infinite',
        'kenburns': 'kenburns 24s ease-out forwards',
      },
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
      backgroundImage: {
        'hero-overlay': 'linear-gradient(to bottom, rgba(61,38,29,0.45) 0%, rgba(61,38,29,0.3) 50%, rgba(61,38,29,0.6) 100%)',
      },
    },
  },
  plugins: [],
};
