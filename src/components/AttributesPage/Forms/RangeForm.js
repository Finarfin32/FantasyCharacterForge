import React from "react";
import "../../../App.css";
import "../AttributesPage.css";
import { useFormContext } from "react-hook-form";

function RangeForm() {
  const { register, watch } = useFormContext();
  return (
    <>
      <div className="attributes_col_age">
        <h1>
          Wiek <p style={{ float: "right" }}>{watch("age")}</p>
        </h1>
        <span>
          <i className="arrow left"></i>
        </span>
        <input
          className="istyle"
          min="12"
          max="85"
          type="range"
          placeholder="age"
          {...register("age", {})}
        />
        <span>
          <i className="arrow right"></i>
        </span>
      </div>
      <div className="attributes_col_weight">
        <h1>
          Waga <p style={{ float: "right" }}>{watch("weight")}</p>
        </h1>

        <span>
          <i className="arrow left"></i>
        </span>
        <input
          className="istyle"
          min="20"
          max="120"
          type="range"
          placeholder="weight"
          {...register("weight", {})}
        />
        <span>
          <i className="arrow right"></i>
        </span>
      </div>
    </>
  );
}

export default RangeForm;
