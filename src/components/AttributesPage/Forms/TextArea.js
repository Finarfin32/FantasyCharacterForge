import React from "react";
import "../../../App.css";
import "../AttributesPage.css";
import { useFormContext } from "react-hook-form";

function Biography({ onSubmit }) {
  const { register, handleSubmit } = useFormContext();
  return (
    <div className="attributes_col_biography">
      <h1>Biografia</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="css-input"
          type="text"
          placeholder="Biografia"
          {...register("Biography", {
            maxLength: 200,
          })}
        />
      </form>
    </div>
  );
}
export default Biography;
