/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fr: ["Fraunces"],
        mont: ["Montserrat"]
      },
      colors: {
        'main': '#16a34a',
        'second': '#0f172a'
      }
    },
  },
  plugins: [],
}
