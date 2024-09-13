import React from "react";
import { useRef, useState, useEffect } from "react";
import styles from "./AvatarForm.css";
import "./AvatarForm.css";
import "./CharacterNameForm.css";

function AvatarForm({ image, onImageSave }) {
  const [preview, setPreview] = useState();
  const [selectedImage, setSelectedImage] = useState();
  const [avatarHelperText, setAvatarHelperText] = useState("");
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
    setAvatarHelperText("");
  };

  return (
    <div className="attributes_col_avatar">
      <div className={styles.container} id="ImageTest">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center mt-4"
        >
          <label
            htmlFor="Avatar"
            className="attributes_col_avatar_text block mb-2 font-medium text-goldd dark:text-white font-medium"
          >
            Wyświetlanie awatara
          </label>
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
          {avatarHelperText && (
            <p className="errors_message">{avatarHelperText}</p>
          )}
          {!avatarHelperText && preview && <p className="message">Zapisano</p>}
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
                setAvatarHelperText("Aby potwierdzić zapisz zdjęcie");
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
