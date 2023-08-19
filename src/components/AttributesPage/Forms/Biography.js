import React from "react";
import { useFormContext } from "react-hook-form";
import "./Biography.css";
import "../AttributesPage.css";

function Biography({ onSubmit }) {
  const { register, handleSubmit } = useFormContext();

  return (
    <div className="attributes_col_biography">
      <label
        htmlFor="message"
        className="block mb-2 text-base font-medium text-goldd"
      >
        Twoja Biografia
      </label>
      <form className="biography_form" onSubmit={handleSubmit(onSubmit)}>
        <textarea
          id="message"
          rows="4"
          className="cursor-pointer block p-2.5 w-full text-sm text-goldd bg-neutral-900 rounded-lg border-goldd border-text-goldd focus:ring-amber-500 focus:border-amber-500 hover:border-amber-500"
          placeholder="Napisz swoją biografię..."
          {...register("Biography", {
            maxLength: 300,
          })}
          style={{ minHeight: "50px", maxHeight: "200px" }}
        />
      </form>
    </div>
  );
}

export default Biography;
