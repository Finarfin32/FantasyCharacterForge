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
    // sparwdzanie po aktualnej zakładce oraz dodatkowo warunek odnośnie "nie wybrano" -
    // aby cofanie się do poprzedniej zakładki ponownie nie ustawiało atrybutów na disabled
    if (currentTab === 0 && pickedRaceCard === "Nie wybrano") {
      setDisabled([false, false, true]);
    } else if (currentTab === 1 && pickedClassCard === "Nie wybrano") {
      setDisabled([false, false, false]);
    } else {
      setDisabled([false, false, false]);
    }
  };
  return (
    <div className="app">
      <div className="ButtonsMainPage">
        <button
          className="PageButton"
          onClick={() => {
            setCurrentTab(0);
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
          }}
          disabled={isDisabled[2]}
        >
          Atrybuty postaci
        </button>
      </div>
      {currentTab === 0 && <RaceCardsState setpickedCard={setpickedRaceCard} handleSubmit={handleSubmit}/>}
      {currentTab === 1 && (
        <ClassCardsState setpickedCard={setpickedClassCard} handleSubmit={handleSubmit}/>
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
