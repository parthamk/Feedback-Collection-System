/* eslint-disable react/prop-types */

import { useState } from "react";
import eyeOff from "../../assets/eyeOff.svg";
import eye from "../../assets/eye.svg";

const ProfileHelper = ({ label, type, value, onSet, disabled = false }) => {
  const [inputType, setInputType] = useState(type);
  
  const [icon, setIcon] = useState(eyeOff);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  function toggleEye() {
    setInputType(inputType === "password" ? "text" : "password");
    setIcon(inputType === "password" ? eye : eyeOff);
  }
  return (
    <div className="mb-4 relative">
      <div className="flex flex-col">
        <label className="font-semibold mt-2">{label}</label>

        <div className="flex relative">
          <input
            type={inputType}
            className="border p-2 rounded-md w-full mt-2 pr-10 "
            value={value}
            onChange={onSet}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            autoComplete="off"
          />

          {type === "password" && !isFocused && (
            <span
              className="absolute top-2 right-2 mt-2 mr-2 cursor-pointer"
              onClick={toggleEye}
            >
              <img src={icon} alt="Toggle Visibility" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileHelper;
