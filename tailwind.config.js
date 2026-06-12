/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#04060c', // near-black base
          800: '#070a14',
          700: '#0a0e1c', // deep navy charcoal
          600: '#0f1424',
          500: '#151a2e',
        },
        electric: {
          50: '#e6f2ff',
          100: '#c4e0ff',
          200: '#8fc4ff',
          300: '#4f9dff',
          400: '#2e7bff',
          500: '#1f5fff', // primary electric blue
          600: '#1648e6',
          700: '#1138b4',
        },
        cyan: {
          glow: '#22e0ff',
        },
      },
      fontFamily: {
        display: ['var(--font-anton)', 'Impact', 'sans-serif'],
        sans: ['var(--font-epilogue)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-grotesk)', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'electric-gradient':
          'linear-gradient(120deg, #22e0ff 0%, #2e7bff 45%, #1f5fff 100%)',
        'electric-radial':
          'radial-gradient(circle at 50% 0%, rgba(34,224,255,0.18), transparent 60%)',
        'glass-sheen':
          'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.02) 40%, rgba(255,255,255,0) 100%)',
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(34,224,255,0.55)',
        'glow-lg': '0 0 80px -12px rgba(47,123,255,0.65)',
        glass: '0 8px 40px -12px rgba(0,0,0,0.7)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-22px) rotate(2deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-glow': {
          '0%,100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        shimmer: 'shimmer 3.5s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
        'spin-slow': 'spin-slow 26s linear infinite',
      },
    },
  },
  plugins: [],
};
