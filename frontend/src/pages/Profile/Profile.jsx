/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import ProfileHelper from "./ProfileHelper";
import Spinner from "../../Spinner";

const Profile = ({ adminData }) => {
  const [loading, setLoading] = useState("true");
  const [avatar, setAvatar] = useState(null);
  const [editData, setEditData] = useState({
    name: adminData[0].name || "",
    email: adminData[0].email || "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  function handleChange(identifier, value) {
    setEditData((prevValue) => ({
      ...prevValue,
      [identifier]: value,
    }));
  }

  const handleAvatarChange = (file) => {
    setAvatar(file);
  };

  function handleSubmit(e) {
    e.preventDefault();
    // console.log("Update details submitted", editData);
  }

  return loading ? (
    <Spinner />
  ) : (
    <div>
      <h2 className="font-bold mt-8 mb-8 text-3xl justify-center items-center flex">
        <span>Update</span>
        <span className="text-red-500 ml-2">Profile</span>
      </h2>

      <div className="flex items-start justify-center mt-8">
        {/* Left section  */}
        <div className="w-1/5 bg-white text-black-200 p-4  flex flex-col justify-between mr-8 ml-8]]]  items-center rounded-md shadow border border-red-500 ">
          {avatar ? (
            <img
              src={URL.createObjectURL(avatar)}
              alt="admin"
              className="rounded-full h-20 w-20 mt-4"
            />
          ) : (
            <img
              src="https://w7.pngwing.com/pngs/177/551/png-transparent-user-interface-design-computer-icons-default-stephen-salazar-graphy-user-interface-design-computer-wallpaper-sphere-thumbnail.png"
              alt="admin"
              className="rounded-full h-20 w-20 mt-4 "
            />
          )}
          {/* {console.log(adminData[0])} */}

          <p className="mt-4 font-semibold" key={adminData[0]._id}>
            {adminData[0].name !== "" ? adminData[0].name : "Admin Name"}{" "}
          </p>
          <input
            type="file"
            id="choose-avatar"
            name="choose-avatar"
            onChange={(e) => handleAvatarChange(e.target.files[0])}
            style={{ display: "none" }}
          />
          <label
            htmlFor="choose-avatar"
            className="bg-red-400 hover:bg-red-500 text-white py-2 px-4 rounded-full width-full mt-7 cursor-pointer"
          >
            Change Avatar
          </label>

          <p className="ml-2 mt-4">{avatar ? avatar.name : "No file chosen"}</p>
        </div>

        {/* Right section */}
        <div className="w-3/5  bg-white h-2/3 text-black-200 p-4  shadow border border-blue-400 rounded-md">
          <form onSubmit={handleSubmit}>
            {/* {console.log(adminData)} */}

            <h2 className="font-bold mb-4 text-center">Edit Details</h2>

            <ProfileHelper
              label="Name"
              type="text"
              value={editData.name}
              disabled
            />

            <ProfileHelper
              label="Email"
              type="text"
              value={editData.email}
              disabled
            />
            <ProfileHelper
              type="password"
              label="Old Password"
              value={editData.oldPassword}
              onSet={(e) => handleChange("oldPassword", e.target.value)}
            />
            <ProfileHelper
              type="password"
              label="New Password"
              value={editData.newPassword}
              onSet={(e) => handleChange("newPassword", e.target.value)}
            />
            <ProfileHelper
              type="password"
              label="Confirm Password"
              value={editData.confirmPassword}
              onSet={(e) => handleChange("confirmPassword", e.target.value)}
            />

            <button className="bg-blue-400 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
