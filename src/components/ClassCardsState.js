import React from "react";
import Card from "./RaceCards.js";
import "../App.css";
import {
  PLAYABLE_CLASS_WARRIOR,
  PLAYABLE_CLASS_HUNTER,
  PLAYABLE_CLASS_MAGE,
  PLAYABLE_CLASS_PRIEST,
} from "../const.js";

function ClassCardsState({ setpickedCard }) {
  return (
    <>
      <div className="Warrior" onClick={() => setpickedCard("WARRIOR")}>
        <Card name="Warrior" attributes={PLAYABLE_CLASS_WARRIOR} />
      </div>
      <div className="Hunter" onClick={() => setpickedCard("HUNTER")}>
        <Card name="Hunter" attributes={PLAYABLE_CLASS_HUNTER} />
      </div>
      <div className="Mage" onClick={() => setpickedCard("MAGE")}>
        <Card name="Mage" attributes={PLAYABLE_CLASS_MAGE} />
      </div>
      <div className="Priest" onClick={() => setpickedCard("PRIEST")}>
        <Card name="Priest" attributes={PLAYABLE_CLASS_PRIEST} />
      </div>
    </>
  );
}

export default ClassCardsState;
