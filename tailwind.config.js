/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{html,js}",
  "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    colors: {
      goldd: "#D2C8AE",
      darkBackground: "#1a1a1a",
      lightText: "#f0f0f0",
      cardBackground: "#2b2b2b",
      goldAccent: "#d4af37",
      redAccent: "#b22222",
    },
  },
};
export const plugins = [require("flowbite/plugin")];
