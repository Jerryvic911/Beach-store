/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui', ...['Helvetica', 'Arial']],
        'serif': ['ui-serif', 'Georgia', ...['Times New Roman', 'serif']],
        'jerry': ['Roboto', 'sans-serif'],
        'Montserrat': ["Montserrat", 'sans-serif'],
        'display': ["Playfair Display", "serif"],
        'body': ['"Open Sans"', ...['sans-serif']],
      },
      
    
  },
  plugins: [],
}

