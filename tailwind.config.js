/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
  colors:{
    primary:"#1A73E8",
    secondary:"#EA4335",
    background:"#1A1A1A",
    neutral:"#F5F5F5",
    neutral_sub:"#CCCCCC",
    foreground:"#292929",
  }
    },
  },
  plugins: [],
}
