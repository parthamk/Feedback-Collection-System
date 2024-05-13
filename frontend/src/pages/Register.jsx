import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Img from "../assets/signup.png";

const Register = () => {
  const navigate = useNavigate();
  const [fromData, setFromData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFromData({ ...fromData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (fromData.password !== fromData.confirmPassword) {
      toast.error("Password do not match");
      return;
    }

    try {
      const response = await axios.post(
        "https://feedback-collection-system.onrender.com/auth/register",
        fromData
      );
      console.log(response.data);
      toast.success("Registration successful", { duration: 3000 });
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-blue-400 to-blue-100 min-h-screen">
      <Toaster />
      <div className="w-[900px] h-[600px] bg-white rounded-[20px] flex shadow-2xl">
        <div className="w-[70%] h-[600px] flex justify-center items-center rounded-[10px]">
          <img
            className="w-[100%] h-[95%] object-cover rounded-[20px] mix-blend-multiply"
            src={Img}
            alt="image"
          />
        </div>

        <div className="w-[50%] h-[600px] rounded-[20px] flex justify-center items-center m-4">
          <div className="w-[90%] h-[80%] flex flex-col justify-center items-center">
            <div className="w-[100%] h-[85px] flex justify-start items-start flex-col">
              <h1 className="font-semibold text-[40px] text-blue-600">
                Get Started
              </h1>
              <p className="font-semibold">
                Already Have an Account?
                <Link to="/login" className="text-blue-600 font-semibold">
                  Sign in
                </Link>
              </p>
            </div>

            <form
              className="w-[100%] h-[600px] flex justify-around items-center flex-col"
              onSubmit={handleSubmit}
            >
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Enter your Name"
                className="w-[100%] h-[40px] text-start outline-none bg-transparent border-b-2 border-blue-400 shadow-2xl placeholder:text-blue-600 font-semibold"
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email"
                className="w-[100%] h-[40px] text-start outline-none bg-transparent border-b-2 border-blue-400 shadow-2xl placeholder:text-blue-600 font-semibold"
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your Password"
                className="w-[100%] h-[40px] text-start outline-none bg-transparent border-b-2 border-blue-400 shadow-2xl placeholder:text-blue-600 font-semibold"
                onChange={handleChange}
              />
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm your Password"
                className="w-[100%] h-[40px] text-start outline-none bg-transparent border-b-2 border-blue-400 shadow-2xl placeholder:text-blue-600 font-semibold"
                onChange={handleChange}
              />
              <button
                type="submit"
                className="w-[70%] h-[40px] bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md shadow-2xl"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
