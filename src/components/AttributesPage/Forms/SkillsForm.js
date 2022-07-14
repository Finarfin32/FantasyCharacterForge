import React from "react";
import Attribute from "./AttributeForm";
import "./SkillsForm.css";

function SkillsForm({ count, setCount }) {
  const tab = ["strenght", "dexterity", "intelligence"];
  return (
    <div className="attributes_col_skills">
      <ul>
        {tab.map((value, id) => (
          <div key={id} className={value}>
            <Attribute setCount={setCount} count={count} attrname={id} />
          </div>
        ))}
      </ul>
    </div>
  );
}
export default SkillsForm;
