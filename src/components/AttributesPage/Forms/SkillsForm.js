import React from "react";
import Attribute from "./AttributeForm";
import "./SkillsForm.css";
import { RACES } from "../../../consts/const.js";

function SkillsForm({
  count1,
  count2,
  count3,
  setCount1,
  setCount2,
  setCount3,
  pickedRaceCard,
  pickedClassCard,
}) {
  const attributeData = [
    {
      label: "",
      value: RACES[pickedRaceCard]?.strength + RACES[pickedClassCard]?.strength,
      setCount: setCount1,
      count: count1,
    },
    {
      label: "",
      value:
        RACES[pickedRaceCard]?.dexterity + RACES[pickedClassCard]?.dexterity,
      setCount: setCount2,
      count: count2,
    },
    {
      label: "",
      value:
        RACES[pickedRaceCard]?.intelligence +
        RACES[pickedClassCard]?.intelligence,
      setCount: setCount3,
      count: count3,
    },
  ];

  return (
    <div className="attributes_col_skills">
      {attributeData.map((attribute) => (
        <div className="stats" key={attribute.label}>
          <Attribute
            name={attribute.label}
            setCount={attribute.setCount}
            count={attribute.count}
          />
          <div className="bonus_stats">
            {attribute.label} {attribute.value}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillsForm;

// import React from "react";
// import Attribute from "./AttributeForm";
// import "./SkillsForm.css";
// import { RACES } from "../../../consts/const.js";
// function SkillsForm({
//   count1,
//   count2,
//   count3,
//   setCount1,
//   setCount2,
//   setCount3,
//   pickedRaceCard,
//   pickedClassCard,
// }) {
//   const strengthValue = RACES[pickedRaceCard]?.strength;
//   const strengthValue2 = RACES[pickedClassCard]?.strength;
//   const dexterityValue = RACES[pickedRaceCard]?.dexterity;
//   const dexterityValue2 = RACES[pickedClassCard]?.dexterity;
//   const intelligenceValue = RACES[pickedRaceCard]?.intelligence;
//   const intelligenceValue2 = RACES[pickedClassCard]?.intelligence;
//   const test = {
//     color: "white",
//   };
//   return (
//     <div className="attributes_col_skills">
//       <div className="strenght">
//         <Attribute name="SIŁA" setCount={setCount1} count={count1} />
//         <p style={test}>SIŁA: {strengthValue + strengthValue2}</p>
//       </div>
//       <div className="dexterity">
//         <Attribute name="ZRĘCZNOŚĆ" setCount={setCount2} count={count2} />
//         <p style={test}>SIŁA: {dexterityValue + dexterityValue2}</p>
//       </div>
//       <div className="intelligence">
//         <Attribute name="INTELIGENCJA" setCount={setCount3} count={count3} />
//         <p style={test}>SIŁA: {intelligenceValue + intelligenceValue2}</p>
//       </div>
//     </div>
//   );
// }
// export default SkillsForm;
