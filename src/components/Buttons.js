import React from "react";
import "../App.css";

function Buttons({ setCurrentTab, isDisabled }) {
  return (
    <div className="ButtonsMainPage">
      <button
        className="btn-tab draw-border"
        onClick={() => {
          setCurrentTab(0);
        }}
        disabled={isDisabled[0]}
      >
        Rasy postaci
      </button>
      &nbsp;&nbsp;&nbsp;
      <button
        className="btn-tab draw-border"
        onClick={() => {
          setCurrentTab(1);
        }}
        disabled={isDisabled[1]}
      >
        Klasy postaci
      </button>
      &nbsp;&nbsp;&nbsp;
      <button
        className="btn-tab draw-border"
        onClick={() => {
          setCurrentTab(2);
        }}
        disabled={isDisabled[2]}
      >
        Atrybuty postaci
      </button>
    </div>
  );
}
export default Buttons;
