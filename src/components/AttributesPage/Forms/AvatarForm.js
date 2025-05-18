import React from "react";
import { useRef, useState, useEffect } from "react";
import styles from "./AvatarForm.css";
import "./AvatarForm.css";
import "./CharacterNameForm.css";

// Komponent AvatarForm umożliwia użytkownikowi dodanie i zapisanie zdjęcia (awataru) postaci
function AvatarForm({ image, onImageSave }) {
  // Stan przechowujący podgląd wybranego zdjęcia
  const [preview, setPreview] = useState();
  // Stan przechowujący wybrany plik obrazu
  const [selectedImage, setSelectedImage] = useState();
  // Tekst pomocniczy wyświetlany pod przyciskami (np. komunikaty o błędach lub sukcesie)
  const [avatarHelperText, setAvatarHelperText] = useState("");
  // Referencja do ukrytego inputa typu file
  const fileInputRef = useRef();

  // Efekt aktualizujący podgląd zdjęcia, gdy zmieni się przekazany obraz (image)
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

  // Obsługa zapisu zdjęcia (przekazuje wybrany plik do funkcji onImageSave z propsów)
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
          {/* Etykieta formularza */}
          <label
            htmlFor="Avatar"
            className="attributes_col_avatar_text block mb-2 font-medium text-goldd dark:text-white font-medium"
          >
            Wyświetlanie awatara
          </label>
          <div className="ButtonTest">
            {/* Przycisk zapisujący wybrane zdjęcie */}
            <button
              className="avatarButtons px-3 py-2 text-xs font-medium text-center text-goldd border border-goldd bg-neutral-900 rounded-lg hover:bg-neutral-900 focus:ring-4 focus:outline-none focus:ring-amber-500 hover:border-amber-500"
              type="submit"
            >
              Zapisz
            </button>
            {/* Przycisk otwierający okno wyboru pliku (input file) */}
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
          {/* Komunikaty pomocnicze */}
          {avatarHelperText && (
            <p className="errors_message">{avatarHelperText}</p>
          )}
          {/* Komunikat o zapisaniu zdjęcia */}
          {!avatarHelperText && preview && <p className="message">Zapisano</p>}
          {/* Podgląd wybranego zdjęcia */}
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

          {/* Ukryty input do wyboru pliku graficznego */}
          <input
            type="file"
            style={{ display: "none" }}
            ref={fileInputRef}
            accept="image/*"
            onChange={(event) => {
              const file = event.target.files[0];
              // Sprawdzenie, czy wybrany plik jest obrazem
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
