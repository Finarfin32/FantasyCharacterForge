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
      <label
        for="dynasty"
        className="block mb-2 text-lg font-medium text-goldd dark:text-white font-medium"
      >
        Dynastia
      </label>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="cursor-pointer bg-neutral-900 border border-goldd text-goldd text-base rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-56 p-2.5 hover:border-amber-500"
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
