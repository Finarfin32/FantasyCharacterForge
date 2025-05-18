import React from "react";
import "../../../App.css";
import "../AttributesPage.css";
import { useFormContext } from "react-hook-form";

// Komponent FamilyForm umożliwia użytkownikowi wpisanie nazwy rodziny postaci
function FamilyForm({ onSubmit }) {
  // Pobranie funkcji register, handleSubmit oraz błędów walidacji z kontekstu formularza react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="attributes_col_family">
      {/* Etykieta dla pola rodziny */}
      <label
        htmlFor="family"
        className="block mb-2 font-medium text-goldd dark:text-white font-medium"
      >
        Rodzina
      </label>
      {/* Formularz obsługujący wpisywanie rodziny */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Pole tekstowe do wpisania rodziny */}
        <input
          className="cursor-pointer bg-neutral-900 border border-goldd text-goldd text-base rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-56 p-2.5 hover:border-amber-500"
          type="text"
          placeholder="Rodzina"
          {...register("family", {
            required: "To pole jest wymagane", // Walidacja: pole wymagane
            maxLength: 45, // Maksymalna długość nazwy rodziny to 45 znaków
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
export default FamilyForm;
