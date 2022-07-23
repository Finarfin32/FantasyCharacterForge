import React from "react";
import { useFormContext } from "react-hook-form";

function RealmForm() {
  const { register } = useFormContext();
  return (
    <div className="attributes_col_realm">
      <h1>Królestwo</h1>
      <div className="select">
        <select {...register("realm", { required: true })}>
          <option value="Królestwo1">Królestwo1</option>
          <option value="Królestwo2">Królestwo2</option>
          <option value="Królestwo3">Królestwo3</option>
          <option value="Królestwo4">Królestwo4</option>
          <option value="Królestwo5">Królestwo5</option>
        </select>
        <div className="select_arrow"></div>
      </div>
    </div>
  );
}
export default RealmForm;
