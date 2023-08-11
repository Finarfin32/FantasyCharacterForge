import React from "react";
import "./AttributeForm.css";

function Attribute({ count, setCount, name }) {
  const IncNum = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const DecNum = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1 className="atribute_name">{name}</h1>
      <h1 className="atribute_count">{count}</h1>
      <div className="buttonsAttributes">
        <button className="button plus hover:border-amber-500" onClick={IncNum}>
          +
        </button>
        <button
          className="button minus hover:border-amber-500"
          onClick={DecNum}
        >
          -
        </button>
      </div>
    </>
  );
}

export default Attribute;
