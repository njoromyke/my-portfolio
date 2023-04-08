/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#010127",
        secondary: "#E0E0E0",
        accent: "#F4F4F4",
        "accent-2": "#F8F8F8",
        "accent-3": "#F9F9F9",
      },
    },
  },
  plugins: [],
};
