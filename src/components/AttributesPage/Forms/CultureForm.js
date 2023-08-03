import React from "react";
import "../../../App.css";
import "../AttributesPage.css";
import { useFormContext } from "react-hook-form";

function CultureForm({ onSubmit }) {
  const { register } = useFormContext();
  return (
    <div className="attributes_col_culture">
      <form onSubmit={onSubmit}>
        <label
          for="faith"
          className="block mb-2 text-lg font-medium text-goldd dark:text-white font-medium"
        >
          Wybierz kulturę twojej postaci
        </label>
        <select
          className="bg-neutral-900 border border-goldd text-goldd text-base rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-72 p-2.5"
          {...register("culture", { required: true })}
        >
          <option value="Kultura1">Kultura1</option>
          <option value="Kultura2"> Kultura2</option>
          <option value="Kultura3"> Kultura3</option>
          <option value="Kultura4"> Kultura4</option>
          <option value="Kultura5"> Kultura5</option>
        </select>
      </form>
    </div>
  );
}

export default CultureForm;
