import React from "react";
import "../../../App.css";
import "../AttributesPage.css";
import { useFormContext } from "react-hook-form";

function DynastyForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="attributes_col_dynasty">
      <h1>Dynastia</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="css-input"
          type="text"
          placeholder="Dynastia"
          {...register("dynasty", {
            required: "To pole jest wymagane",
            maxLength: 45,
          })}
        />
        {errors.character_name && (
          <p className="errors_message">{errors.character_name.message}</p>
        )}
      </form>
    </div>
  );
}
export default DynastyForm;
