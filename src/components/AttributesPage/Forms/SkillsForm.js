import React, { useState } from "react";

function SkillsForm() {
  const [count, setCount] = useState(0);
  const IncNum = () => {
    setCount(count + 1);
  };
  const DecNum = () => {
    if (count > 0) setCount(count - 1);
    else {
      setCount(0);
    }
  };

  return (
    <div className="attributes_col_skills">
      <h1>Atrybuty</h1>
      <h1>{count}</h1>

      <div className="test">
        <button onClick={IncNum}>Dodaj</button>
        <button onClick={DecNum}>Odejmij</button>
      </div>
    </div>
  );
}
export default SkillsForm;
