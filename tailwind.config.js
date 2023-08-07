/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      boxShadow: ['hover'], // Enable hover variant for boxShadow utility
    },
  },
  plugins: [],
}

