/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1F3E97',
        secondary: '#18378F',
        grayPrimary: '#858585',
        graySecondary: '#F4F4F4',
        orange: '#FFB800'
      },
      fontFamily: {
        logoText: ["Pacifico"]
      }
    },
  },
  plugins: [],
}

