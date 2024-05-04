import React from 'react'
const Profile = () => {
  return (
    <div>
      <h2 className='font-bold mt-8 mb-8 text-3xl justify-center items-center flex' >
        <span>Update</span>
       <span className='text-red-500 ml-2'>Profile</span>
       </h2>
   
   
    <div className="flex items-start justify-center h-screen mt-16 ">

      <div className="w-1/5 bg-white text-black-200 p-4  flex flex-col justify-between mr-8 ml-8]]]  items-center rounded-md shadow border border-red-500 ">
        <h1 className=" mt-4 font-bold">Admin Profile</h1>
        <img src="https://w7.pngwing.com/pngs/177/551/png-transparent-user-interface-design-computer-icons-default-stephen-salazar-graphy-user-interface-design-computer-wallpaper-sphere-thumbnail.png" alt="addmin" className="rounded-full h-20 w-20 mt-2 "/>
        <p className="mt-1 font-semibold" >Admin Name</p>
        <button className="bg-red-400 hover:bg-red-500 text-white py-2 px-4 rounded-full width-full mt-7">Change Avatar</button>
        <p className="ml-2">No file chosen</p>
      
      </div>

      <div className="w-3/5 bg-white text-black-200 p-4  shadow border border-blue-400 rounded-md">
      <form>
        <h2 className="font-bold mb-4" >Edit Details</h2>
        <div className="mb-4">
          <div>
            <label>Name</label>
          </div>
          <div>
            <input type="text" placeholder="Admin Name" className="border p-2 rounded-md w-full "/>
          </div>
        </div>
        <div className="mb-4">
          <div>
            <label>Email Address</label>
          </div>
          <div>
            <input type="text" placeholder="Admin@gmail.com" className="border p-2 rounded-md w-full"/>
          </div>
        </div>
        <h2 className="font-bold mb-4 mt-6">Change Password</h2>
        <div className="mb-4">
          <div>
            <label>Password</label>
          </div>
          <div>
            <input type="password" placeholder="" className="border p-2 rounded-md w-full "/>
          </div>
        </div>
        <div className="mb-4">
          <div>
            <label>Confirm Password</label>
          </div>
          <div>
            <input type="password" placeholder="" className="border p-2 rounded-md w-full"/>
          </div>
        </div>
        <button className="bg-blue-400 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Save</button>
      </form>
      
        </div>
    </div>

    </div>
    
    
  )
}

export default Profile