import React from "react";

function Summary({ formData }) {
  return (
    <div>
      <h1>{formData["character_name"]}</h1>
      <p>{formData["dynasty"]}</p>
    </div>
  );
}

export default Summary;
