import React from "react";
import "./AttributeForm.css";

function Attribute({ count, setCount, name }) {
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
    <>
      <h1>{name}</h1>
      <h1>{count}</h1>
      <div className="buttonsAttributes">
        <button className="button plus" onClick={IncNum}>
          +
        </button>
        <button className="button minus" onClick={DecNum}>
          -
        </button>
      </div>
    </>
  );
}

export default Attribute;
