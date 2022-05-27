import "./App.css";
import React, { useState } from "react";
import RaceCardsState from "./components/RaceCardsState";
import ClassCardsState from "./components/ClassCardsState";

function App() {
  const [pickedRaceCard, setpickedRaceCard] = useState("Nie wybrano");
  const [pickedClassCard, setpickedClassCard] = useState("Nie wybrano");
  // const [toggleCard, setToggleCard] = useState(0);

  // const setpickedRaceCard1 =()=>{
  //   setpickedRaceCard
  // }

  return (
    <div className="app">
      <RaceCardsState setpickedCard={setpickedRaceCard} />
      {pickedRaceCard != "Nie wybrano" && (
        <ClassCardsState setpickedCard={setpickedClassCard} />
      )}

      <p>Kliknięto Rase {pickedRaceCard}</p>
      <p>Kliknięto Klase {pickedClassCard}</p>
    </div>
  );
}

export default App;
