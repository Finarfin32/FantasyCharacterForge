import React, { useEffect } from "react";
import "../App.css";
import "./DescriptionCards.css";
import { RACE_DESCRIPTION, CLASS_DESCRIPTION } from "../consts/description";

function Description({
  currentTab,
  pickedRaceCard,
  pickedClassCard,
  activeCard,
  setActiveCard,
  setPickedRaceCard,
  setPickedClassCard,
  handleSubmit,
}) {
  useEffect(() => {
    if (currentTab === 0 && pickedRaceCard !== "Not selected")
      setActiveCard(pickedRaceCard);
    else if (currentTab === 1 && pickedClassCard !== "Not selected")
      setActiveCard(pickedClassCard);
    else setActiveCard(0);
  }, [currentTab, pickedRaceCard, pickedClassCard, setActiveCard]);

  const setPickedCard = () => {
    if (currentTab === 0) setPickedRaceCard(activeCard);
    else setPickedClassCard(activeCard);
    handleSubmit();
  };

  return (
    <>
      <div className="ButtonsDescription flex justify-center mt-4 space-x-4">
        <button
          className="button-custom bg-gray-900 text-white font-semibold py-2 px-4 rounded-lg shadow-lg border border-gray-400 hover:border-gold disabled:bg-gray-700"
          onClick={() => setActiveCard(activeCard - 1)}
          disabled={activeCard === 0}
        >
          Przewiń w lewo
        </button>
        <button
          className="button-custom bg-darkgreen text-white font-semibold py-2 px-4 rounded-lg shadow-lg border border-gray-400 hover:border-gold"
          onClick={setPickedCard}
        >
          Potwierdź
        </button>
        <button
          className="button-custom bg-gray-900 text-white font-semibold py-2 px-4 rounded-lg shadow-lg border border-gray-400 hover:border-gold disabled:bg-gray-700"
          onClick={() => setActiveCard(activeCard + 1)}
          disabled={activeCard === 3}
        >
          Przewiń w prawo
        </button>
      </div>
      <div className="description text-center flex justify-center items-center mt-4 text-lg text-white shadow-md mx-20">
        {currentTab === 0 && <h3>{RACE_DESCRIPTION[activeCard]}</h3>}
        {currentTab === 1 && <h3>{CLASS_DESCRIPTION[activeCard]}</h3>}
      </div>
    </>
  );
}

export default Description;
