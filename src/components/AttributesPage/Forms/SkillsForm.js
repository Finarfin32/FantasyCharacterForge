import React from "react";

function Attribute({ IncNum, DecNum, count, attrname }) {
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

function SkillsForm({ count, setCount }) {
  const IncNum = (attrIndex) => {
    setCount([...count, (count[attrIndex] = count[attrIndex] + 1)]);
  };
  const DecNum = (attrIndex) => {
    if (count > 0)
      setCount([...count, (count[attrIndex] = count[attrIndex] - 1)]);
    else {
      setCount([...count, (count[attrIndex] = 0)]);
    }
  };

  return (
    <div className="attributes_col_skills">
      <Attribute IncNum={IncNum} DecNum={DecNum} count={count} attrname={0} />
      <Attribute IncNum={IncNum} DecNum={DecNum} count={count} attrname={1} />
      <Attribute IncNum={IncNum} DecNum={DecNum} count={count} attrname={2} />
      <Attribute IncNum={IncNum} DecNum={DecNum} count={count} attrname={3} />
      <Attribute IncNum={IncNum} DecNum={DecNum} count={count} attrname={4} />
      <Attribute IncNum={IncNum} DecNum={DecNum} count={count} attrname={5} />
    </div>
  );
}
export default SkillsForm;
