/* eslint-disable react/prop-types */
import eyeOff from "../assets/eyeOff.svg";
import eye from "../assets/eye.svg";

const Eye = ({ inputType, toggleEye }) => {
  const icon = inputType === "password" ? eyeOff : eye;

  return (
    <button onClick={toggleEye} type="button">
      <img src={icon} alt="eyeLogo" />
    </button>
  );
};

export default Eye;
