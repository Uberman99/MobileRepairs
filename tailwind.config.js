/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        background: '#f8fafc', // Slate 50
        foreground: '#020617', // Slate 950
        primary: {
          DEFAULT: '#3b82f6', // Blue 500
          foreground: '#f8fafc', // Slate 50 for text on primary
        },
        'primary-dark': '#2563eb', // Blue 600 for hover
        secondary: {
          DEFAULT: '#e2e8f0', // Slate 200
          foreground: '#1e293b', // Slate 800 for text on secondary
        },
        muted: {
          DEFAULT: '#f1f5f9', // Slate 100
          foreground: '#64748b', // Slate 500 for muted text
        },
        accent: {
          DEFAULT: '#dbeafe', // Blue 100
          foreground: '#1e40af', // Blue 800 for text on accent
        },
        border: '#cbd5e1', // Slate 300
      },
      fontFamily: {
        display: ['"Exo 2"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.3)',
      },
      keyframes: {
        "fade-in-up": {
          'from': { opacity: '0', transform: 'translateY(1rem)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) forwards',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
