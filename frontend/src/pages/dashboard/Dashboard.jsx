import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import axios from 'axios';

// import { jwtDecode } from "jwt-decode";


const Dashboard = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("Home");
  const [adminName, setAdminName] = useState("");

  useEffect(() => {
    // const token = localStorage.getItem("token");
    // if (token) {
    //   const decoded = jwtDecode(token);
    //   setAdminName(decoded.name);
    // }
    // // 1. alert, 2. token 3, rediecting dash, 4, after dash 
    // axios.get("http://localhost:8000/auth/login", {
    //   headers: {Authorization: `Bearer ${token}`},
    // })
    // .then((response) => {
    //   console.log(response);
    //   setAdminName(response.data.user.adminName);
    // })
    // .catch((error) => {
    //   console.error("Error fetching user data", error);
    // })
    const loggedAdmin = JSON.parse(localStorage.getItem("adminName"));
    console.log("loggedAdmin.adminName",loggedAdmin.adminName);
    setAdminName(loggedAdmin.adminName);
  }, []);

  const handleNavigation = (page) => {
    setCurrentPage(page)
  }

  const handleLogout = () => {
    localStorage.clear();
    navigate("/")
  }

  return (
    <div className='flex h-screen'>
      <div className='w-1/5 bg-white-100 text-black-200 p-4 h-full flex flex-col justify-between'>
        <div className='flex items-center  mb-4'>
          <img src="https://w7.pngwing.com/pngs/177/551/png-transparent-user-interface-design-computer-icons-default-stephen-salazar-graphy-user-interface-design-computer-wallpaper-sphere-thumbnail.png" alt="Admin" className="rounded-full h-16 w-16" />
          <p className='ml-4 font-bold '>{adminName || "Admin Name"}</p>
        </div>
        <div className='mb-4'>
          <ul>
            <li><a href="" className={`block text-xl text-black w-ful shadow hover:shadow-lg py-2 px-4 ' ${currentPage === "Home" ? "bg-blue-200" : ""}`} onClick={() => handleNavigation('Home')}>Home</a></li>
            <li className="mt-2"><a href="#" className={`block text-xl text-black w-ful shadow hover:shadow-lg py-2 px-4 ' ${currentPage === "Profile" ? "bg-blue-200" : ""}`} onClick={() => handleNavigation('Profile')}>Profile</a></li>
          </ul>
        </div>
        <div className='mt-auto'>
          <Link to="/">
            <button className='bg-gradient-to-r from-blue-400 to-red-600 text-white py-2 px-4  rounded-full w-full' onClick={handleLogout}>Logout</button>
          </Link>
        </div>

      </div>

      <div className='w-4/5 bg-blue-gray-50 bg-blue-100 p-4 h-full'>
        {currentPage === 'Home' && (
          <div>
            <Home />
          </div>
        )}
        {currentPage === 'Profile' && (
          <div>
            <Profile />
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard