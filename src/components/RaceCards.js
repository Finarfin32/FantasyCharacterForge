import React from "react";
import "../App.css";
//Show Card name
function Card({ name }) {
  return (
    <div className="cards">
      <h3>{name}</h3>
    </div>
  );
}

export default Card;
