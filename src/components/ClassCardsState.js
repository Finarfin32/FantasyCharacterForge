import React from "react";
import Card from "./RaceCards.js";
import "../App.css";
import Warrior from "../media/Warrior.jpg";
import Hunter from "../media/Hunter.jpg";
import Mage from "../media/Mage.jpg";
import Priest from "../media/Priest.jpg";

function ClassCardsState({ setpickedCard, handleSubmit, setCurrentTab, activeCard }) {
  console.log(activeCard);
  //superior function
  const setCardAndButtons = (classOfCard) => {
    setpickedCard(classOfCard); //sets the card???
    handleSubmit(); //calls handle submit
    setCurrentTab(2); //setCurrentTab to "1" [false, false, false]
  };
  //If "Rasy" picked (onClick) setCurrentTab to 0.
  return (
    <>
      <div className="Invisible"></div>
      <div className="Cards-box">
        <div className="Warrior" onClick={() => setCardAndButtons(0)}>
          <Card name="Warrior" src={Warrior} isActive={activeCard===0 ? true : false}/>
        </div>
        <div className="Hunter" onClick={() => setCardAndButtons(1)}>
          <Card name="Hunter" src={Hunter} isActive={activeCard===1 ? true : false}/>
        </div>
        <div className="Mage" onClick={() => setCardAndButtons(2)}>
          <Card name="Mage" src={Mage} isActive={activeCard===2 ? true : false}/>
        </div>
        <div className="Priest" onClick={() => setCardAndButtons(3)}>
          <Card name="Priest" src={Priest} isActive={activeCard===3 ? true : false}/>
        </div>
      </div>
    </>
  );
}

export default ClassCardsState;
