/**
 * Nativo Gardens design tokens.
 *
 * Palette families come from the Claude Design handoff (gum, wattle, sand, bark).
 * The compiled stylesheet holding the exact hex values was not included in the
 * handoff bundle, so values are reconstructed around the one literal in the
 * design (gum-900 = rgb(20 38 25), used in the mobile action-bar shadow).
 * Adjust here — every colour in the site is driven from these tokens.
 *
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ['./index.html', './src/**/*.{js,css}'],
  theme: {
    extend: {
      colors: {
        // Eucalyptus greens – primary brand colour
        gum: {
          50: '#f1f6f2',
          100: '#dfeae2',
          200: '#bfd5c6',
          300: '#97b9a2',
          400: '#6b977a',
          500: '#4b7a5b',
          600: '#386148',
          700: '#2c4f3a',
          800: '#1f3b2a',
          900: '#142619',
        },
        // Golden wattle – accent / call-to-action colour
        wattle: {
          50: '#fffaeb',
          100: '#fef1c7',
          200: '#fde38a',
          300: '#fcd35a',
          400: '#f9c43a',
          500: '#f2ae14',
          600: '#c98a07',
          700: '#9e660a',
        },
        // Warm sand neutrals – page backgrounds
        sand: {
          50: '#fbf9f4',
          100: '#f4efe4',
          200: '#e9e0cd',
          300: '#d9cbae',
        },
        // Bark browns – body text
        bark: {
          500: '#7a6857',
          700: '#54473b',
          900: '#2a221c',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'Cambria', '"Times New Roman"', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
