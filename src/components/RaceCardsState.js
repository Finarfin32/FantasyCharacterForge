import React from "react";
import Card from "./RaceCards.js";
import "../App.css";
import Human from "../media/Human.jpg";
import Elf from "../media/Elf.jpg";
import Dwarf from "../media/Dwarf.jpg";
import Demon from "../media/Demon.jpg";

function RaceCardsState({ activeCard }) {
  return (
    <>
      <div className="header-top">
        <h1 className="header-title">Rasa postaci</h1>
        <p className="header-description">
          Od wysokich elfów i krasnoludów po dzikusów trolli i orków, każda rasa
          oferuje unikalne umiejętności i styl gry, które musisz opanować. Jakie
          jest twoje powołanie?
        </p>
      </div>
      <div className="Cards-box">
        <div className="Human">
          <Card
            name="Human"
            src={Human}
            isActive={activeCard === 0 ? true : false}
          />
        </div>
        <div className="Elf">
          <Card
            name="Elf"
            src={Elf}
            isActive={activeCard === 1 ? true : false}
          />
        </div>
        <div className="Dwarf">
          <Card
            name="Dwarf"
            src={Dwarf}
            isActive={activeCard === 2 ? true : false}
          />
        </div>
        <div className="Demon">
          <Card
            name="Demon"
            src={Demon}
            isActive={activeCard === 3 ? true : false}
          />
        </div>
      </div>
    </>
  );
}

export default RaceCardsState;
