import React from "react";
import { useFormContext } from "react-hook-form";
import "./Biography.css";
import "../AttributesPage.css";

// Komponent Biography umożliwia użytkownikowi wpisanie biografii postaci
function Biography({ onSubmit }) {
  // Pobranie funkcji register i handleSubmit z kontekstu formularza react-hook-form
  const { register, handleSubmit } = useFormContext();

  return (
    <div className="attributes_col_biography">
      {/* Etykieta dla pola tekstowego biografii */}
      <label
        htmlFor="message"
        className="block mb-2 text-base font-medium text-goldd"
      >
        Twoja Biografia
      </label>
      {/* Formularz obsługujący wpisywanie biografii */}
      <form className="biography_form" onSubmit={handleSubmit(onSubmit)}>
        {/* Pole tekstowe do wpisania biografii */}
        <textarea
          id="message"
          rows="4"
          className="cursor-pointer block p-2.5 w-full text-sm text-goldd bg-neutral-900 rounded-lg border-goldd border-text-goldd focus:ring-amber-500 focus:border-amber-500 hover:border-amber-500"
          placeholder="Napisz swoją biografię..."
          {...register("Biography", {
            maxLength: 300, // Maksymalna długość biografii to 300 znaków
          })}
          style={{ minHeight: "200px", maxHeight: "200px" }}
        />
      </form>
    </div>
  );
}

export default Biography;
