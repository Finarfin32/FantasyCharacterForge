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
      <label
        for="character_name"
        className="block mb-2 text-lg font-medium text-orange-200 dark:text-white font-medium"
      >
        Nazwa postaci
      </label>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="bg-neutral-900 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
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
