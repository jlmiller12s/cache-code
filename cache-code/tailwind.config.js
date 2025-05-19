/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#15ff15',
        'primary-dark': '#0a2d0a',
      },
      fontFamily: {
        blacky: ['var(--font-blacky)'],
      },
    },
  },
  plugins: [],
} 