import React from "react";
import "../App.css";
//Show Card name
function Card({ name, src }) {
  return (
    <>
    <div className="cards">
      <img src={src} alt={name} />
    </div>
    <div className="cards-name"> <h3>{name}</h3></div>
    </>
  );
}

export default Card;
