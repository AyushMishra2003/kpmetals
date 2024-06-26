/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'vvsmall':'350px',
      'vsmall':'400px',
      'small':'450px',
      'msm':'500px',
      'sm': '640px',
      'md':'768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl':'1536'
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}