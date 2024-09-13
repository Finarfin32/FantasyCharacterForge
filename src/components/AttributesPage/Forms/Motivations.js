import React from "react";
import { useFormContext } from "react-hook-form";
import "../AttributesPage.css";

function Motivations() {
  const { register } = useFormContext();
  return (
    <div className="attributes_col_motivations">
      <label
        htmlFor="test"
        className="block mb-2 font-medium text-goldd dark:text-white font-medium"
      >
        Cele i motywacje twojej postaci:
      </label>
      <select
        className="cursor-pointer bg-neutral-900 border border-goldd text-goldd text-base rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-72 p-2.5 hover:border-amber-500"
        {...register("motivations", { required: true })}
      >
        <option value="Odnalezienie zaginionej rodziny">
          Odnalezienie zaginionej rodziny
        </option>
        <option value="Zdobycie legendarnego skarbu">
          Zdobycie legendarnego skarbu
        </option>
        <option value="Poszukiwanie przygód">Poszukiwanie przygód</option>
        <option value="Ochrona niewinnych">Ochrona niewinnych</option>
        <option value="Służba religijna">Służba religijna</option>
      </select>
    </div>
  );
}
export default Motivations;
