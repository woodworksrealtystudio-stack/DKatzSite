import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0d1b2e',
        'navy-light': '#162640',
        parchment: '#f8f7f4',
        ivory: '#f1ede8',
        stone: '#d4cfc9',
        slate: '#4a5568',
        gold: '#b8972e',
        'gold-light': '#d4ac3a',
        muted: '#7a7672',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Geist', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'section': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.005em' }],
      },
      spacing: {
        'gutter': 'clamp(1.5rem, 5vw, 4rem)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'drift': 'drift 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        drift: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grain': 'url("data:image/svg+xml,%3Csvg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise"/%3C/filter%3E%3Crect width="400" height="400" fill="white" filter="url(%23noiseFilter)" opacity="0.03"/%3E%3C/svg%3E")',
      },
    },
  },
  plugins: [],
};

export default config;
