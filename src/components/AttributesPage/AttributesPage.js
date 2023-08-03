import React, { useState } from "react";
import "../../App.css";
import "./AttributesPage.css";
import { useForm, FormProvider } from "react-hook-form";
import CultureForm from "./Forms/CultureForm";
import Biography from "./Forms/TextArea";
import DynastyForm from "./Forms/DynastyForm";
import SexForm from "./Forms/SexForm";
import FaithForm from "./Forms/FaithForm";
import CharacterNameForm from "./Forms/CharacterNameForm";
import RealmForm from "./Forms/RealmForm";
import AvatarForm from "./Forms/AvatarForm";
import RangeForm from "./Forms/RangeForm";
import FamilyForm from "./Forms/FamilyForm";
import SkillsForm from "./Forms/SkillsForm";

function AttributesPage({
  pickedRaceCard,
  pickedClassCard,
  handleSubmitAttributes,
}) {
  const methods = useForm();
  const { handleSubmit } = methods;

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  // const [image] = useState("");
  const [selectedImage, setSelectedImage] = useState();

  const onSubmit = (data) => {
    data["skills"] = {
      strenght: count1,
      dexterity: count2,
      intelligence: count3,
    };
    data["avatar"] = selectedImage;
    // console.log(data);
    handleSubmitAttributes(data);
  };

  const handleImageSave = (image) => {
    setSelectedImage(image);
  };

  console.log("Zapisano zdjęcie:", selectedImage);

  return (
    <FormProvider {...methods}>
      <div className="TopBar"></div>
      <div class="grid grid-rows-3 grid-flow-col gap-4">
        <div class="row-span-3 ...">
          <AvatarForm image={selectedImage} onImageSave={handleImageSave} />
          <SkillsForm
            count1={count1}
            count2={count2}
            count3={count3}
            setCount1={setCount1}
            setCount2={setCount2}
            setCount3={setCount3}
          />
        </div>
        <div class="col-span-2 ...">
          <SexForm />
          <CharacterNameForm onSubmit={onSubmit} />
          <DynastyForm onSubmit={onSubmit} />
          <FamilyForm onSubmit={onSubmit} />
        </div>
        <div class="row-span-2 col-span-1 ...">
          <FaithForm />
          <CultureForm onSubmit={onSubmit} />
          <RealmForm />
          <RangeForm />
        </div>
        <div class="row-span-2 col-span-1 ...">
          <Biography />
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="input_Attributes_Page"
              type="submit"
              value="Prześlij formularz"
            />
          </form>
          <p style={{ color: "yellow" }}>Kliknięto Rase {pickedRaceCard}</p>
          <p style={{ color: "red" }}>Kliknięto Klase {pickedClassCard}</p>
        </div>
      </div>
      {/* <div
        className="Footer"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div> */}
    </FormProvider>
  );
}
export default AttributesPage;
