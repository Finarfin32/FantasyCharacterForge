import React, { useEffect } from "react";
import "../App.css";
import "./DescriptionCards.css";
import { RACE_DESCRIPTION, CLASS_DESCRIPTION } from "../consts/description";

// Komponent Description wyświetla opisy wybranych ras lub klas oraz przyciski nawigacyjne
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
  // Efekt synchronizujący aktywną kartę z wybraną rasą lub klasą po zmianie zakładki
  useEffect(() => {
    if (currentTab === 0 && pickedRaceCard !== "Not selected")
      setActiveCard(pickedRaceCard);
    else if (currentTab === 1 && pickedClassCard !== "Not selected")
      setActiveCard(pickedClassCard);
    else setActiveCard(0);
  }, [currentTab, pickedRaceCard, pickedClassCard, setActiveCard]);

  // Funkcja potwierdzająca wybór karty i przechodząca do kolejnego kroku
  const setPickedCard = () => {
    if (currentTab === 0) setPickedRaceCard(activeCard);
    else setPickedClassCard(activeCard);
    handleSubmit();
  };

  return (
    <>
      <div className="ButtonsDescription flex justify-center mt-4 space-x-4">
        {/* Przycisk przewijania w lewo */}
        <button
          className="button-custom border-2 bg-gray-900 text-white font-semibold py-2 px-4 rounded-lg shadow-lg border border-gray-400 hover:border-gold disabled:bg-gray-700"
          onClick={() => setActiveCard(activeCard - 1)}
          disabled={activeCard === 0}
        >
          Przewiń w lewo
        </button>
        {/* Przycisk potwierdzający wybór */}
        <button
          className="button-custom border-2 bg-darkgreen text-white font-semibold py-2 px-4 rounded-lg shadow-lg border border-gray-400 hover:border-gold"
          onClick={setPickedCard}
        >
          Potwierdź
        </button>
        {/* Przycisk przewijania w prawo */}
        <button
          className="button-custom border-2 bg-gray-900 text-white font-semibold py-2 px-4 rounded-lg shadow-lg border border-gray-400 hover:border-gold disabled:bg-gray-700"
          onClick={() => setActiveCard(activeCard + 1)}
          disabled={activeCard === 3}
        >
          Przewiń w prawo
        </button>
      </div>
      {/* Wyświetlanie opisu wybranej rasy lub klasy w zależności od zakładki */}
      <div className="description text-center flex justify-center items-center mt-4 text-lg text-white shadow-md mx-20">
        {currentTab === 0 && <h3>{RACE_DESCRIPTION[activeCard]}</h3>}
        {currentTab === 1 && <h3>{CLASS_DESCRIPTION[activeCard]}</h3>}
      </div>
    </>
  );
}

export default Description;
