import "./App.css";
import React from "react";
import CardsState from "./components/CardsState";

function App() {
  return (
    <div className="app">
      <CardsState />
      <p>Kliknięto {pickedCard}</p>
    </div>
  );
}

export default App;
