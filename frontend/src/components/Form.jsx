import React, { useState } from 'react'
import axios from "axios";
import toast, {Toaster} from 'react-hot-toast';


const Form = () => {
    const [fromData, setFromData] = useState({
        name: "",
        email: "",
        rating: 0,
        reason: "",
    });
    console.log(fromData);

    const handleClick = (value)=>{
        setFromData({...fromData, rating: value}); //1,2,3,4,5
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        //To check if the fields are empty
        if(!fromData.name || !fromData.email || fromData.rating === 0){

            toast.error('All fields are Mandatory');
            return;

        }
        try {

            const response = await axios.post("http://localhost:8000/api/submit", fromData);
            // console.log(response);
            // console.log("Axios",fromData);
            toast.success(response.data.message);
        } catch (error) {
            console.error("Error submitting form:",error);
            //checking from server if the email already exist
            if(error.response && error.response.data){
                toast.error(error.response.data.message);//custom error

            }
            else{
                toast.error(error.response.data.message);//server error
            }
        }
    }

    const handleChange = (e)=>{
       const {name, value} = e.target;
       setFromData({...fromData, [name]: value});
       console.log("Reason", fromData);
    }

    return (
        <div className='flex items-center justify-center h-screen bg-gray-200'>
            <Toaster />
            <form onSubmit={handleSubmit} className='bg-white p-10 rounded-lg shadow-lg'>
                <h2 className='text-2xl font-bold mb-4'>Feedback Collection</h2>
                <div className='mb-3'>
                    <label htmlFor="name">Your Name: </label>
                    <input type="text" name="name" id="name" placeholder='Enter your name' className='border' onChange={handleChange} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="email">Your Email: </label>
                    <input type="email" name="email" id="email" placeholder='Enter your email' className='border' onChange={handleChange} />
                </div>
                <div className='mb-3'>
                    <h2 className='text-14 font-bold'>Rate your service</h2>
                    {[1,2,3,4,5].map((value)=>(
                        <button 
                            key={value}
                            type='button'
                            className={`text-4xl ${value <= fromData.rating ? 'text-yellow-400' : 'text-gray-300'} focus:outline-none`}
                            onClick={()=>handleClick(value)}
                        >
                            ★
                        </button>
                    ))}
                </div>
                {/* when the rating is more 0 i need to show the text area */}
                {fromData.rating > 0 && (
                    <div className='mb-3'>
                        <label htmlFor="reason">Reason for rating:</label>
                        <textarea name="reason" id="reason" rows="4" className='w-full border' onChange={handleChange}></textarea>
                    </div>
                )}
                <button type="submit" className='bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 focus:shadow-outline focus:outline-none'>Submit</button>
            </form>
        </div>
    )
}

export default Form