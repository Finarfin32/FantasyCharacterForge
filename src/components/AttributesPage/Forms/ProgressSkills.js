import React from "react";

function ProgressSkills() {
  const progressStyle = {
    width: "45%",
  };

  return (
    <>
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-blue-700 dark:text-white">
          Pasek umiejętności
        </span>
        <span className="text-sm font-medium text-blue-700 dark:text-white">
          Obecne punkty
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={progressStyle}
        ></div>
      </div>
    </>
  );
}

export default ProgressSkills;
