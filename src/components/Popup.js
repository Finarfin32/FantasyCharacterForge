import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./Popup.css";
import { useFormContext } from "react-hook-form";

function Popup2({ onSubmit }) {
  const { register } = useFormContext();
  return (
    <Popup trigger={<button> Trigger</button>} position="left center">
      <div className="attributes_col_culture">
        <form onSubmit={onSubmit}>
          <h1>Kultura</h1>
          <div className="select">
            <select {...register("test5", { required: true })}>
              <option value="Kultura1">Kultura1</option>
              <option value="Kultura2"> Kultura2</option>
              <option value="Kultura3"> Kultura3</option>
              <option value="Kultura4"> Kultura4</option>
              <option value="Kultura5"> Kultura5</option>
            </select>
            <div className="select_arrow"></div>
          </div>
        </form>
      </div>
    </Popup>
  );
}

export default Popup2;
