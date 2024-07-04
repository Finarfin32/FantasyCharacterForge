import React, { useEffect, useState } from "react";

function Summary({ formData, pickedRaceCard, pickedClassCard }) {
  const [preview, setPreview] = useState();

  useEffect(() => {
    if (formData["avatar"]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(formData["avatar"]);
    } else {
      setPreview(null);
    }
  }, [formData]);

  return (
    <div
      className="flex justify-center items-center min-h-screen  text-lightText p-4"
      style={{ backgroundImage: 'url("../media/background.jpg")' }}
    >
      <div className="bg-cardBackground rounded-lg shadow-lg p-6 w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-4 text-goldAccent">
          Podsumowanie twoich wyborów
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <p className="mb-2">
              <span className="font-semibold text-goldAccent">Imię: </span>
              {formData["character_name"]}
            </p>
            <p className="mb-2">
              <span className="font-semibold text-goldAccent">Dynastia: </span>
              {formData["dynasty"]}
            </p>
            <p className="mb-2">
              <span className="font-semibold text-goldAccent">Wiara: </span>
              {formData["faith"]}
            </p>
            <p className="mb-2">
              <span className="font-semibold text-goldAccent">Wiek: </span>
              {formData["age"]}
            </p>
            <p className="mb-2">
              <span className="font-semibold text-goldAccent">Waga: </span>
              {formData["weight"]}
            </p>
            <p className="mb-2">
              <span className="font-semibold text-goldAccent">Motywacja: </span>
              {formData["motivations"]}
            </p>
            <p className="mb-2">
              <span className="font-semibold text-goldAccent">Rodzina: </span>
              {formData["family"]}
            </p>
            <p className="mb-2">
              <span className="font-semibold text-goldAccent">Biografia: </span>
              {formData["Biography"]}
            </p>
            <p className="mb-2">
              <span className="font-semibold text-goldAccent">Ekwipunek: </span>
              {formData["Equipment"]}
            </p>
          </div>
          <div className="flex flex-col items-center">
            {preview && (
              <div className="mb-4">
                <img
                  alt="Avatar"
                  src={preview}
                  className="object-cover w-48 h-68 rounded-lg shadow-lg border-2 border-goldAccent"
                />
              </div>
            )}
            <p className="text-goldAccent font-semibold">
              Wybrana Rasa: {pickedRaceCard}
            </p>
            <p className="text-redAccent font-semibold">
              Wybrana Klasa: {pickedClassCard}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
