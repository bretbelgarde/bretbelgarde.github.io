/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['Fira Code', 'Courier New', 'Courier', 'monospace'],
        'header': ['Raleway', 'Helvetica', 'Arial', 'sans-serif'],
        'body': ['Roboto', 'sans']
      }
    }
  },
  plugins: [],
}
