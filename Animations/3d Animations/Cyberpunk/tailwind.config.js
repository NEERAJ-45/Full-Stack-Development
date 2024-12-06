/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backdropBlur: {
        custom: "9px", // Add your desired blur value here
      },
    },
  },
  plugins: [],
};
