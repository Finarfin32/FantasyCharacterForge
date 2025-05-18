import React from "react";
import "../App.css";
import "./Buttons.css";

// Komponent Buttons wyświetla pasek nawigacyjny do przełączania zakładek kreatora postaci
function Buttons({ setCurrentTab, isDisabled }) {
  return (
    <div className="ButtonsMainPage">
      {/* Przycisk do przejścia do zakładki wyboru rasy */}
      <button
        className="btn-tab draw-border"
        onClick={() => {
          setCurrentTab(0); // Ustawia zakładkę na "Rasy postaci"
        }}
        disabled={isDisabled[0]} // Blokuje przycisk, jeśli odpowiedni element tablicy isDisabled jest true
      >
        Rasy postaci
      </button>
      &nbsp;&nbsp;&nbsp;
      {/* Przycisk do przejścia do zakładki wyboru klasy */}
      <button
        className="btn-tab draw-border"
        onClick={() => {
          setCurrentTab(1); // Ustawia zakładkę na "Klasy postaci"
        }}
        disabled={isDisabled[1]}
      >
        Klasy postaci
      </button>
      &nbsp;&nbsp;&nbsp;
      {/* Przycisk do przejścia do zakładki wyboru atrybutów */}
      <button
        className="btn-tab draw-border"
        onClick={() => {
          setCurrentTab(2); // Ustawia zakładkę na "Atrybuty postaci"
        }}
        disabled={isDisabled[2]}
      >
        Atrybuty postaci
      </button>
      &nbsp;&nbsp;&nbsp;
      {/* Przycisk do przejścia do zakładki podsumowania */}
      <button
        className="btn-tab draw-border"
        onClick={() => {
          setCurrentTab(3); // Ustawia zakładkę na "Podsumowanie"
        }}
        disabled={isDisabled[3]}
      >
        Podsumowanie
      </button>
    </div>
  );
}
export default Buttons;
