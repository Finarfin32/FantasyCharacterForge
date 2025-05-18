import React from "react";
import "../App.css";
// Komponent Card wyświetla pojedynczą kartę rasy lub klasy postaci
function Card({ name, src, isActive }) {
  return (
    <>
      {/* Kontener karty z dynamiczną klasą aktywności */}
      <div className={`cards ${isActive ? "cards-active" : "cards-inactive"}`}>
        {/* Obrazek reprezentujący rasę lub klasę */}
        <img src={src} alt={name} />
      </div>
      {/* Nazwa rasy lub klasy */}
      <div className="cards-name">
        <h2>{name}</h2>
      </div>
    </>
  );
}

export default Card;
