import React from "react";
import "../App.css";

function Description({ description }) {
  return (
    <div className="description">
      <h3>{description}</h3>
    </div>
  );
}

export default Description;
