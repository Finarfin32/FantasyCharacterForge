import React from "react";
import Card from "./RaceCards.js";
import "../App.css";
import Warrior from "../media/Warrior.jpg";
import Hunter from "../media/Hunter.jpg";
import Mage from "../media/Mage.jpg";
import Priest from "../media/Priest.jpg";

function ClassCardsState({ activeCard }) {
  return (
    <>
      <div className="header-top">
        <h1 className="header-title">Klasa postaci</h1>
        <p className="header-description">
          Od rycerzy w lśniących zbrojach po skradających się prześladowców i
          przebiegłych czarowników, każda klasa oferuje unikalne wyzwania i
          rozgrywkę, które musisz opanować. Jakie jest twoje powołanie?
        </p>
      </div>
      <div className="Cards-box">
        <div className="Warrior">
          <Card
            name="Wojownik"
            src={Warrior}
            isActive={activeCard === 0 ? true : false}
          />
        </div>
        <div className="Hunter">
          <Card
            name="Łowca"
            src={Hunter}
            isActive={activeCard === 1 ? true : false}
          />
        </div>
        <div className="Mage">
          <Card
            name="Mag"
            src={Mage}
            isActive={activeCard === 2 ? true : false}
          />
        </div>
        <div className="Priest">
          <Card
            name="Kapłan"
            src={Priest}
            isActive={activeCard === 3 ? true : false}
          />
        </div>
      </div>
    </>
  );
}

export default ClassCardsState;
