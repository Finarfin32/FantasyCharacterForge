import React from "react";
import Card from "./RaceCards.js";
import "../App.css";

function ClassCardsState({ setpickedCard, handleSubmit, setCurrentTab }) {
  //superior function
  const setCardAndButtons = (classOfCard) => {
    setpickedCard(classOfCard); //sets the card???
    handleSubmit(); //calls handle submit
    setCurrentTab(2); //setCurrentTab to "1" [false, false, false]
  };
  //If "Rasy" picked (onClick) setCurrentTab to 0.
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
