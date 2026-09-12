/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        espresso: {
          DEFAULT: '#2A1608',
          light: '#4A2812',
          dark: '#190D04',
        },
        gold: {
          DEFAULT: '#F5B301',
          light: '#FFD34D',
          dark: '#C98E00',
        },
        ember: {
          DEFAULT: '#D5451B',
          light: '#F0653A',
          dark: '#A83112',
        },
        cream: {
          DEFAULT: '#FFF8EC',
          dark: '#FBEFD9',
        },
        ink: '#1A0F06',
      },
      fontFamily: {
        display: ['"Baloo 2"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 20px -4px rgba(42, 22, 8, 0.25)',
        lift: '0 12px 30px -8px rgba(42, 22, 8, 0.35)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'pop': {
          '0%': { transform: 'scale(0.9)', opacity: '0.6' },
          '60%': { transform: 'scale(1.06)', opacity: '1' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'slide-up': 'slide-up 0.3s ease-out',
        'fade-in': 'fade-in 0.4s ease-out',
        'pop': 'pop 0.35s ease-out',
      },
    },
  },
  plugins: [],
};
