import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Img from "../assets/login.png";
import Eye from "../components/Eye";

const Login = () => {
  const navigate = useNavigate();
  const [inputType, setInputType] = useState("password");

  const [fromData, setFromData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFromData({ ...fromData, [e.target.name]: e.target.value });
  };

  function toggleEye() {
    setInputType(inputType === "password" ? "text" : "password");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://feedback-collection-system.onrender.com/auth/login",
        fromData
      );

      console.log("Response under Login", response.data);
      localStorage.setItem("adminName", JSON.stringify(response.data));
      toast.success(response.data.message);
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
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
              <div className="flex items-center w-full relative">
                <input
                  type={inputType}
                  name="password"
                  id="password"
                  placeholder="Enter your Password"
                  className="w-[100%] h-[40px] text-start outline-none bg-transparent border-b-2 border-blue-400 shadow-2xl placeholder:text-blue-600 font-semibold"
                  onChange={handleChange}
                />

                <span className="absolute right-0">
                  <Eye inputType={inputType} toggleEye={toggleEye} />
                </span>
              </div>

              <div className="flex gap-8 ">
                <p className="text-[17px] font-semibold">
                  Forgot password?
                  <Link to="/register" className="text-blue-600 underline ml-2">
                    Get help
                  </Link>{" "}
                  signing in
                </p>
                <button
                  type="submit"
                  className="w-[30%] h-[40px] bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md shadow-2xl"
                >
                  Sign In
                </button>
              </div>
            </form>
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
