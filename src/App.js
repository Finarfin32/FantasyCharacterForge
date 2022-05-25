import "./App.css";
import React from "react";
import Card from "./Cards";
import { race_human, race_elf, race_dwarf, race_orc } from "./Const.js";

function App() {
  return (
    <div className="app">
      <Card name="Human" attributes={{ race_human }} />
      <Card name="Elf" attributes={race_elf} />
      <Card name="Dwarf" attributes={race_dwarf} />
      <Card name="Orc " attributes={race_orc} />
    </div>
  );
}

export default App;
