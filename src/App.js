import "./App.css";
import "./shared.scss";
import React, { useState } from "react";
import RaceCardsState from "./components/RaceCardsState";
import ClassCardsState from "./components/ClassCardsState";
import Summary from "./components/Summary";
import AttributesPage from "./components/AttributesPage/AttributesPage.js";
import Description from "./components/DescriptionCards";
import Buttons from "./components/Buttons";

function App() {
  const [pickedRaceCard, setPickedRaceCard] = useState("Not selected");
  const [pickedClassCard, setPickedClassCard] = useState("Not selected");
  const [currentTab, setCurrentTab] = useState(0);
  const [isDisabled, setDisabled] = useState([false, true, true, true]);
  const [activeCard, setActiveCard] = useState(0);
  const [formData, setFormData] = useState(null);

  /**
   * Funkcja obsługująca zmianę tabów oraz blokowanie przycisków.
   * Ustawia stan `isDisabled` w zależności od aktualnie wybranego tab'a i kart.
   */
  const handleSubmit = () => {
    let newDisabledState;

    if (currentTab === 0 && pickedRaceCard === "Not selected") {
      newDisabledState = [false, false, true, true];
    } else if (currentTab === 1 && pickedClassCard === "Not selected") {
      newDisabledState = [false, false, false, true];
    } else if (currentTab === 2 && pickedClassCard === "Not selected") {
      newDisabledState = [false, false, false, true];
    } else {
      newDisabledState = [false, false, false, false];
    }

    setDisabled(newDisabledState);
    setCurrentTab((prevTab) => prevTab + 1);
  };

  /**
   * Funkcja obsługująca przesyłanie danych z formularza atrybutów.
   * Ustawia dane formularza oraz przesuwa do następnego tab'a.
   * @param {Object} data - Dane przesłane z formularza.
   */
  const handleAttributesFormSubmit = (data) => {
    setFormData(data);
    handleSubmit();
  };

  return (
    <div className="app">
      <Buttons setCurrentTab={setCurrentTab} isDisabled={isDisabled} />

      {currentTab === 0 && <RaceCardsState activeCard={activeCard} />}
      {currentTab === 1 && <ClassCardsState activeCard={activeCard} />}
      {currentTab === 2 && (
        <AttributesPage
          pickedRaceCard={pickedRaceCard}
          pickedClassCard={pickedClassCard}
          handleSubmitAttributes={handleAttributesFormSubmit}
        />
      )}
      {currentTab === 3 && (
        <Summary
          formData={formData}
          pickedRaceCard={pickedRaceCard}
          pickedClassCard={pickedClassCard}
        />
      )}

      {currentTab < 2 && (
        <div className="Buttons2">
          <Description
            pickedRaceCard={pickedRaceCard}
            pickedClassCard={pickedClassCard}
            currentTab={currentTab}
            activeCard={activeCard}
            setActiveCard={setActiveCard}
            setPickedRaceCard={setPickedRaceCard}
            setPickedClassCard={setPickedClassCard}
            handleSubmit={handleSubmit}
          />
        </div>
      )}
    </div>
  );
}

export default App;
