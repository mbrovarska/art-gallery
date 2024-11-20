/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "412px",
      md: "760px",
      lg: "1024px",
      // "lg-max": { max: "960px" },
      xl: "1140px",
      "2xl": "1320px",
    },
    colors: {
      "white": "#fffff",
      "grey": "#44444",
      "black": "#151515",
      "orange": "#D5966C"
    },
    fontFamily: {
      sans: ["Big Shoulders Display", "sans-serif"],
      serif: ["Outfit", "sans-serif"]
    },
    fontSize: {
      xl: "96px",
      l: "70px",
      m: "60px",
      s: "36px",
      medium: "22px",
      small: "18px"

    }
  },
  plugins: [],
}
