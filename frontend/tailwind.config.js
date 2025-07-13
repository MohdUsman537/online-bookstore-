/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: 
    {
      colors: 
      {
        'primary' : '#FF6F3C',  // for Subscribe,Add to Cart Button
        'secondary' : '#0D0842',  //hover color
        'blackBG' : '#F3F3F3',
        'Favourite' : '#FF5841',
      },
      fontFamily: 
      {
        'primary' : ["Montserrat","sans-serif"],
        'secondary' : ["Nunito Sans", "sans-serif"]         

      }
    },
  },
  plugins: [],
}