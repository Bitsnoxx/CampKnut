/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        knut: {
          light: {
            bg: "#fff",
            text: "#000",
          },
          dark: {
            bg: "#000",
            text: "#fff",
          },
        },
      },
    },
  },
  plugins: [],
};
