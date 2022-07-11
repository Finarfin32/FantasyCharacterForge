import React from "react";
import Attribute from "./AttributeForm";
import "./SkillsForm.css";

function SkillsForm({ count, setCount }) {
  const numbers = [0, 1, 2];

  return (
    <div className="attributes_col_skills">
      <ul>
        {numbers.map((number) => (
          <Attribute key={number.toString()} value={number} />
        ))}
      </ul>

      {/* <div className="strenght">
        <Attribute setCount={setCount} count={count} attrname={0} />
      </div>

      <div className="dexterity">
        <Attribute setCount={setCount} count={count} attrname={1} />
      </div>

      <div className="intelligence">
        <Attribute setCount={setCount} count={count} attrname={2} />
      </div> */}
    </div>
  );
}
export default SkillsForm;
