import React, { useState, useEffect } from "react";
import "../App.css";
import { RACE_DESCRIPTION, CLASS_DESCRIPTION } from "../consts/description";

function Description({ currentTab, pickedRaceCard, pickedClassCard }) {
  const [activeCard, setActiveCard] = useState(0);
  useEffect(() => {
    if (currentTab === 0 && pickedRaceCard !== "Not selected")
      setActiveCard(pickedRaceCard);
    else if (currentTab === 1 && pickedClassCard !== "Not selected")
      setActiveCard(pickedClassCard);
    else setActiveCard(0);
  }, [currentTab, pickedRaceCard, pickedClassCard]);
  return (
    <>
      <button
        className="Arrow"
        onClick={() => setActiveCard(activeCard - 1)}
        disabled={activeCard === 0 ? true : false}
      >
        - Arrow left{" "}
      </button>
      <button
        className="Arrow"
        onClick={() => setActiveCard(activeCard + 1)}
        disabled={activeCard === 3 ? true : false}
      >
        Arrow right -
      </button>
      <div className="description">
        {currentTab === 0 && <h3>{RACE_DESCRIPTION[activeCard]}</h3>}
        {currentTab === 1 && <h3>{CLASS_DESCRIPTION[activeCard]}</h3>}
      </div>
    </>
  );
}

export default Description;
