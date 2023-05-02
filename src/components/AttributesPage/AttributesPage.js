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
import SkillsForm from "./Forms/SkillsForm";

function AttributesPage({ pickedRaceCard, pickedClassCard }) {
  const methods = useForm();
  const { handleSubmit } = methods;
  const onSubmit = (data, avatar) => {
    data["skills"] = {
      strenght: count1,
      dexterity: count2,
      intelligence: count3,
    };
    avatar = image;
    console.log(data);
  };

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const [image, setImage] = useState("");
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
          <AvatarForm image={image} setImage={setImage} />
          <SkillsForm
            count1={count1}
            count2={count2}
            count3={count3}
            setCount1={setCount1}
            setCount2={setCount2}
            setCount3={setCount3}
          />
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
      <div className="Test">
        <p style={{ color: "yellow" }}>Kliknięto Rase {pickedRaceCard}</p>
        <p style={{ color: "red" }}>Kliknięto Klase {pickedClassCard}</p>
      </div>
    </FormProvider>
  );
}
export default AttributesPage;
