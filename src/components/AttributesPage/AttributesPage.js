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

// Komponent AttributesPage zarządza wszystkimi formularzami dotyczącymi atrybutów postaci
function AttributesPage({
  pickedRaceCard,
  pickedClassCard,
  handleSubmitAttributes,
}) {
  // Inicjalizacja metod formularza z react-hook-form
  const methods = useForm();
  const { handleSubmit } = methods;

  // Stany do zarządzania punktami atrybutów
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  // Stan do przechowywania wybranego obrazu (awataru)
  const [selectedImage, setSelectedImage] = useState();

  // Obliczanie wartości bonusów atrybutów na podstawie wybranej rasy i klasy
  const strengthValue =
    RACES[pickedRaceCard]?.strength + RACES[pickedClassCard]?.strength;
  const dexterityValue =
    RACES[pickedRaceCard]?.dexterity + RACES[pickedClassCard]?.dexterity;
  const intelligenceValue =
    RACES[pickedRaceCard]?.intelligence + RACES[pickedClassCard]?.intelligence;

  // Funkcja wywoływana po wysłaniu formularza
  const onSubmit = (data) => {
    // Dodanie sumy punktów atrybutów do danych
    data["skills"] = {
      strength: count1 + strengthValue,
      dexterity: count2 + dexterityValue,
      intelligence: count3 + intelligenceValue,
    };
    // Dodanie obrazu (awataru) do danych
    data["avatar"] = selectedImage;
    // Przekazanie wszystkich danych do funkcji nadrzędnej
    handleSubmitAttributes(data);
  };

  // Funkcja obsługująca zapis obrazu (awataru)
  const handleImageSave = (image) => {
    setSelectedImage(image);
  };

  return (
    // Udostępnienie metod formularza wszystkim komponentom potomnym
    <FormProvider {...methods}>
      <div className="container">
        <div className="avatar-and-skills">
          <div className="avatar-container">
            {/* Formularz wyboru i podglądu awataru */}
            <AvatarForm image={selectedImage} onImageSave={handleImageSave} />
          </div>
          <div className="skills-container">
            {/* Formularz rozdzielania punktów atrybutów */}
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
            {/* Formularz wyboru płci */}
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
            {/* Przycisk wysyłający cały formularz */}
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
