import React from "react";
import "../../../App.css";
import "../AttributesPage.css";
import { useFormContext } from "react-hook-form";

function FamilyForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="attributes_col_family">
      <label
        for="family"
        className="block mb-2 text-lg font-medium text-goldd dark:text-white font-medium"
      >
        Rodzina
      </label>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="bg-neutral-900 border border-goldd text-goldd text-base rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-72 p-2.5 hover:border-amber-500"
          type="text"
          placeholder="Rodzina"
          {...register("family", {
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
export default FamilyForm;
