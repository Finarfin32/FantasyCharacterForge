import React from "react";
import "../App.css";
import "./AttributesPage.css";
import { useFormContext } from "react-hook-form";

function CultureForm({ onSubmit }) {
    const { register} = useFormContext();
  return (
      <div className="attributes_col_culture">
          <form onSubmit={onSubmit}>
          <h1>Kultura</h1>
          <div className="select">
              <select {...register("culture", {required: true})}>
                  <option value="Kultura1">Kultura1</option>
                  <option value="Kultura2"> Kultura2</option>
                  <option value="Kultura3"> Kultura3</option>
                  <option value="Kultura4"> Kultura4</option>
                  <option value="Kultura5"> Kultura5</option>
              </select>
              <div className="select_arrow"></div>
          </div></form>
      </div>
  );
}

export default CultureForm;
