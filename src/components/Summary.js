import React, {useEffect, useState} from "react";

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
    <div className="flex justify-center">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1 flex justify-center items-center h-screen">
          <div className="text-center">
            Test 1
            <br />
            Test 2
          </div>
        </div>

        <div className="col-span-1 flex justify-center items-center h-screen">
          <div className="text-center">
            {formData["character_name"]}
            <br />
            {formData["dynasty"]}
            <br />
            {formData["faith"]}
            <br />
            <img alt="Avatar"
              src={preview}
              style={{
                objectFit: "scale-down",
                width: "200px",
                height: "300px",
              }}/>
            <p style={{ color: "yellow" }}>Kliknięto Rase {pickedRaceCard}</p>
            <p style={{ color: "red" }}>Kliknięto Klase {pickedClassCard}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
