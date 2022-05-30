import "./App.css";
import React, { useState } from "react";
import RaceCardsState from "./components/RaceCardsState";
import ClassCardsState from "./components/ClassCardsState";
import AttributesPage from "./components/AttributesPage";

function App() {
  const [pickedRaceCard, setpickedRaceCard] = useState("Nie wybrano");
  const [pickedClassCard, setpickedClassCard] = useState("Nie wybrano");
  const [currentTab, setCurrentTab] = useState(0);
  const [isDisabled, setDisabled] = useState([false, true, true]);

  const handleSubmit = () => {
    if (pickedRaceCard === true) {
      setDisabled([false, false, true]);
    } else if (pickedClassCard === true) {
      setDisabled([false, false, false]);
    } else {
      setDisabled([true, true, false]);
    }
  };

  return (
    <div className="app">
      <div className="ButtonsMainPage">
        <button
          className="PageButton"
          onClick={() => {
            setCurrentTab(0);
            handleSubmit();
          }}
          disabled={isDisabled[0]}
        >
          Rasy postaci
        </button>
        &nbsp;&nbsp;&nbsp;
        <button
          className="PageButton"
          onClick={() => {
            setCurrentTab(1);
            handleSubmit();
          }}
          disabled={isDisabled[1]}
        >
          Klasy postaci
        </button>
        &nbsp;&nbsp;&nbsp;
        <button
          className="PageButton"
          onClick={() => {
            setCurrentTab(2);
            handleSubmit();
          }}
          disabled={isDisabled[2]}
        >
          Atrybuty postaci
        </button>
      </div>
      {currentTab === 0 && <RaceCardsState setpickedCard={setpickedRaceCard} />}
      {currentTab === 1 && (
        <ClassCardsState setpickedCard={setpickedClassCard} />
      )}
      {currentTab === 2 && <AttributesPage />}
      <div className="Test">
        <p style={{ color: "yellow" }}>Kliknięto Rase {pickedRaceCard}</p>
        <p style={{ color: "red" }}>Kliknięto Klase {pickedClassCard}</p>
      </div>
    </div>
  );
}

export default App;
