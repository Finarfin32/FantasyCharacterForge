import React, { useState } from "react";
import "../../App.css";
import "./AttributesPage.css";
import { useForm, FormProvider } from "react-hook-form";
import RealmForm from "./Forms/RealmForm";
import Biography from "./Forms/Biography";
import DynastyForm from "./Forms/DynastyForm";
import SexForm from "./Forms/SexForm";
import FaithForm from "./Forms/FaithForm";
import CharacterNameForm from "./Forms/CharacterNameForm";
import TestForm from "./Forms/Motivations";
import AvatarForm from "./Forms/AvatarForm";
import RangeForm from "./Forms/RangeForm";
import FamilyForm from "./Forms/FamilyForm";
import SkillsForm from "./Forms/SkillsForm";
import Equipment from "./Forms/Equipment";

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

  const [selectedImage, setSelectedImage] = useState();

  const onSubmit = (data) => {
    data["skills"] = {
      strenght: count1,
      dexterity: count2,
      intelligence: count3,
    };
    data["avatar"] = selectedImage;
    handleSubmitAttributes(data);
  };

  const handleImageSave = (image) => {
    setSelectedImage(image);
  };

  console.log("Zapisano zdjęcie:", selectedImage);

  return (
    <FormProvider {...methods}>
      <div className="TopBar"></div>
      <div className="grid grid-rows-2 grid-flow-col h-screen backdrop-blur-sm">
        <div className="row-span-2">
          <div className="h-4/6">
            <AvatarForm image={selectedImage} onImageSave={handleImageSave} />
          </div>
          <div className="h-2/6">
            <SkillsForm
              count1={count1}
              count2={count2}
              count3={count3}
              setCount1={setCount1}
              setCount2={setCount2}
              setCount3={setCount3}
              pickedRaceCard={pickedRaceCard}
              pickedClassCard={pickedClassCard}
            />
          </div>
        </div>
        <div className="row-span-2">
          <div className="h-2/6">
            <SexForm />
            <CharacterNameForm onSubmit={onSubmit} />
            <DynastyForm onSubmit={onSubmit} />
            <FamilyForm onSubmit={onSubmit} />
          </div>
          <div className="grid grid-cols-3 h-4/6">
            <div>
              <RealmForm onSubmit={onSubmit} />
              <FaithForm />
              <TestForm />
              <RangeForm />
            </div>
            <div className="col-span-2">
              <Biography />
              <Equipment />
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="cursor-pointer text-goldd hover:text-white border border-goldd hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
                  type="submit"
                  value="Prześlij formularz"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </FormProvider>
  );
}
export default AttributesPage;
