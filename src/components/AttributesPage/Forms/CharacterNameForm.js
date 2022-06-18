import React from "react";
import { useFormContext } from "react-hook-form";

function CharacherNameForm({ onSubmit }) {
  const { register, handleSubmit } = useFormContext();
  return (
    <div className="attributes_col_character_name">
      <h1>Nazwa Postaci</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="css-input"
          type="text"
          placeholder="Nazwa Postaci"
          {...register("character_name", {
            required: true,
            maxLength: 25,
          })}
        />
      </form>
    </div>
  );
}
export default CharacherNameForm;
