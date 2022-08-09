const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      smol: '.75rem',
    },
    extend: {
      colors: {
        knut: {
          dark: {
            bg: '#121212',
            'bg-info': '#242424',
            text: '#d4d4d4',
            'post-link': '#9b9b9b',
            primary: '#5762D5',
            header: '#ffffff',
            tag: '#0369A1',
          },
          light: {
            bg: '#ffffff',
            'bg-info': '#f0f8ff',
            text: '#495057',
            header: '#121212',
            'post-link': '#43484d',
            primary: '#5762D5',
            tag: '#5762D5',
          },
          other: {
            twitch: '#6441A5',
            youtube: '#FF0000',
            reddit: '#FF4500',
            twitter: '#00acee',
            instagram: '#e4405f',
            merch: '#5E8E3E',
            live: '#eb0400',
          },
        },
      },
      fontFamily: {
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
