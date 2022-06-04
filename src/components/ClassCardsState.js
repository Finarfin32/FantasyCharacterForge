import React from "react";
import Card from "./RaceCards.js";
import "../App.css";

function ClassCardsState({ setpickedCard, handleSubmit, setCurrentTab }) {
  const setCardAndButtons = (classOfCard) => {
    setpickedCard(classOfCard);
    handleSubmit();
    setCurrentTab(2);
  };
  return (
    <>
      <div className="Warrior" onClick={() => setCardAndButtons(0)}>
        <Card name="Warrior" />
      </div>
      <div className="Hunter" onClick={() => setCardAndButtons(1)}>
        <Card name="Hunter" />
      </div>
      <div className="Mage" onClick={() => setCardAndButtons(2)}>
        <Card name="Mage" />
      </div>
      <div className="Priest" onClick={() => setCardAndButtons(3)}>
        <Card name="Priest" />
      </div>
    </>
  );
}

export default ClassCardsState;
