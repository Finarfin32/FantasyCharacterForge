import React from "react";
import Card from "./RaceCards.js";
import "../App.css";
import Human from "../media/Human.jpg";
import Elf from "../media/Elf.jpg";
import Dwarf from "../media/Dwarf.jpg";
import Demon from "../media/Demon.jpg";

function RaceCardsState({ setpickedCard, handleSubmit, setCurrentTab }) {
  const setCardAndButtons = (raceOfCard) => {
    setpickedCard(raceOfCard);
    handleSubmit(); //same as classcards
    setCurrentTab(1);
  };
  return (
    <>
      <div className="Invisible"></div>
      <div className="Cards-box">
        <div className="Human" onClick={() => setCardAndButtons(0)}>
          <Card name="Human" src={Human}/>
          
        </div>
        <div className="Elf" onClick={() => setCardAndButtons(1)}>
          <Card name="Elf"src={Elf} />
        </div>
        <div className="Dwarf" onClick={() => setCardAndButtons(2)}>
          <Card name="Dwarf"src={Dwarf} />
        </div>
        <div className="Demon" onClick={() => setCardAndButtons(3)}>
          <Card name="Demon"src={Demon} />
        </div>
      </div>
    </>
  );
}

export default RaceCardsState;
