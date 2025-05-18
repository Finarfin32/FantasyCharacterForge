import React from "react";
import "./CharacterNameForm.css";
import { useFormContext } from "react-hook-form";

// Komponent CharacterNameForm umożliwia użytkownikowi wpisanie nazwy postaci
function CharacterNameForm({ onSubmit }) {
  // Pobranie funkcji register, handleSubmit oraz błędów walidacji z kontekstu formularza react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="attributes_col_character_name">
      {/* Etykieta dla pola nazwy postaci */}
      <label
        htmlFor="character_name"
        className="block mb-2 font-medium text-goldd dark:text-white font-medium"
      >
        Nazwa postaci
      </label>
      {/* Formularz obsługujący wpisywanie nazwy postaci */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Pole tekstowe do wpisania nazwy postaci */}
        <input
          className="cursor-pointer bg-neutral-900 border border-goldd text-goldd text-base rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-56 p-2.5 hover:border-amber-500"
          type="text"
          placeholder="Nazwa postaci"
          {...register("character_name", {
            required: "To pole jest wymagane", // Walidacja: pole wymagane
            maxLength: 45, // Maksymalna długość nazwy postaci to 45 znaków
          })}
        />
      </form>
      {/* Wyświetlanie komunikatu o błędzie, jeśli walidacja nie powiedzie się */}
      {errors.character_name && (
        <p className="errors_message">{errors.character_name.message}</p>
      )}
    </div>
  );
}
export default CharacterNameForm;
