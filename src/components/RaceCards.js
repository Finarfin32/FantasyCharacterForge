import React from "react";
import "../App.css";
//Show Card name
function Card({ name, src, isActive }) {
  return (
    <>
      <div className={`cards ${isActive ? "cards-active" : "cards-inactive"}`}>
        <img src={src} alt={name} />
      </div>
      <div className="cards-name">
        <h2>{name}</h2>
      </div>
    </>
  );
}

export default Card;
