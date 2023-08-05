import React from "react";
import { useFormContext } from "react-hook-form";

function RealmForm() {
  const { register } = useFormContext();
  return (
    <div className="attributes_col_realm">
      <label
        for="faith"
        className="block mb-2 text-lg font-medium text-goldd dark:text-white font-medium"
      >
        Wybierz królestwo skąd pochodzi twoja postać
      </label>
      <select
        className="bg-neutral-900 border border-goldd text-goldd text-base rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-72 p-2.5 hover:border-amber-500"
        {...register("realm", { required: true })}
      >
        <option value="Królestwo1">Królestwo1</option>
        <option value="Królestwo2">Królestwo2</option>
        <option value="Królestwo3">Królestwo3</option>
        <option value="Królestwo4">Królestwo4</option>
        <option value="Królestwo5">Królestwo5</option>
      </select>
    </div>
  );
}
export default RealmForm;
