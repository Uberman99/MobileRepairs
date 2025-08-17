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
        background: '#f7f7f7', // Soft off-white
        foreground: '#1c1c1c', // Deep charcoal
        primary: '#2c6e49',   // Forest green
        accent: '#fefee3',    // Light cream
        border: '#e5e5e5',
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
