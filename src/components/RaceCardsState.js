import React from "react";
import Card from "./RaceCards.js";
import "../App.css";
import Human from "../media/Human.jpg";
import Elf from "../media/Elf.jpg";
import Dwarf from "../media/Dwarf.jpg";
import Demon from "../media/Demon.jpg";

function RaceCardsState({ setpickedCard, handleSubmit, setCurrentTab, activeCard }) {
  console.log(activeCard);
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
          <Card name="Human" src={Human} isActive={activeCard===0 ? true : false}/>
          
        </div>
        <div className="Elf" onClick={() => setCardAndButtons(1)}>
          <Card name="Elf"src={Elf} isActive={activeCard===1 ? true : false}/>
        </div>
        <div className="Dwarf" onClick={() => setCardAndButtons(2)}>
          <Card name="Dwarf"src={Dwarf} isActive={activeCard===2 ? true : false} />
        </div>
        <div className="Demon" onClick={() => setCardAndButtons(3)}>
          <Card name="Demon"src={Demon} isActive={activeCard===3 ? true : false}/>
        </div>
      </div>
    </>
  );
}

export default RaceCardsState;
