/**
 * Nativo Gardens design tokens – exact values from the design handoff
 * (design/handoff/v2/index.html), taken from the client's logo colours.
 *
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ['./index.html', './src/**/*.{js,css}'],
  theme: {
    extend: {
      colors: {
        // Eucalyptus greens – primary brand colour
        gum: { 50: '#F2F5F1', 100: '#E3EAE1', 200: '#C5D3C2', 300: '#9DB398', 500: '#5E7F5A', 700: '#2E5039', 800: '#1F3A2B', 900: '#142619' },
        // Golden wattle – accent / call-to-action colour
        wattle: { 300: '#F0E27A', 400: '#EBD94A', 500: '#E3CE21', 600: '#9A8A0C' },
        // Warm sand neutrals – page backgrounds
        sand: { 50: '#FBF9F4', 100: '#F5F0E6', 200: '#EAE1CF' },
        // Bark browns – body text
        bark: { 700: '#4A3B2C', 900: '#2B2219' },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
