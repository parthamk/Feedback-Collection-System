import React, { useState } from 'react';
import axios from 'axios';
import toast, {Toaster} from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [fromData, setFromData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e)=>{
        setFromData({...fromData, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(fromData.password !== fromData.confirmPassword){
            toast.error("Password do not match");
            return;
        }

        try {
            const response = await axios.post("http://localhost:8000/auth/register", fromData);
            console.log(response.data);
            toast.success("Registration successful", {duration: 3000});
            setTimeout(()=>{
                navigate("/")
            },3000)
        } catch (error) {
            toast.error(error.response.data.message);
        }

    }


  return (
    <div className='flex items-center justify-center bg-gray-100 min-h-screen'>
        <Toaster />
        <div className='bg-white p-8 rounded shadow-md w-96'>
            <h1 className='text-2xl font-semibold text-gray-800 mb-6'>Register</h1>
            <form className='space-y-4' onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className='block text-sm font-medium text-gray-600'>Name</label>
                <input type="name" name="name" id="name" placeholder='Jhon Doe' className='mt-1 w-full outline-none border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-90 block' onChange={handleChange}/>
              </div>
              <div>
                <label htmlFor="email" className='block text-sm font-medium text-gray-600'>Email</label>
                <input type="email" name="email" id="email" placeholder='jhondoe@example.com' className='mt-1 w-full outline-none border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-90 block' onChange={handleChange}/>
              </div>
              <div>
                <label htmlFor="password" className='block text-sm font-medium text-gray-600'>Password</label>
                <input type="password" name="password" id="password" placeholder='password' className='mt-1 w-full outline-none border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-90 block' onChange={handleChange}/>
              </div>
              <div>
                <label htmlFor="confirmPassword" className='block text-sm font-medium text-gray-600'>Confirm Password</label>
                <input type="password" name="confirmPassword" id="confirmPassword" placeholder='Confirm your password' className='mt-1 w-full outline-none border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-90 block' onChange={handleChange}/>
              </div>
              <button type="submit" className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Register</button>
            </form>
            <p className='mt-2'>Sign In <Link to="/" className='underline'>Here</Link></p>
        </div>
    </div>
  )
}

export default Register