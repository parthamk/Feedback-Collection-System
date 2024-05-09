// eslint-disable-next-line react/prop-types
const ProfileHelper = ({ label, type, value, onSet, disabled = false }) => {
  return (
    <div className="mb-4">
      <div className="flex flex-col">
        <label className="font-semibold mt-2">{label}</label>
        <input
          type={type}
          className="border p-2 rounded-md w-full mt-2 "
          value={value}
          onChange={onSet}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default ProfileHelper;
