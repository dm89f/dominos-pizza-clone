/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dominos-blue":"rgb(0, 102, 167)",
        "dominos-bg":"rgb(242, 242, 242)",
        "dominos-green":"rgb(130, 187, 55)"
      }
    },
  },
  plugins: [],
}