import React from "react";

function Attribute({ count, attrname, setCount }) {
  const IncNum = (attrIndex) => {
    let newCount;
    newCount = count;
    newCount[attrIndex] = count[attrIndex] + 1;
    setCount(newCount);
  };
  const DecNum = (attrIndex) => {
    if (count[attrIndex] > 0) {
      let newCount;
      newCount = count;
      newCount[attrIndex] = count[attrIndex] - 1;
      setCount(newCount);
    }
  };

  return (
    <>
      <h1>Atrybuty</h1>
      <h1>{count[attrname]}</h1>
      <div className="test">
        <button onClick={() => IncNum(attrname)}>Dodaj</button>
        <button onClick={() => DecNum(attrname)}>Odejmij</button>
      </div>
    </>
  );
}

export default Attribute;
