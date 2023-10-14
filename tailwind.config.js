/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
      },
      fontSize: {
        homepageFontSize: "0.875rem",
      },
      colors: {
        userLightBg: "hsl(0, 0%, 98%)",
        userLightSecondaryBg: "hsl(0, 0%, 100%)",
        userLightPrimaryText: "hsl(228, 11%, 9%)",

        userDarkBg: "hsl(205, 26%, 17%)",
        userDarkSecondaryBg: "hsl(210, 22%, 22%)",
        userDarkPrimaryText: "hsl(180, 100%, 100%)",
      },
    },
  },
  plugins: [],
}