/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        bevietnam: ["BeVietnamPro"],
      },
    },
    fontSize: {
      display: [
        "2rem",
        {
          fontWeight: "600",
        },
      ],
      lg: [
        "1rem",
        {
          fontWeight: "600",
        },
      ],
      base: [
        "0.875rem",
        {
          fontWeight: "400",
        },
      ],
      sm: [
        "0.75rem",
        {
          fontWeight: "400",
        },
      ],
    },
    colors: {
      primary: "#4E80EE",
      slate: {
        100: "#D2D5DA",
        200: "#6C727F",
        300: "#282B30",
      },
      white: "#FFFFFF",
      black: "#1B1D1F",
    },
  },
  plugins: [],
};
