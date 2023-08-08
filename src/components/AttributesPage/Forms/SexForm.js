import React from "react";
import "../../../App.css";
import "../AttributesPage.css";
import { useFormContext } from "react-hook-form";

function SexForm() {
  const { register } = useFormContext();
  return (
    <div className="attributes_col_sex">
      <div className="flex items-center mb-4">
        <input
          {...register("sex", { required: true })}
          id="default-radio-1"
          type="radio"
          value="Mężczyzna"
          name="default-radio"
          className="w-4 h-4 text-goldd bg-gray-100 border-gray-300 focus:ring-amber-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 hover:border-amber-500"
        />
        <label
          for="default-radio-1"
          className="block mb-2 text-lg font-medium text-goldd dark:text-white font-medium"
        >
          Mężczyzna
        </label>
      </div>
      <div className="flex items-center">
        <input
          {...register("sex", { required: true })}
          checked
          id="default-radio-2"
          type="radio"
          value="Kobieta"
          name="default-radio"
          className="w-4 h-4 text-goldd bg-gray-100 border-gray-300 focus:ring-amber-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 hover:border-amber-500"
        />
        <label
          for="default-radio-2"
          className="block mb-2 text-lg font-medium text-goldd dark:text-white font-medium"
        >
          Kobieta
        </label>
      </div>
    </div>
  );
}

export default SexForm;
