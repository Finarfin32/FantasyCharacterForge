import React from "react";
import "../../../App.css";
import "../AttributesPage.css";
import { useFormContext } from "react-hook-form";

function FaithForm() {
  const { register } = useFormContext();
  return (
    <div className="attributes_col_faith">
      <label for="faith" className="block mb-2 text-lg font-medium text-goldd">
        Wybierz wiarę postaci
      </label>
      <select
        className="bg-neutral-900 border border-goldd text-goldd text-base rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-72 p-2.5 hover:border-amber-500"
        {...register("faith", { required: true })}
      >
        <option value="Wiara1">Aier</option>
        <option value="Wiara2">Greeteal</option>
        <option value="Wiara3">Tluv Seud</option>
        <option value="Wiara4">Cassylia</option>
        <option value="Wiara5">Orson</option>
      </select>
    </div>
  );
}

export default FaithForm;
