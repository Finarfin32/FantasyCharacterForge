import React from "react";
import { useFormContext } from "react-hook-form";
import "./TextArea.css";

function Biography({ onSubmit }) {
  const { register, handleSubmit } = useFormContext();

  return (
    <div className="attributes_col_biography">
      <h1>Biografia</h1>
      <form className="biography_form" onSubmit={handleSubmit(onSubmit)}>
        <textarea
          className="biography_input"
          placeholder="Biografia"
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
