import React from "react";
import { useRef, useState, useEffect } from "react";
import styles from "./AvatarForm.css";
import "./AvatarForm.css";

function AvatarForm({ image, onImageSave }) {
  const [preview, setPreview] = useState();
  const [selectedImage, setSelectedImage] = useState();
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

  const handleSubmit = (event) => {
    event.preventDefault();
    onImageSave(selectedImage);
  };

  return (
    <div className="attributes_col_avatar">
      <label
        for="Avatar"
        className="attributes_col_avatar_text block mb-2 text-lg font-medium text-goldd dark:text-white font-medium"
      >
        Wyświetlanie awatara
      </label>
      <div className={styles.container} id="ImageTest">
        <form onSubmit={handleSubmit}>
          {preview && (
            <img
              alt="Avatar"
              src={preview}
              style={{
                objectFit: "scale-down",
                width: "200px",
                height: "300px",
              }}
            />
          )}
          <div className="ButtonTest">
            <button
              className="avatarButtons px-3 py-2 text-xs font-medium text-center text-goldd border border-goldd bg-neutral-900 rounded-lg hover:bg-neutral-900 focus:ring-4 focus:outline-none focus:ring-amber-500 hover:border-amber-500"
              type="submit"
            >
              Zapisz
            </button>
            <button
              className="avatarButtons px-3 py-2 text-xs font-medium text-center text-goldd border border-goldd bg-neutral-900 rounded-lg hover:bg-neutral-900 focus:ring-4 focus:outline-none focus:ring-amber-500 hover:border-amber-500"
              onClick={(event) => {
                event.preventDefault();
                fileInputRef.current.click();
              }}
            >
              Dodaj zdjęcie
            </button>
          </div>

          <input
            type="file"
            style={{ display: "none" }}
            ref={fileInputRef}
            accept="image/*"
            onChange={(event) => {
              const file = event.target.files[0];
              if (file && file.type.substring(0, 5) === "image") {
                setSelectedImage(file);
                setPreview(URL.createObjectURL(file));
              } else {
                setSelectedImage(null);
                setPreview(null);
              }
            }}
          />
        </form>
      </div>
    </div>
  );
}
export default AvatarForm;
