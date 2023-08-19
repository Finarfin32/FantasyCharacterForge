import React from "react";
import "../../../App.css";
import "../AttributesPage.css";
import { useFormContext } from "react-hook-form";

function RealmForm({ onSubmit }) {
  const { register } = useFormContext();
  return (
    <div className="attributes_col_realm">
      <form onSubmit={onSubmit}>
        <label
          htmlFor="realm"
          className="block mb-2 text-lg font-medium text-goldd dark:text-white font-medium"
        >
          Wybierz królestwo skąd pochodzi twoja postać
        </label>
        <select
          className="cursor-pointer bg-neutral-900 border border-goldd text-goldd text-base rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-72 p-2.5 hover:border-amber-500"
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
