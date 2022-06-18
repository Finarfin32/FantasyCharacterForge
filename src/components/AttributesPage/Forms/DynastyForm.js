import React from "react";
import "../../../App.css";
import "../AttributesPage.css";
import { useFormContext } from "react-hook-form";

function DynastyForm({ onSubmit }) {
  const { register, handleSubmit } = useFormContext();
  return (
    <div className="attributes_col_dynasty">
      <h1>Dynastia</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="css-input"
          type="text"
          placeholder="Dynastia"
          {...register("dynasty", { required: true, maxLength: 20 })}
        />
      </form>
    </div>
  );
}
export default DynastyForm;
