/** @type {import('tailwindcss').Config} */
// Określenie, w jakich plikach Tailwind ma szukać klas CSS używanych w projekcie
export const content = [
  "./src/**/*.{html,js}", // Wszystkie pliki HTML i JS w katalogu src
  "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", // Komponenty Flowbite React
];

// Rozszerzenie domyślnego motywu Tailwinda o własne kolory
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

// Dodanie pluginu Flowbite, który rozszerza Tailwinda o dodatkowe komponenty UI
export const plugins = [require("flowbite/plugin")];
