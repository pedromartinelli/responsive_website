/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        dropdown: {
          '0%': { opacity: 0.5, transform: 'translateX(-200px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        }
      },
      animation: {
        dropdown: 'dropdown 500ms',
      }
    },
  },
  plugins: [],
}
