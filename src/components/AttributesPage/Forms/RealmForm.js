import React from "react";
import "../../../App.css";
import "../AttributesPage.css";
import { useFormContext } from "react-hook-form";

// Komponent RealmForm umożliwia użytkownikowi wybór królestwa pochodzenia postaci z listy rozwijanej
function RealmForm({ onSubmit }) {
  // Pobranie funkcji register z kontekstu formularza react-hook-form
  const { register } = useFormContext();
  return (
    <div className="attributes_col_realm">
      {/* Formularz obsługujący wybór królestwa */}
      <form onSubmit={onSubmit}>
        {/* Etykieta dla pola wyboru królestwa */}
        <label
          htmlFor="realm"
          className="block mb-2 font-medium text-goldd dark:text-white font-medium"
        >
          Wybierz królestwo
        </label>
        {/* Lista rozwijana do wyboru królestwa */}
        <select
          className="cursor-pointer bg-neutral-900 border border-goldd text-goldd text-base rounded-lg focus:ring-amber-500 focus:border-amber-500 hover:border-amber-500 block w-72 p-2.5 "
          {...register("Realm", { required: true })}
        >
          <option value="Państwo1">Królestwo Dorwin i Maressi</option>
          <option value="Państwo2">Republiki Lorii</option>
          <option value="Państwo3">Cesarstwo Avar</option>
          <option value="Państwo4">Królestwo Scythi</option>
          <option value="Państwo5">Królestwo Galorien</option>
          <option value="Państwo6">Królestwo Norisea</option>
        </select>
      </form>
    </div>
  );
}

export default RealmForm;
