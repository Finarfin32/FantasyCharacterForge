import React from "react";
import "../../../App.css";
import "../AttributesPage.css";
import { useFormContext } from "react-hook-form";

// Komponent SexForm umożliwia użytkownikowi wybór płci postaci za pomocą przycisków radiowych
function SexForm() {
  // Pobranie funkcji register z kontekstu formularza react-hook-form
  const { register } = useFormContext();
  return (
    <div className="attributes_col_sex">
      <div className="flex items-center mb-4">
        {/* Przycisk radiowy do wyboru płci: Mężczyzna */}
        <input
          {...register("sex", { required: true })}
          id="default-radio-1"
          type="radio"
          value="Mężczyzna"
          name="default-radio"
          className="cursor-pointer w-4 h-4 text-goldd bg-gray-100 border-gray-300 focus:ring-amber-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 hover:border-amber-500"
        />
        <label
          htmlFor="default-radio-1"
          className="block ml-3 font-medium text-goldd dark:text-white font-medium"
        >
          Mężczyzna
        </label>
      </div>
      <div className="flex items-center">
        {/* Przycisk radiowy do wyboru płci: Kobieta */}
        <input
          {...register("sex", { required: true })}
          id="default-radio-2"
          type="radio"
          value="Kobieta"
          name="default-radio"
          className="cursor-pointer w-4 h-4 text-goldd bg-gray-100 border-gray-300 focus:ring-amber-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 hover:border-amber-500"
        />
        <label
          htmlFor="default-radio-2"
          className="block ml-3 font-medium text-goldd dark:text-white font-medium"
        >
          Kobieta
        </label>
      </div>
    </div>
  );
}

export default SexForm;
