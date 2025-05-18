import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Tworzenie głównego korzenia aplikacji React i podpięcie do elementu o id "root"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // StrictMode pomaga wykrywać potencjalne problemy w aplikacji
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Pomiar wydajności aplikacji
reportWebVitals();
