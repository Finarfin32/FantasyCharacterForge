import React from "react";

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
      <div className="test">
        <button onClick={IncNum}>Dodaj</button>
        <button onClick={DecNum}>Odejmij</button>
      </div>
    </>
  );
}

export default Attribute;
