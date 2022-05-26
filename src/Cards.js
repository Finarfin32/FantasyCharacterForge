import React from "react";
import "./App.css";

function Card({ name, attributes }) {
  return (
    <div className="cards">
      <h3>{name}</h3>
      <h4>{attributes.strength}</h4>
    </div>
  );
}

export default Card;
