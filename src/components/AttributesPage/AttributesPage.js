import React, { useState } from "react";
import "../../App.css";
import "./AttributesPage.css";
import { useForm, FormProvider } from "react-hook-form";
import CultureForm from "./Forms/CultureForm";
import PopupForm from "./Forms/PopupForm";
import DynastyForm from "./Forms/DynastyForm";
import SexForm from "./Forms/SexForm";
import FaithForm from "./Forms/FaithForm";
import CharacherNameForm from "./Forms/CharacterNameForm";
import RealmForm from "./Forms/RealmForm";
import AvatarForm from "./Forms/AvatarForm";
import RangeForm from "./Forms/RangeForm";
import FamilyForm from "./Forms/FamilyForm";

function AttributesPage() {
  const methods = useForm();
  const { handleSubmit } = methods;
  const onSubmit = (data) => {
    data["skills"] = count; // and so on with other +/- skills
    console.log(data);
  };

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
    <FormProvider {...methods}>
      <div className="container_attributes">
        <div className="TopBar"></div>
        <div className="left_attributes_grid">
          <SexForm />
          <FaithForm />
          <CultureForm onSubmit={onSubmit} />
          <CharacherNameForm onSubmit={onSubmit} />
          <DynastyForm onSubmit={onSubmit} />
          <RealmForm />
        </div>
        <div className="mid_attributes_grid">
          <AvatarForm />
          <div className="attributes_col_skills">
            <h1>Atrybuty</h1>
            <h1>{count}</h1>

            <div className="test">
              <button onClick={IncNum}>Dodaj</button>
              <button onClick={DecNum}>Odejmij</button>
            </div>
          </div>
        </div>

        <div className="right_attributes_grid">
          <div className="attributes_col_empty">
            <h1>Puste</h1>
          </div>
          <RangeForm />
          <div className="attributes_col_traits">
            <h1>Umiejętności</h1>
            <PopupForm onSubmit={onSubmit}></PopupForm>
          </div>
          <FamilyForm />
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
