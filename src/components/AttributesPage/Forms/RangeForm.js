import React from "react";
import "../../../App.css";
import "../AttributesPage.css";
import { useFormContext } from "react-hook-form";

// Komponent RangeForm umożliwia użytkownikowi wybór wieku i wagi postaci za pomocą suwaków
function RangeForm() {
  // Pobranie funkcji register i watch z kontekstu formularza react-hook-form
  const { register, watch } = useFormContext();
  return (
    <>
      <div className="attributes_col_age">
        {/* Etykieta i wyświetlanie aktualnej wartości wieku */}
        <label
          htmlFor="default-range"
          className="block mb-2 text-base font-medium text-goldd"
        >
          Wiek {watch("age") ? watch("age") : "12"}
        </label>
        {/* Suwak do wyboru wieku */}
        <input
          id="default-range"
          type="range"
          className="w-72 h-2 accent-goldd bg-goldd rounded-lg cursor-pointer"
          min="18"
          max="85"
          placeholder="age"
          defaultValue="18"
          {...register("age", {})}
        />
      </div>
      <div className="attributes_col_weight">
        {/* Etykieta i wyświetlanie aktualnej wartości wagi */}
        <label
          htmlFor="default-range"
          className="block mb-2 text-base font-medium text-goldd"
        >
          Waga: {watch("weight") ? watch("weight") : "20"}
        </label>
        {/* Suwak do wyboru wagi */}
        <input
          id="default-range"
          type="range"
          className="w-72 h-2 accent-goldd bg-goldd rounded-lg cursor-pointer"
          min="20"
          max="120"
          placeholder="weight"
          defaultValue="20"
          {...register("weight", {})}
        />
      </div>
    </>
  );
}

export default RangeForm;
