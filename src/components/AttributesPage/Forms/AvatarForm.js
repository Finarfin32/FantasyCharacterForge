import React from "react";
import { useRef, useState, useEffect } from "react";
import styles from "./AvatarForm.css";
import "./AvatarForm.css";

function AvatarForm({ image, setImage }) {
  const [preview, setPreview] = useState();
  const fileInputRef = useRef();

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);
  return (
    <div className="attributes_col_avatar">
      <h1>Wyświetlanie awatara</h1>
      <div className={styles.container}>
        <form>
          {preview && (
            <img
              src={preview}
              style={{
                objectFit: "scale-down",
                width: "200px",
                height: "300px",
              }}
            />
          )}
          <button
            onClick={(event) => {
              event.preventDefault();
              fileInputRef.current.click();
            }}
          >
            Dodaj zdjęcie
          </button>

          <input
            type="file"
            style={{ display: "none" }}
            ref={fileInputRef}
            accept="image/*"
            onChange={(event) => {
              const file = event.target.files[0];
              if (file && file.type.substr(0, 5) === "image") {
                setImage(file);
              } else {
                setImage(null);
              }
            }}
          />
        </form>
      </div>
    </div>
  );
}
export default AvatarForm;
