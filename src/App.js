import "./App.css";
import React, { useState } from "react";
import Card from "./Cards";
import { RACE_HUMAN, RACE_ELF, RACE_DWARF, RACE_ORC } from "./const.js";

function App() {
  const [pickedCard, setpickedCard] = useState("Nie wybrano");
  return (
    <div className="app">
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
    </div>
  );
}

export default App;
