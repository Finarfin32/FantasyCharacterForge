import React from "react";
import { useFormContext } from "react-hook-form";
import "../AttributesPage.css";

function Motivations() {
  const { register } = useFormContext();
  return (
    <div className="attributes_col_motivations">
      <label
        for="test"
        className="block mb-2 text-lg font-medium text-goldd dark:text-white font-medium"
      >
        Cele i motywacje twojej postaci:
      </label>
      <select
        className="bg-neutral-900 border border-goldd text-goldd text-base rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-72 p-2.5 hover:border-amber-500"
        {...register("motivations", { required: true })}
      >
        <option value="Motivations1">Odnalezienie zaginionej rodziny</option>
        <option value="Motivations2">Zdobycie legendarnego skarbu</option>
        <option value="Motivations3">Poszukiwanie przygód</option>
        <option value="Motivations4">Ochrona niewinnych</option>
        <option value="Motivations5">Służba religijna</option>
      </select>
    </div>
  );
}
export default Motivations;
