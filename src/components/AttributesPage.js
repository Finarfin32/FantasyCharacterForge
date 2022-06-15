import React, { useState } from "react";
import "../App.css";
import "./AttributesPage.css";
import { useForm } from "react-hook-form";

function AttributesPage() {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch("example"));

  // const [count, setCount] = useState(0);
  // const IncNum = () => {
  //   setCount(count + 1);
  // };
  // const DecNum = () => {
  //   if (count > 0) setCount(count - 1);
  //   else {
  //     setCount(0);
  //   }
  // };

  return (
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
          <select {...register("faith", { required: true })}>
            <option value="Wiara1">Wiara1</option>
            <option value="Wiara2">Wiara2</option>
            <option value="Wiara3">Wiara3</option>
            <option value="Wiara4">Wiara4</option>
            <option value="Wiara5">Wiara5</option>
          </select>
        </div>

        <div className="attributes_col_culture">
          <h1>Kultura</h1>
          <select {...register("culture", { required: true })}>
            <option value="Kultura1">Kultura1</option>
            <option value="Kultura2"> Kultura2</option>
            <option value="Kultura3"> Kultura3</option>
            <option value="Kultura4"> Kultura4</option>
            <option value="Kultura5"> Kultura5</option>
          </select>
        </div>
        <div className="attributes_col_character_name">
          <h1>Nazwa Postaci</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="character_name"
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
              type="text"
              placeholder="dynasty"
              {...register("dynasty", { required: true, maxLength: 20 })}
            />
          </form>
        </div>
        <div className="attributes_col_realm">
          <h1>Królestwo</h1>
          <select {...register("realm", { required: true })}>
            <option value="Królestwo1">Królestwo1</option>
            <option value="Królestwo2"> Królestwo2</option>
            <option value="Królestwo3"> Królestwo3</option>
            <option value="Królestwo4"> Królestwo4</option>
            <option value="Królestwo5">Królestwo5</option>
          </select>
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
          <h1>Wiek</h1>
          <input
            min="12"
            max="85"
            type="range"
            placeholder="age"
            {...register("age", {})}
          />
          <p style={{ float: "right" }}>{watch("age")}</p>
        </div>
        <div className="attributes_col_weight">
          <h1>Waga</h1>
          <input
            min="20"
            max="120"
            type="range"
            placeholder="weight"
            {...register("weight", {})}
          />
          <p style={{ float: "right" }}>{watch("weight")}</p>
        </div>
        <div className="attributes_col_traits">
          <h1>Umiejętności</h1>
        </div>
        <div className="attributes_col_skills">
          <h1>Atrybuty</h1>
          {/* <h1>{count}</h1> */}
          <div className="test">
            {/* <form onSubmit={handleSubmit(onSubmit)}>

                onClick={IncNum}
                {...register("Skills", {})}

                onClick={DecNum}

            </form> */}
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
  );
}
export default AttributesPage;
