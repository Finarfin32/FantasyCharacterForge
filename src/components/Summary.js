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
  console.log(formData["avatar"]);
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1 flex justify-center items-center h-screen">
          <div className="text-center">
            <h2>Podsumowanie twoich wyborów</h2>
            <p>Imię: {formData["character_name"]}</p>
            <p>Dynastia: {formData["dynasty"]}</p>
            <p>Wiara: {formData["faith"]}</p>
            <p>Wiek: {formData["age"]}</p>
            <p>Waga: {formData["weight"]}</p>
            <p>Motywacja: {formData["motivations"]}</p>
            <p>Rodzina: {formData["family"]}</p>
            <p>Biografia: {formData["Biography"]}</p>
            <p>Ekwipunek: {formData["Equipment"]}</p>
            {preview && (
              <div>
                <img
                  alt="Avatar"
                  src={preview}
                  style={{
                    objectFit: "scale-down",
                    width: "200px",
                    height: "300px",
                  }}
                />
              </div>
            )}
            <p style={{ color: "yellow" }}>Wybrana Rasa: {pickedRaceCard}</p>
            <p style={{ color: "red" }}>Wybrana Klasa: {pickedClassCard}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
