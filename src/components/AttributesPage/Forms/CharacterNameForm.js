import React from "react";
import "./CharacterNameForm.css";
import { useFormContext } from "react-hook-form";

function CharacterNameForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();
  console.log(errors);
  return (
    <div className="attributes_col_character_name">
      <h1>Nazwa Postaci</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="css-input"
          type="text"
          placeholder="Nazwa Postaci"
          {...register("character_name", {
            required: "To pole jest wymagane",
            maxLength: 45,
          })}
        />
      </form>
      {errors.character_name && (
        <p className="errors_message">{errors.character_name.message}</p>
      )}
    </div>
  );
}
export default CharacterNameForm;
