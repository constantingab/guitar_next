/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        guitarYellow: {
          100: "#fffdf0",
          200: "#fff8d2",
          300: "#fff3b5",
          400: "#ffee97",
          500: "#fee979",
          600: "#fee45b",
          700: "#fedf3e",
          800: "#feda20",
          900: "#fed502",
        },
        guitarGreen: {
          100: "#f2faf6",
          200: "#d8f1e5",
          300: "#bee7d3",
          400: "#a4dec2",
          500: "#8bd5b1",
          600: "#71cb9f",
          700: "#57c28e",
          800: "#3db87c",
          900: "#23af6b",
        },
        guitarBlue: {
          100: "#f0f6f7",
          200: "#d2e5e8",
          300: "#b4d3d8",
          400: "#96c2c9",
          500: "#78b1b9",
          600: "#5a9faa",
          700: "#3c8e9a",
          800: "#1e7c8b",
          900: "#0155b1",
        },
        guitarGray: {
          100: "#f3f4f5",
          200: "#dadfe2",
          300: "#c2c9ce",
          400: "#a9b4ba",
          500: "#919ea7",
          600: "#788993",
          700: "#60737f",
          800: "#475e6c",
          900: "#1B1B1E",
        }, // ...
      },
    },
  },
  plugins: [],
};
