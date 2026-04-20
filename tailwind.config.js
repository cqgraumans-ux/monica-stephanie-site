/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e32085',    // Rosa
        secondary: '#3c2531',   // Vinho
        light: '#f9f9f9',       // Cinza claro
        dark: '#1a1a1a',        // Texto escuro
      },
      fontFamily: {
        'title': ['"Roboto Slab"', 'serif'],
        'body': ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}