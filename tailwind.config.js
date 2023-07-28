/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  // darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        zoomInOut: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        },
      },
      animation: {
        wiggle: 'wiggle 200ms ease-in-out',
        zoomInOut: 'zoomInOut 200ms ease-in-out',
      },
    },
  },
  plugins: [],
};
