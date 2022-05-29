import "./App.css";
import React, { useState } from "react";
import RaceCardsState from "./components/RaceCardsState";
import ClassCardsState from "./components/ClassCardsState";
import AttributesPage from "./components/AttributesPage";

function App() {
  const [pickedRaceCard, setpickedRaceCard] = useState("Nie wybrano");
  const [pickedClassCard, setpickedClassCard] = useState("Nie wybrano");
  const [currentTab, setCurrentTab] = useState(0);

  function CheckButtonStatus() {}

  return (
    <div className="Test">
      <button className="PageButton" onClick={() => setCurrentTab(0)}>
        Rasy postaci
      </button>
      <button className="PageButton" onClick={() => setCurrentTab(1)}>
        Klasy postaci
      </button>
      <button className="PageButton" onClick={() => setCurrentTab(2)}>
        Atrybuty postaci
      </button>
      <div className="app">
        {currentTab === 0 && (
          <RaceCardsState setpickedCard={setpickedRaceCard} />
        )}
        {currentTab === 1 && (
          <ClassCardsState setpickedCard={setpickedClassCard} />
        )}
        {currentTab === 2 && <AttributesPage />}

        <p style={{ color: "white" }}>Kliknięto Rase {pickedRaceCard}</p>
        <p style={{ color: "white" }}>Kliknięto Klase {pickedClassCard}</p>
      </div>
    </div>
  );
}

export default App;
