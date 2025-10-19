/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: { light: "#E6E6E6", dark: "#3C3C3C" },
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
      boxShadow: ({ theme }) => ({
        hard: `4px 4px 0 0 ${theme("colors.elev")}`,
        "hard-md": `6px 6px 0 0 ${theme("colors.elev")}`,
        "hard-lg": `8px 8px 0 0 ${theme("colors.elev")}`,
      }),
    },
  },
  plugins: [],
};
