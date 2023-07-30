/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        kanit: ['Kanit', 'sans-serif'],
      },
      colors:{
        primary: "#fffffb",
        secondary: "#20272d",
        accent: "#337bb6",
      },
      backgroundImage:{
        painpoint:'url("/assets/painpoint.png")',
        findings:'url("/assets/findings.png")'
      }
    },
  },
  plugins: [],
}
