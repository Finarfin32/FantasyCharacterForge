import "./App.css";
import "./shared.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import RaceCardsState from "./components/RaceCardsState";
import ClassCardsState from "./components/ClassCardsState";
import AttributesPage from "./components/AttributesPage";
import Description from "./components/DescriptionCards";
import Buttons from "./components/Buttons";

function App() {
  const [pickedRaceCard, setpickedRaceCard] = useState("Not selected");
  const [pickedClassCard, setpickedClassCard] = useState("Not selected");
  const [currentTab, setCurrentTab] = useState(0);
  const [isDisabled, setDisabled] = useState([false, true, true]);

  const handleSubmit = () => {
    if (currentTab === 0 && pickedRaceCard === "Not selected") {
      setDisabled([false, false, true]);
    } else if (currentTab === 1 && pickedClassCard === "Not selected") {
      setDisabled([false, false, false]);
    } else {
      setDisabled([false, false, false]);
    }
  };
  return (
    <div className="app">
      <Buttons setCurrentTab={setCurrentTab} isDisabled={isDisabled}></Buttons>

      {currentTab === 0 && (
        <RaceCardsState
          setpickedCard={setpickedRaceCard}
          handleSubmit={handleSubmit}
          setCurrentTab={setCurrentTab}
        />
      )}
      {currentTab === 1 && (
        <ClassCardsState
          setpickedCard={setpickedClassCard}
          handleSubmit={handleSubmit}
          setCurrentTab={setCurrentTab}
        />
      )}
      {currentTab === 2 && <AttributesPage />}
      <div className="Test">
        <p style={{ color: "yellow" }}>Kliknięto Rase {pickedRaceCard}</p>
        <p style={{ color: "red" }}>Kliknięto Klase {pickedClassCard}</p>
      </div>
      {currentTab !== 2 && (
        <Description
          pickedRaceCard={pickedRaceCard}
          pickedClassCard={pickedClassCard}
          currentTab={currentTab}
        ></Description>
      )}
    </div>
  );
}

export default App;
