import React, { useState } from "react";
import "../App.css";
import "./AttributesPage.css";
import { useForm, FormProvider } from "react-hook-form";
import CultureForm from "./CultureForm"

function AttributesPage() {
  const methods = useForm();
    const { register, handleSubmit, watch } = methods;
  const onSubmit = (data) => {
    data["skills"] = count; // and so on with other +/- skills
    console.log(data);
  }

  const [count, setCount] = useState(0);
  const IncNum = () => {
    setCount(count + 1);
  };
  const DecNum = () => {
    if (count > 0) setCount(count - 1);
    else {
      setCount(0);
    }
  };

  return (
       <FormProvider {...methods} >
    <div className="container_attributes">
      <div className="TopBar"></div>
      <div className="left_attributes_grid">
        <div className="attributes_col_sex">
          <h1>Płeć</h1>
          <input
            {...register("sex", { required: true })}
            type="radio"
            value="Mężczyzna"
          />
          <input
            {...register("sex", { required: true })}
            type="radio"
            value="Kobieta"
          />
        </div>
        <div className="attributes_col_faith">
          <h1>Wiara</h1>
          <div className="select">
            <select {...register("faith", { required: true })}>
              <option value="Wiara1">Wiara1</option>
              <option value="Wiara2">Wiara2</option>
              <option value="Wiara3">Wiara3</option>
              <option value="Wiara4">Wiara4</option>
              <option value="Wiara5">Wiara5</option>
            </select>
            <div class="select_arrow"></div>
          </div>
        </div>
        <CultureForm onSubmit={onSubmit}/>
        <div className="attributes_col_character_name">
          <h1>Nazwa Postaci</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="css-input"
              type="text"
              placeholder="Nazwa Postaci"
              {...register("character_name", {
                required: true,
                maxLength: 25,
              })}
            />
          </form>
        </div>
        <div className="attributes_col_dynasty">
          <h1>Dynastia</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="css-input"
              type="text"
              placeholder="Dynastia"
              {...register("dynasty", { required: true, maxLength: 20 })}
            />
          </form>
        </div>
        <div className="attributes_col_realm">
          <h1>Królestwo</h1>
          <div className="select">
            <select {...register("realm", { required: true })}>
              <option value="Królestwo1">Królestwo1</option>
              <option value="Królestwo2"> Królestwo2</option>
              <option value="Królestwo3"> Królestwo3</option>
              <option value="Królestwo4"> Królestwo4</option>
              <option value="Królestwo5">Królestwo5</option>
            </select>
            <div class="select_arrow"></div>
          </div>
        </div>
      </div>

      <div className="mid_attributes_grid">
        <h1>Wyświetlanie awatara</h1>
      </div>
      <div className="right_attributes_grid">
        <div className="attributes_col_empty">
          <h1>Puste</h1>
        </div>
        <div className="attributes_col_age">
          <h1>
            Wiek <p style={{ float: "right" }}>{watch("age")}</p>
          </h1>
          <span>
            <i class="arrow left"></i>
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
            <i class="arrow right"></i>
          </span>
        </div>
        <div className="attributes_col_weight">
          <h1>
            Waga <p style={{ float: "right" }}>{watch("weight")}</p>
          </h1>

          <span>
            <i class="arrow left"></i>
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
            <i class="arrow right"></i>
          </span>
        </div>
        <div className="attributes_col_traits">
          <h1>Umiejętności</h1>
        </div>
        <div className="attributes_col_skills">
          <h1>Atrybuty</h1>
          <h1>{count}</h1>

          <div className="test">
            <button onClick={IncNum}>
              Dodaj
            </button>
            <button onClick={DecNum}>Odejmij</button>
          </div>
        </div>
        <div className="attributes_col_family">
          <h1>Rodzina</h1>
        </div>
      </div>
      <div
        className="Footer"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="submit" />
        </form>
      </div>
    </div>
       </FormProvider>
  );
}
export default AttributesPage;
