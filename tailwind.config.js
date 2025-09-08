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
        background: '#ffffff', // Clean white
        foreground: '#0f172a', // Slate 900 for text
        primary: {
          DEFAULT: '#2563eb', // Blue 600
          foreground: '#f8fafc', // Slate 50
        },
        secondary: {
          DEFAULT: '#f1f5f9', // Slate 100
          foreground: '#1e293b', // Slate 800
        },
        muted: {
          DEFAULT: '#f1f5f9', // Slate 100
          foreground: '#64748b', // Slate 500
        },
        accent: {
          DEFAULT: '#eef2ff', // Indigo 50
          foreground: '#4338ca', // Indigo 700
        },
        border: '#e2e8f0', // Slate 200
      },
      fontFamily: {
        display: ['"Lora"', 'serif'],
        sans: ['"Poppins"', 'sans-serif'],
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