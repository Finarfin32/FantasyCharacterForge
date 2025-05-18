import React from "react";
import "../../../App.css";
import "../AttributesPage.css";
import { useFormContext } from "react-hook-form";

// Komponent FaithForm umożliwia użytkownikowi wybór wiary postaci z listy rozwijanej
function FaithForm() {
  // Pobranie funkcji register z kontekstu formularza react-hook-form
  const { register } = useFormContext();
  return (
    <div className="attributes_col_faith">
      {/* Etykieta dla pola wyboru wiary */}
      <label htmlFor="faith" className="block mb-2 font-medium text-goldd">
        Wybierz wiarę postaci
      </label>
      {/* Lista rozwijana do wyboru wiary */}
      <select
        className="cursor-pointer bg-neutral-900 border border-goldd text-goldd text-base rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-72 p-2.5 hover:border-amber-500"
        {...register("faith", { required: true })}
      >
        <option value="Aier">Aier</option>
        <option value="Greeteal">Greeteal</option>
        <option value="Tluv Seud">Tluv Seud</option>
        <option value="Cassylia">Cassylia</option>
        <option value="Orson">Orson</option>
      </select>
    </div>
  );
}

export default FaithForm;
