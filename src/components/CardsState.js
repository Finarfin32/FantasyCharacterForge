import React, { useState } from "react";
import Card from "./Cards.js";
import "../App.css";
import { RACE_HUMAN, RACE_ELF, RACE_DWARF, RACE_ORC } from "../const.js";

function CardsState() {
  const [pickedCard, setpickedCard] = useState("Nie wybrano");
  return (
    <>
      <div className="Human" onClick={() => setpickedCard("HUMAN")}>
        <Card name="Human" attributes={RACE_HUMAN} />
      </div>
      <div className="Elf" onClick={() => setpickedCard("ELF")}>
        <Card name="Elf" attributes={RACE_ELF} />
      </div>
      <div className="Dwarf" onClick={() => setpickedCard("DWARF")}>
        <Card name="Dwarf" attributes={RACE_DWARF} />
      </div>
      <div className="Orc" onClick={() => setpickedCard("ORC")}>
        <Card name="Orc " attributes={RACE_ORC} />
      </div>
      <p>Kliknięto {pickedCard}</p>
    </>
  );
}

export default CardsState;
