import React from "react";
import "../../../App.css";
import "../AttributesPage.css";
import { useFormContext } from "react-hook-form";

// Komponent DynastyForm umożliwia użytkownikowi wpisanie nazwy dynastii postaci
function DynastyForm({ onSubmit }) {
  // Pobranie funkcji register, handleSubmit oraz błędów walidacji z kontekstu formularza react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="attributes_col_dynasty">
      {/* Etykieta dla pola dynastii */}
      <label
        htmlFor="dynasty"
        className="block mb-2 font-medium text-goldd dark:text-white font-medium"
      >
        Dynastia
      </label>
      {/* Formularz obsługujący wpisywanie dynastii */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Pole tekstowe do wpisania dynastii */}
        <input
          className="cursor-pointer bg-neutral-900 border border-goldd text-goldd text-base rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-56 p-2.5 hover:border-amber-500"
          type="text"
          placeholder="Dynastia"
          {...register("dynasty", {
            required: "To pole jest wymagane", // Walidacja: pole wymagane
            maxLength: 45, // Maksymalna długość nazwy dynastii to 45 znaków
          })}
        />
        {/* Wyświetlanie komunikatu o błędzie, jeśli walidacja nie powiedzie się */}
        {errors.character_name && (
          <p className="errors_message">{errors.character_name.message}</p>
        )}
      </form>
    </div>
  );
}
export default DynastyForm;
