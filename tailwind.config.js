/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",        // App Router
      "./components/**/*.{js,ts,jsx,tsx}", // Componentes
      
    ],
    theme: {
      extend: {
        colors: {
          darkgreen: "#1D2D26", // cor personalizada
          peach: "#FAD4C0",
          primary: "#C0706B",
          secondary: "#7BAE8E",
        },
      },
    },
    plugins: [],
  }