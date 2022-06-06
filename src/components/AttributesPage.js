import React from "react";
import "../App.css";
import background_attributes from "../media/background_attributes.jpg";

function AttributesPage() {
  return (
    <div className="container_attributes container-fluid h-100 g-0">
      <div className="attributes_grid_row row mx-auto h-100 g-0">
        <div className="attributes_grid col-md-4">
          <div className="attributes_col col-md-12">
            <h1>LEWO</h1>
          </div>
          <div className="attributes_col col-md-12 ">
            <h1>LEWO</h1>
          </div>
          <div className="attributes_col col-md-12">
            <h1>LEWO</h1>
          </div>
          <div className="attributes_col col-md-12 ">
            <h1>LEWO</h1>
          </div>
          <div className="attributes_col col-md-12 ">
            <h1>LEWO</h1>
          </div>
        </div>
        <div className="attributes_grid col-md-4 ">
          <h1>ŚRODEK</h1>
        </div>
        <div className="attributes_grid col-md-4 ">
          <div className="attributes_col col-md-12 ">
            <h1>PRAWO</h1>
          </div>
          <div className="attributes_col col-md-12">
            <h1>PRAWO</h1>
          </div>
          <div className="attributes_col col-md-12">
            <h1>PRAWO</h1>
          </div>
          <div className="attributes_col col-md-12">
            <h1>PRAWO</h1>
          </div>
          <div className="attributes_col col-md-12">
            <h1>PRAWO</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AttributesPage;
