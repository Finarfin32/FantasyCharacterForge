import React from "react";
import Card from "./RaceCards.js";
import "../App.css";

function RaceCardsState({ setpickedCard, handleSubmit, setCurrentTab }) {
  const setCardAndButtons = (raceOfCard) => {
    setpickedCard(raceOfCard);
    handleSubmit();
    setCurrentTab(1);
  };
  return (
    <>
      <div className="Human" onClick={() => setCardAndButtons(0)}>
        <Card name="Human" />
      </div>
      <div className="Elf" onClick={() => setCardAndButtons(1)}>
        <Card name="Elf" />
      </div>
      <div className="Dwarf" onClick={() => setCardAndButtons(2)}>
        <Card name="Dwarf" />
      </div>
      <div className="Orc" onClick={() => setCardAndButtons(3)}>
        <Card name="Orc" />
      </div>
    </>
  );
}

export default RaceCardsState;
