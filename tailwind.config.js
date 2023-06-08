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
  },
  boxShadow: {
    'card': '0px 4px 4px rgba(0, 0, 0, .25)',
  },
  gridTemplateColumns: {
    'fluid': 'repeat(auto-fill, minmax(16px, 1fr))',
  },
  
    },
  },
  plugins: [],
}
