import React from "react";
import Attribute from "./AttributeForm";
import "./SkillsForm.css";

function SkillsForm({
  count1,
  count2,
  count3,
  setCount1,
  setCount2,
  setCount3,
}) {
  return (
    <div className="attributes_col_skills">
      <div className="strenght">
        <Attribute name="SIŁA" setCount={setCount1} count={count1} />
      </div>
      <div className="dexterity">
        <Attribute name="ZRĘCZNOŚĆ" setCount={setCount2} count={count2} />
      </div>
      <div className="intelligence">
        <Attribute name="INTELIGENCJA" setCount={setCount3} count={count3} />
      </div>
    </div>
  );
}
export default SkillsForm;
