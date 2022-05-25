import React from "react";
import "./App.css";
import { race_human, race_elf, race_dwarf, race_orc } from "./Const.js";

function Card({ name, race_human }) {
  return (
    <div className="cards">
      <h3>{name}</h3>
      {race_human}
    </div>
  );
}

export default Card;
