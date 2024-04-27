import React, { useState } from 'react'

const Form = () => {
    const [rating, setRating] = useState(0);

    const handleClick = (value)=>{
        setRating(value); //1,2,3,4,5
    }

    return (
        <div className='flex items-center justify-center h-screen bg-gray-200'>
            <form action="" className='bg-white p-10 rounded-lg shadow-lg'>
                <h2 className='text-2xl font-bold mb-4'>Feedback Collection</h2>
                <div className='mb-3'>
                    <label htmlFor="name">Your Name: </label>
                    <input type="text" name="name" id="name" placeholder='Enter your name' className='border' />
                </div>
                <div className='mb-3'>
                    <label htmlFor="email">Your Email: </label>
                    <input type="email" name="email" id="email" placeholder='Enter your email' className='border' />
                </div>
                <div className='mb-3'>
                    <h2 className='text-14 font-bold'>Rate your service</h2>
                    {[1,2,3,4,5].map((value)=>(
                        <button 
                            key={value}
                            type='button'
                            className={`text-4xl ${value <= rating ? 'text-yellow-400' : 'text-gray-300'} focus:outline-none`}
                            onClick={()=>handleClick(value)}
                        >
                            ★
                        </button>
                    ))}
                </div>
                {/* when the rating is more 0 i need to show the text area */}
                {rating > 0 && (
                    <div className='mb-3'>
                        <label htmlFor="reason">Reason for rating:</label>
                        <textarea name="reason" id="reason" rows="4" className='w-full border'></textarea>
                    </div>
                )}
                <button type="submit" className='bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 focus:shadow-outline focus:outline-none'>Submit</button>
            </form>
        </div>
    )
}

export default Form