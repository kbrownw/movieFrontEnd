/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}", "../index.html"],
  theme: {
    extend: {
      colors: {
        red: "#F2542D",
        "dark-blue": "#127475",
        blue: "#15898B",
      },
    },
  },
  plugins: [],
};
