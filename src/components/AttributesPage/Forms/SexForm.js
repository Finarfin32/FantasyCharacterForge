import React from "react";
import "../../../App.css";
import "../AttributesPage.css";
import { useFormContext } from "react-hook-form";

function SexForm() {
  const { register } = useFormContext();
  return (
    <div className="attributes_col_sex">
      <h1>Płeć</h1>
      <input
        {...register("sex", { required: true })}
        type="radio"
        value="Mężczyzna"
      />
      <input
        {...register("sex", { required: true })}
        type="radio"
        value="Kobieta"
      />
    </div>
  );
}

export default SexForm;
