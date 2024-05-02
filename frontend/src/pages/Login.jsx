import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import toast, {Toaster} from 'react-hot-toast';

const Login = () => {
  const navigate = useNavigate();
  const [fromData, setFromData] = useState({
    email: "",
    passwordL: "",
  })

  const handleChange = (e)=>{
    setFromData({...fromData, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/auth/login", fromData);
      console.log(response.data);
      toast.success("Logged in successfully");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  return (
    <div className='flex items-center justify-center bg-gray-100 min-h-screen'>
        <Toaster/>
        <div className='bg-white p-8 rounded shadow-md w-96'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>Login</h2>
            <form className='space-y-4' onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className='block text-sm font-medium text-gray-600'>Email</label>
                <input type="email" name="email" id="email" placeholder='jhondoe@example.com' className='mt-1 w-full outline-none border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-90 block' onChange={handleChange}/>
              </div>
              <div>
                <label htmlFor="password" className='block text-sm font-medium text-gray-600'>Password</label>
                <input type="password" name="password" id="password" placeholder='password' className='mt-1 w-full outline-none border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-90 block' onChange={handleChange}/>
              </div>
              <button type="submit" className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Sign In</button>
            </form>
            <p>Create your account <Link to="/register" className='underline'>Here</Link></p>
        </div>
    </div>
  )
}

export default Login