import "./App.css";
import React, { useState } from "react";
import RaceCardsState from "./components/RaceCardsState";
import ClassCardsState from "./components/ClassCardsState";
import AttributesPage from "./components/AttributesPage";

function App() {
  const [pickedRaceCard, setpickedRaceCard] = useState("Nie wybrano");
  const [pickedClassCard, setpickedClassCard] = useState("Nie wybrano");
  const [currentTab, setCurrentTab] = useState(0);

  // function CheckButtonStatus() {}

  return (
    <div className="app">
      <div className="ButtonsMainPage">
        <button
          level={1}
          className="PageButton"
          onClick={() => setCurrentTab(1)}
          disabled={currentTab !== 0}
        >
          Rasy postaci
        </button>
        &nbsp;&nbsp;&nbsp;
        <button
          level={2}
          className="PageButton"
          onClick={() => setCurrentTab(2)}
          disabled={currentTab !== 1}
        >
          Klasy postaci
        </button>
        &nbsp;&nbsp;&nbsp;
        <button
          level={3}
          className="PageButton"
          onClick={() => setCurrentTab(3)}
          disabled={currentTab !== 2}
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
