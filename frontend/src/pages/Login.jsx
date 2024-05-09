import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Img from "../assets/login.png";

const Login = () => {
  const navigate = useNavigate();
  const [fromData, setFromData] = useState({
    email: "",
    passwordL: "",
  });

  const handleChange = (e) => {
    setFromData({ ...fromData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/auth/login",
        fromData
      );
      console.log(response.data);
      localStorage.setItem("adminName", JSON.stringify(response.data));
      toast.success("Logged in successfully");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-blue-400 to-blue-100 min-h-screen">
      <Toaster />
      <div className="w-[900px] h-[600px] bg-white rounded-[20px] flex shadow-2xl">
        <div className="w-[50%] h-[600px] rounded-[20px] flex justify-center items-center m-4 p-2">
          <div className="w-[90%] h-[80%] flex flex-col justify-center items-center">
            <div className="w-[100%] h-[85px] flex justify-start items-start flex-col">
              <h1 className="font-semibold text-[40px] text-blue-600">
                Welcome!!
              </h1>
              <p className="font-semibold">
                Not registered yet?{" "}
                <span>
                  <Link to="/register" className="text-blue-600 font-semibold">
                    Sign up
                  </Link>
                </span>
              </p>
            </div>
            <form
              className="w-[100%] h-[600px] flex justify-around items-center flex-col"
              onSubmit={handleSubmit}
            >
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
              <button
                type="submit"
                className="w-[70%] h-[40px] bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md shadow-2xl"
              >
                Sign In
              </button>
            </form>
            <p className="text-[16px] font-semibold">
              Forgotten your password or your login details?
              <Link to="/register" className="text-blue-600 underline">
                Get help
              </Link>{" "}
              signing in
            </p>
          </div>
        </div>
        <div className="w-[50%] h-[600px] flex justify-center items-center rounded-[10px]">
          <img
            className="w-[100%] h-[100%] object-cover mix-blend-multiply"
            src={Img}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
