import React from "react";
import { useFormContext } from "react-hook-form";
import "./Biography.css";
import "../AttributesPage.css";

// Komponent Equipment umożliwia użytkownikowi wpisanie ekwipunku postaci
function Equipment({ onSubmit }) {
  // Pobranie funkcji register i handleSubmit z kontekstu formularza react-hook-form
  const { register, handleSubmit } = useFormContext();

  return (
    <div className="attributes_col_equipment">
      {/* Etykieta dla pola tekstowego ekwipunku */}
      <label
        htmlFor="message"
        className="block mb-2 text-base font-medium text-goldd"
      >
        Twoje wyposażenie
      </label>
      {/* Formularz obsługujący wpisywanie ekwipunku */}
      <form className="equipment_form" onSubmit={handleSubmit(onSubmit)}>
        {/* Pole tekstowe do wpisania ekwipunku */}
        <textarea
          id="message"
          rows="4"
          className="cursor-pointer block p-2.5 w-full text-sm text-goldd bg-neutral-900 rounded-lg border-goldd border-text-goldd focus:ring-amber-500 focus:border-amber-500 hover:border-amber-500"
          placeholder="Wypisz ekwipunek swojej postaci"
          {...register("Equipment", {
            maxLength: 300, // Maksymalna długość opisu ekwipunku to 300 znaków
          })}
          style={{ minHeight: "200px", maxHeight: "200px" }}
        />
      </form>
    </div>
  );
}

export default Equipment;
