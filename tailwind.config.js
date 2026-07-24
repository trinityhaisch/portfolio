/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f4f6f2',
          100: '#e8ede4',
          200: '#d4ddcc',
          300: '#b8c5aa',
          400: '#9caf88',
          500: '#82966e',
          600: '#677955',
          700: '#526044',
          800: '#444d39',
          900: '#3a4232',
        },
        paper: {
          cream: '#faf6ef',
          kraft: '#e8dcc8',
        },
        brown: {
          500: '#8b7355',
          600: '#6b5740',
          700: '#4a3c2e',
        },
        sticky: {
          yellow: '#fef3a0',
          pink: '#fde8e8',
          sage: '#e4edda',
          blue: '#dbeafe',
        },
        tape: {
          cream: '#f5efe0',
        },
        pin: {
          red: '#c0392b',
          green: '#6aab5a',
          blue: '#4a7fb5',
          yellow: '#e8b84a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
        'hand-alt': ['Patrick Hand', 'cursive'],
      },
      boxShadow: {
        paper: '2px 3px 8px rgba(74, 60, 46, 0.15), 0 1px 2px rgba(74, 60, 46, 0.08)',
        'paper-sm': '1px 2px 4px rgba(74, 60, 46, 0.12)',
        'paper-lg': '4px 6px 16px rgba(74, 60, 46, 0.18), 0 2px 4px rgba(74, 60, 46, 0.1)',
        pin: '0 2px 4px rgba(0,0,0,0.3), inset 0 -2px 2px rgba(0,0,0,0.15)',
      },
      backgroundImage: {
        gingham: `
          linear-gradient(90deg, rgba(212,221,204,0.4) 1px, transparent 1px),
          linear-gradient(rgba(212,221,204,0.4) 1px, transparent 1px)
        `,
        'paper-lined': `
          repeating-linear-gradient(
            transparent,
            transparent 27px,
            rgba(130, 150, 110, 0.15) 27px,
            rgba(130, 150, 110, 0.15) 28px
          )
        `,
        'paper-notebook': `
          linear-gradient(90deg, rgba(234, 100, 100, 0.3) 1px, transparent 1px),
          repeating-linear-gradient(
            transparent,
            transparent 27px,
            rgba(130, 150, 110, 0.12) 27px,
            rgba(130, 150, 110, 0.12) 28px
          )
        `,
        cork: `
          radial-gradient(circle at 20% 30%, rgba(139,115,85,0.15) 1px, transparent 1px),
          radial-gradient(circle at 70% 60%, rgba(139,115,85,0.12) 1px, transparent 1px),
          radial-gradient(circle at 40% 80%, rgba(139,115,85,0.1) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        gingham: '24px 24px',
        cork: '8px 8px',
      },
    },
  },
  plugins: [],
}
