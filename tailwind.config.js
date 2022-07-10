/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#EAE6DB',
        secondary: '#AE8F4A',
        accent: '#A05549',
        sage: '#ECF1F4',
        sgrey: '#A4A4AB',
      }
    },
  },
  plugins: [],
}
