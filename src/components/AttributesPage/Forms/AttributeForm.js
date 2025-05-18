import React from "react";
import "./AttributeForm.css";

// Komponent Attribute reprezentuje pojedynczy atrybut postaci z możliwością zwiększania i zmniejszania jego wartości
function Attribute({ count, setCount, name, maxValue }) {
  // Funkcja zwiększająca wartość atrybutu, jeśli nie przekroczono maksymalnej wartości
  const IncNum = () => {
    if (count < maxValue) {
      setCount(count + 1);
    }
  };

  // Funkcja zmniejszająca wartość atrybutu, jeśli jest większa od zera
  const DecNum = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      {/* Wyświetlanie nazwy atrybutu */}
      <h1 className="atribute_name">{name}</h1>
      {/* Wyświetlanie aktualnej wartości atrybutu */}
      <h1 className="atribute_count">{count}</h1>
      <div className="buttonsAttributes">
        {/* Przycisk zwiększający wartość atrybutu */}
        <button className="button plus hover:border-amber-500" onClick={IncNum}>
          +
        </button>
        {/* Przycisk zmniejszający wartość atrybutu */}
        <button
          className="button minus hover:border-amber-500"
          onClick={DecNum}
        >
          -
        </button>
      </div>
    </>
  );
}

export default Attribute;
