import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Home from "../Home";
import axios from "axios";
import Profile from "../Profile/Profile";
import CreateForm from "./CreateForm";

const Dashboard = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("Home");

  //admin data state create, render and send it to profile props
  const [adminData, setAdminData] = useState([]);

  const loggedAdmin = JSON.parse(localStorage.getItem("adminName"));
  // console.log("loggedAdmin.adminName", loggedAdmin.adminName);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await axios.get(
          "https://feedback-collection-system.onrender.com/auth/admins"
        );
        // console.log("Response", response.data);
        const { adminData } = response.data;

        //like filter the data of an admin based on logged in Admin name and send the data to profile component
        const data = adminData.filter((d) => d.name === loggedAdmin.adminName);
        // console.log(data);

        setAdminData(data);
      } catch (error) {
        console.error("Error fetching forms data", error);
      }
    };

    fetchAdminData();
  }, [loggedAdmin.adminName]);

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/5 bg-white-100 text-black-200 p-4 h-full flex flex-col justify-between">
        <div className="flex items-center  mb-4">
          <img
            src="favicon.svg"
            alt="Admin"
            className="rounded-full h-16 w-16"
          />

          {/* {console.log(adminData)} */}
          {adminData.length > 0 ? (
            <p className="mt-1 ml-2 font-semibold">
              {/* rendering profile name */}
              {adminData[0].name || "Admin Name"}
            </p>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="mb-4">
          <ul>
            <li>
              <a
                href="#"
                className={`block text-xl text-black w-ful shadow hover:shadow-lg py-2 px-4 ' ${
                  currentPage === "Home" ? "bg-blue-200" : ""
                }`}
                onClick={() => handleNavigation("Home")}
              >
                Home
              </a>
            </li>
            <li className="mt-2">
              <a
                href="#"
                className={`block text-xl text-black w-ful shadow hover:shadow-lg py-2 px-4 ' ${
                  currentPage === "Profile" ? "bg-blue-200" : ""
                }`}
                onClick={() => handleNavigation("Profile")}
              >
                Profile
              </a>
            </li>
            <li className="mt-2">
              <a
                href="#"
                className={`block text-xl text-black w-ful shadow hover:shadow-lg py-2 px-4 ' ${
                  currentPage === "CreateForm" ? "bg-blue-200" : ""
                }`}
                onClick={() => handleNavigation("CreateForm")}
              >
                CreateForm
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-auto">
          <Link to="/">
            <button
              onClick={handleLogout}
              className="bg-gradient-to-r from-blue-400 to-red-600 text-white py-2 px-4  rounded-full w-full"
            >
              Logout
            </button>
          </Link>
        </div>
      </div>

      <div className="w-4/5 bg-blue-gray-50 bg-blue-100 p-4 ">
        {currentPage === "Home" && <Home />}
        {currentPage === "Profile" && <Profile adminData={adminData} />}
        {currentPage === 'CreateForm' && <CreateForm />}
      </div>
    </div>
  );
};

export default Dashboard;
