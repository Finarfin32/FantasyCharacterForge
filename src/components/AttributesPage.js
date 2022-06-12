import React from "react";
import "../App.css";
import { useForm } from "react-hook-form";

function AttributesPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));

  return (
    <div className="container_attributes">
      <div className="left_attributes_grid">
        <div className="attributes_col">
          <h1>LEWO</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue="test" {...register("example")} />
            <input type="submit" />
          </form>
        </div>
        <div className="attributes_col">
          <h1>LEWO</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("exampleRequired", { required: true })} />
            {errors.exampleRequired && <span>This field is required</span>}
          </form>
        </div>
        <div className="attributes_col">
          <h1>LEWO</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue="test" {...register("example2")} />
          </form>
        </div>
        <div className="attributes_col">
          <h1>LEWO</h1>
        </div>
        <div className="attributes_col">
          <h1>LEWO</h1>
        </div>
      </div>
      <div className="mid_attributes_grid">
        <h1>ŚRODEK</h1>
      </div>
      <div className="right_attributes_grid">
        <div className="attributes_col">
          <h1>PRAWO</h1>
        </div>
        <div className="attributes_col">
          <h1>PRAWO</h1>
        </div>
        <div className="attributes_col">
          <h1>PRAWO</h1>
        </div>
        <div className="attributes_col">
          <h1>PRAWO</h1>
        </div>
        <div className="attributes_col">
          <h1>PRAWO</h1>
        </div>
      </div>
    </div>
  );
}
export default AttributesPage;
