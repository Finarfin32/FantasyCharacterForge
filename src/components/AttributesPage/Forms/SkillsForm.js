import React from "react";
import ProgressSkills from "./ProgressSkills";
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
  const strengthValue =
    RACES[pickedRaceCard]?.strength + RACES[pickedClassCard]?.strength;
  const dexterityValue =
    RACES[pickedRaceCard]?.dexterity + RACES[pickedClassCard]?.dexterity;
  const intelligenceValue =
    RACES[pickedRaceCard]?.intelligence + RACES[pickedClassCard]?.intelligence;

  const attributeData = [
    {
      label: "SIŁA",
      setCount: setCount1,
      count: count1,
      value: strengthValue,
    },
    {
      label: "ZRĘCZNOŚĆ",
      setCount: setCount2,
      count: count2,
      value: dexterityValue,
    },
    {
      label: "INTELIGENCJA",
      setCount: setCount3,
      count: count3,
      value: intelligenceValue,
    },
  ];
  const limit = 10;
  const globalLimit = 15;
  const totalPoints = count1 + count2 + count3;
  return (
    <div className="attributes_col_skills">
      {attributeData.map((attribute) => (
        <div className="stats" key={attribute.label}>
          <div className="totalPoints text-sm font-medium text-goldd hover:text-goldd">
            Użyto: {totalPoints} punktów z 15 możliwych ogółem.
          </div>
          <ProgressSkills currentPoints={attribute.count} maxValue={limit} />
          <Attribute
            name={attribute.label}
            setCount={attribute.setCount}
            count={attribute.count}
            maxValue={totalPoints >= globalLimit ? 0 : limit}
          />
          <div className="bonus_stats bg-rose-800">*{attribute.value}</div>
          <span className="text-sm font-medium text-rose-800 hover:text-goldd">
            *Punkty przyznane za wybór klasy i rasy.
          </span>
        </div>
      ))}
    </div>
  );
}

export default SkillsForm;
