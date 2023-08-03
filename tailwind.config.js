/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{html,js}",
  "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    colors: {
      goldd: "#D2C8AE",
    },
  },
};
export const plugins = [require("flowbite/plugin")];
