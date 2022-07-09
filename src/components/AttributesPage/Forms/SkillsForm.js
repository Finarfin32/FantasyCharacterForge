import React from "react";
import Attribute from "./AttributeForm";

function SkillsForm({ count, setCount }) {
  return (
    <div className="attributes_col_skills">
      <Attribute setCount={setCount} count={count} attrname={0} />
      <Attribute setCount={setCount} count={count} attrname={1} />
      <Attribute setCount={setCount} count={count} attrname={2} />
      <Attribute setCount={setCount} count={count} attrname={3} />
      <Attribute setCount={setCount} count={count} attrname={4} />
      <Attribute setCount={setCount} count={count} attrname={5} />
    </div>
  );
}
export default SkillsForm;
