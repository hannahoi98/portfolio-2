/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: { light: "#EFEFEF", dark: "#3C3C3C" },
        text: { light: "#3C3C3C", dark: "#F8F8F8" },
        butter: { DEFAULT: "#F7F6D4", hover: "#EDECBF" },
        lavender: { DEFAULT: "#AFA8C8", hover: "#9F97BC" },
        teal: { DEFAULT: "#306572", hover: "#27545F" },
        elev: "#F8F8F8",
      },
      fontFamily: {
        display: ["Josefin Slab", "serif"],
        body: ["Josefin Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
