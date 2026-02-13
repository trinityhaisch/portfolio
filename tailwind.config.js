/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Custom lavender color palette
      colors: {
        sage: {
          50: '#f4f6f2',
          100: '#e8ede4',
          200: '#d4ddcc',
          300: '#b8c5aa',
          400: '#9caf88',  // your base sage
          500: '#82966e',
          600: '#677955',
          700: '#526044',
          800: '#444d39',
          900: '#3a4232',
        },
      },
      // Custom font families
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

