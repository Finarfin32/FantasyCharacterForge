import React from "react";
import "../../../App.css";
import "../AttributesPage.css";
import { useFormContext } from "react-hook-form";

function SexForm() {
  const { register } = useFormContext();
  return (
    <div className="attributes_col_sex">
      <label htmlFor="male">
        <h1>Płeć</h1>
        <input
          {...register("sex", { required: true })}
          type="radio"
          value="Mężczyzna"
        />
        Mężczyzna
      </label>
      <label htmlFor="female">
        <input
          {...register("sex", { required: true })}
          type="radio"
          value="Kobieta"
        />
        Kobieta
      </label>
    </div>
  );
}

export default SexForm;
