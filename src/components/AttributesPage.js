import React, { useState } from "react";
import "../App.css";
import "./AttributesPage.css";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

function AttributesPage() {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch("example"));

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
    <>
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
            <div>
              <FormControl sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="demo-simple-select-autowidth-label">
                  Wiara
                </InputLabel>
                <Select
                  {...register("faith", { required: true })}
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  autoWidth
                  label="Wiara"
                >
                  <MenuItem value="Brak">
                    <em>Brak</em>
                  </MenuItem>
                  <MenuItem value="Wiara1">Wiara1</MenuItem>
                  <MenuItem value="Wiara2">Wiara2</MenuItem>
                  <MenuItem value="Wiara3">Wiara3</MenuItem>
                  <MenuItem value="Wiara4">Wiara4</MenuItem>
                  <MenuItem value="Wiara5">Wiara1Wiara1Wiara1</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="attributes_col_culture">
            <h1>Kultura</h1>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Kultura
              </InputLabel>
              <Select
                {...register("culture", { required: true })}
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                autoWidth
                label="Kultura"
              >
                <MenuItem value="Brak">
                  <em>Brak</em>
                </MenuItem>
                <MenuItem value="Kultura1">Kultura1</MenuItem>
                <MenuItem value="Kultura2">Kultura2</MenuItem>
                <MenuItem value="Kultura3">Kultura3</MenuItem>
                <MenuItem value="Kultura4">Kultura4</MenuItem>
                <MenuItem value="Kultura5">Kultura1Kultura1Kultura1</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="attributes_col_character_name">
            <h1>Nazwa Postaci</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                id="outlined-basic"
                label="Nazwa Postaci"
                variant="outlined"
                {...register("character_name", { required: true })}
              />
            </form>
          </div>
          <div className="attributes_col_dynasty">
            <h1>Dynastia</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                id="outlined-basic"
                label="Dynastia"
                variant="outlined"
                {...register("dynasty", { required: true })}
              />
            </form>
          </div>
          <div className="attributes_col_realm">
            <h1>Królestwo</h1>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Królestwo
              </InputLabel>
              <Select
                {...register("realm", { required: true })}
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                autoWidth
                label="Królestwo"
              >
                <MenuItem value="">
                  <em>Brak</em>
                </MenuItem>
                <MenuItem value="Królestwo1">Królestwo1</MenuItem>
                <MenuItem value="Królestwo2">Królestwo2</MenuItem>
                <MenuItem value="Królestwo3">Królestwo3</MenuItem>
                <MenuItem value="Królestwo4">Królestwo4</MenuItem>
                <MenuItem value="Królestwo5">
                  Królestwo1Królestwo1Królestwo1
                </MenuItem>
              </Select>
            </FormControl>
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
            <Box sx={{ width: 150 }}>
              <Slider
                {...register("age", {})}
                aria-label="Age"
                defaultValue={30}
                color="secondary"
                valueLabelDisplay="on"
                min={12}
                max={85}
              />
              <p style={{ float: "right" }}>{watch("age")}</p>
            </Box>
          </div>
          <div className="attributes_col_weight">
            <h1>Waga</h1>
            <Box sx={{ width: 150 }}>
              <Slider
                {...register("weight", {})}
                aria-label="Weight"
                defaultValue={75}
                color="secondary"
                valueLabelDisplay="on"
                min={20}
                max={120}
              />
              <p style={{ float: "right" }}>{watch("weight")}</p>
            </Box>
          </div>
          <div className="attributes_col_traits">
            <h1>Umiejętności</h1>
          </div>
          <div className="attributes_col_skills">
            <h1>Atrybuty</h1>
            <h1>{count}</h1>
            <div className="test">
              <form onSubmit={handleSubmit(onSubmit)}>
                <AddCircleOutlineIcon
                  onClick={IncNum}
                  {...register("Skills", {})}
                ></AddCircleOutlineIcon>
                <RemoveCircleOutlineIcon
                  onClick={DecNum}
                ></RemoveCircleOutlineIcon>
              </form>
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
    </>
  );
}
export default AttributesPage;
