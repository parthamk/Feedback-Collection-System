
import ContactImg from "./images/contact-img.png";

const Contact = () => {
    return (
            <div className='bg-blue-900 min-h-screen' id="contact-us">
            <h2 className='font-bold text-white flex justify-center items-center text-3xl p-8 mb-4'> Contact</h2>
        
            <div className=' flex justify-center   '>
        
              <div className='bg-gray-900  w-full lg:w-2/6 border border-2xl p-4 border-gray-500 rounded-md'>
                 <form >
                 <div className='flex justify-center p-2 '>
                 <h2 className='text-xl text-white font-semibold'>Get In Touch</h2>
                 </div>
                 <div className='flex flex-col lg:flex '>
                 <label htmlFor='name' className='text-white font-bold '>Name*</label>
                 <input type='text' name='name' placeholder='Enter Your Name' className='text-white p-3 h-10 rounded-sm bg-gray-900  mt-2 mb-2 border border-gray-500 ' />
                 <label htmlFor='email' className='text-white font-bold'>Email*</label>
                 <input type='email' name='email' placeholder='Enter your Email' className=' text-white p-3 border mt-2 mb-2 h-10 rounded-sm bg-gray-900 border-gray-500' />
                 <label htmlFor='email' className='text-white font-bold'>Message*</label>
                 <textarea type='text' name='message' placeholder='Message' className='text-white p-3 border mt-2 mb-2 h-28 rounded-sm bg-gray-900 border-gray-500' />
                 <button className="w-28 rounded-md bg-gray-700 hover:bg-gray-800 text-white mt-3 mb-3 lg:mb-0 p-2 font-bold" type="submit">
                 Submit
                </button> 
                </div>
                </form> 
               </div>
        
               <div className=' hidden ml-4 lg:block'>
                    <img src={ContactImg} alt='ContactImg'/>
                </div>
        
            </div>
           </div>
            
          )
        
}

export default Contact