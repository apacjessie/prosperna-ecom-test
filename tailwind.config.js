/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif", "system-ui"],
    },
    extend: {
      colors: {
        secondary: "#dcfce7",
      },
    },
  },
  plugins: [import("tailwindcss-animate")],
};
