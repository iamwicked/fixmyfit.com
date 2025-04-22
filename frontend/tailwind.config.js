/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    extend: {
      colors: {
        beige: {
          light: "#F5F5DD",
          DEFAULT: "#E3D8B7",
          dark: "#D1BB91",
        },
        red: "#ff0000", // Optional: add if using bg-red
      },
    },
  },
  plugins: [],
};
