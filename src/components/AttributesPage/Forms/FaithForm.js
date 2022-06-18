import React from "react";
import "../../../App.css";
import "../AttributesPage.css";
import { useFormContext } from "react-hook-form";

function FaithForm() {
  const { register } = useFormContext();
  return (
    <div className="attributes_col_faith">
      <h1>Wiara</h1>
      <div className="select">
        <select {...register("faith", { required: true })}>
          <option value="Wiara1">Wiara1</option>
          <option value="Wiara2">Wiara2</option>
          <option value="Wiara3">Wiara3</option>
          <option value="Wiara4">Wiara4</option>
          <option value="Wiara5">Wiara5</option>
        </select>
        <div className="select_arrow"></div>
      </div>
    </div>
  );
}

export default FaithForm;
