/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sidebarBG: "#1E2640",
        credit: "rgba(255, 255, 255, 0.1)",
        filter: "#D9D9D9",
      },
      fontFamily: {
        "px-regular": ["Inter", "sans-serif"],
        chirp: ["Chirp", "sans-serif"],
      },
    },
  },
  plugins: [],
};
