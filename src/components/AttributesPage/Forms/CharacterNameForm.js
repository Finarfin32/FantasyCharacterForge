import React from "react";
import "./CharacterNameForm.css";
import { useFormContext } from "react-hook-form";

function CharacterNameForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="attributes_col_character_name">
      <label
        for="character_name"
        className="block mb-2 text-lg font-medium text-goldd dark:text-white font-medium"
      >
        Nazwa postaci
      </label>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="cursor-pointer bg-neutral-900 border border-goldd text-goldd text-base rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-72 p-2.5 hover:border-amber-500"
          type="text"
          placeholder="Nazwa postaci"
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
