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
import { RACES } from "../../consts/const";

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

  const strengthValue =
    RACES[pickedRaceCard]?.strength + RACES[pickedClassCard]?.strength;
  const dexterityValue =
    RACES[pickedRaceCard]?.dexterity + RACES[pickedClassCard]?.dexterity;
  const intelligenceValue =
    RACES[pickedRaceCard]?.intelligence + RACES[pickedClassCard]?.intelligence;

  const onSubmit = (data) => {
    data["skills"] = {
      strength: count1 + strengthValue,
      dexterity: count2 + dexterityValue,
      intelligence: count3 + intelligenceValue,
    };
    data["avatar"] = selectedImage;
    handleSubmitAttributes(data);
  };

  const handleImageSave = (image) => {
    setSelectedImage(image);
  };

  return (
    <FormProvider {...methods}>
      <div className="container">
        <div className="avatar-and-skills">
          <div className="avatar-container">
            <AvatarForm image={selectedImage} onImageSave={handleImageSave} />
          </div>
          <div className="skills-container">
            <SkillsForm
              count1={count1}
              count2={count2}
              count3={count3}
              setCount1={setCount1}
              setCount2={setCount2}
              setCount3={setCount3}
              strengthValue={strengthValue}
              dexterityValue={dexterityValue}
              intelligenceValue={intelligenceValue}
            />
          </div>
        </div>
        <div className="right-section">
          <div className="forms-top">
            <SexForm />
            <CharacterNameForm onSubmit={onSubmit} />
            <RangeForm />
            <DynastyForm onSubmit={onSubmit} />
            <FamilyForm onSubmit={onSubmit} />
            <RealmForm onSubmit={onSubmit} />
          </div>
          <div className="forms-bottom">
            <FaithForm />
            <TestForm />
            <Biography />
            <Equipment />
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="submit-button"
                type="submit"
                value="Prześlij formularz"
              />
            </form>
          </div>
        </div>
      </div>
    </FormProvider>
  );
}
export default AttributesPage;
