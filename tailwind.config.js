/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'ui-sans-serif', 'system-ui'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        cream: '#fafaf7',
        ink: '#111111',
        muted: '#6b6b6b',
        accent: {
          500: '#e85d3c',
          600: '#cc4a2c',
        },
      },
    },
  },
  plugins: [],
}
