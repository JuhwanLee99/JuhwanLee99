/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f1222',
        slate: '#11182f',
        aqua: '#2de3ff',
        violet: '#6f7cff',
        lead: '#aab1c6',
      },
      boxShadow: {
        glow: '0 20px 50px rgba(15, 18, 34, 0.2)',
      },
      fontFamily: {
        sans: [
          '"Space Grotesk"',
          '"Noto Sans KR"',
          '"Pretendard"',
          '"Apple SD Gothic Neo"',
          'sans-serif',
        ],
      },
      keyframes: {
        floatPulse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        floatPulse: 'floatPulse 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
