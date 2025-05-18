import React from "react";
import Card from "./RaceCards.js";
import "../App.css";
import Warrior from "../media/Warrior.jpg";
import Hunter from "../media/Hunter.jpg";
import Mage from "../media/Mage.jpg";
import Priest from "../media/Priest.jpg";

/**
 * Komponent wyświetlający karty klas postaci w grze.
 * @param {Object} props
 * @param {number} props.activeCard - Indeks aktywnej karty.
 * @returns {JSX.Element} Wyświetla karty klas postaci.
 */
// Komponent ClassCardsState prezentuje dostępne klasy postaci jako karty do wyboru
function ClassCardsState({ activeCard }) {
  return (
    <>
      <div className="header-top">
        {/* Nagłówek sekcji wyboru klasy */}
        <h1 className="header-title">Klasa postaci</h1>
        <p className="description">
          Od rycerzy w lśniących zbrojach po skradających się prześladowców i
          przebiegłych czarowników, każda klasa oferuje unikalne wyzwania i
          rozgrywkę, które musisz opanować. Jakie jest twoje powołanie?
        </p>
      </div>
      <div className="Cards-box">
        {/* Karta klasy: Wojownik */}
        <div className="Warrior">
          <Card name="Wojownik" src={Warrior} isActive={activeCard === 0} />
        </div>
        {/* Karta klasy: Łowca */}
        <div className="Hunter">
          <Card name="Łowca" src={Hunter} isActive={activeCard === 1} />
        </div>
        {/* Karta klasy: Mag */}
        <div className="Mage">
          <Card name="Mag" src={Mage} isActive={activeCard === 2} />
        </div>
        {/* Karta klasy: Kapłan */}
        <div className="Priest">
          <Card name="Kapłan" src={Priest} isActive={activeCard === 3} />
        </div>
      </div>
    </>
  );
}

export default ClassCardsState;
