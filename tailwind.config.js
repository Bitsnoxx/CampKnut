/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        knut: {
          light: {
            bg: "#121212",
            "bg-info": "#242424",
            text: "#d4d4d4",
            "post-link": "#9b9b9b",
            primary: "#5762D5",
            header: "#ffffff",
          },
          dark: {
            bg: "#ffffff",
            "bg-info": "#f0f8ff",
            text: "#495057",
            header: "#121212",
            "post-link": "#43484d",
            primary: "#5762D5",
          },
          other: {
            twitch: "#6441A5",
            youtube: "#FF0000",
            reddit: "#FF4500",
            twitter: "#00acee",
            instagram: "#e4405f",
            merch: "#5E8E3E",
          },
        },
      },
    },
  },
  plugins: [`@tailwindcss/aspect-ratio`, require("@tailwindcss/typography")],
};
