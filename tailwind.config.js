/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transBlue: '#5BCEFA',
        transPink: '#F5A9B8',
      }
    },
  },
  plugins: [],
}
