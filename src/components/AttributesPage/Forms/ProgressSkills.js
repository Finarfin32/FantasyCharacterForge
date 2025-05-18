import React from "react";

// Komponent ProgressSkills wyświetla pasek postępu dla punktów atrybutu
function ProgressSkills({ currentPoints, maxValue }) {
  // Styl paska postępu, szerokość zależna od liczby punktów
  const progressStyle = {
    width: `${(currentPoints / maxValue) * 100}%`,
  };

  return (
    <div className="flex justify-between mb-1">
      {/* Wyświetlanie liczby obecnych punktów i maksymalnej wartości */}
      <span className="text-sm font-medium text-goldd">
        Obecne punkty: {currentPoints}/{maxValue}
      </span>
      {/* Pasek postępu */}
      <div className="w-full bg-neutral-900 border border-goldd rounded-full h-3 focus:ring-amber-500 focus:border-amber-500 hover:border-amber-500">
        <div className="bg-goldd h-3 rounded-full" style={progressStyle}></div>
      </div>
    </div>
  );
}

export default ProgressSkills;
