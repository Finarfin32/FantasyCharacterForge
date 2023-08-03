/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{html,js}",
  "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {},
};
export const plugins = [require("flowbite/plugin")];
