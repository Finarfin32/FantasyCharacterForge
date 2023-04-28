import React from "react";
import "../App.css";

function Buttons({ setCurrentTab, isDisabled }) {
  return (
    <div className="ButtonsMainPage">
      <button
        className="btn-tab draw-border"
        onClick={() => {
          setCurrentTab(0); //If "Rasy" picked (onClick) setCurrentTab to 0.
        }}
        disabled={isDisabled[0]} //Array, set to 0 this sets the function (setDisabled) to [false, false, true]
      >
        Rasy postaci
      </button>
      &nbsp;&nbsp;&nbsp;
      <button
        className="btn-tab draw-border"
        onClick={() => {
          setCurrentTab(1); //If "Klasy" picked (onClick) setCurrentTab to 1.
        }}
        disabled={isDisabled[1]} //Array, set to 0 this sets the function (setDisabled) to [false, false, false]
      >
        Klasy postaci
      </button>
      &nbsp;&nbsp;&nbsp;
      <button
        className="btn-tab draw-border"
        onClick={() => {
          setCurrentTab(2); //2
        }}
        disabled={isDisabled[2]} //[false, false, false]
      >
        Atrybuty postaci
      </button>

      &nbsp;&nbsp;&nbsp;
      <button
        className="btn-tab draw-border"
        onClick={() => {
          setCurrentTab(2); //2
        }}
        disabled={isDisabled[2]} //[false, false, false]
      >
        Podsumowanie
      </button>

    </div>
  );
}
export default Buttons;
