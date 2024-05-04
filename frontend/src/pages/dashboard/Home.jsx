import React from 'react'

const Home = () => {
  const userData=[
    {name:'Jonn Doe',email:'johndoe@gmail.com',rating:'4.5/5',reason:'I enjoy the variety of subjects offered.'},
    {name:'Jonn Doe',email:'johndoe@gmail.com',rating:'4.5/5',reason:'I enjoy the variety of subjects offered.'},
    {name:'Jonn Doe',email:'johndoe@gmail.com',rating:'4.5/5',reason:'I enjoy the variety of subjects offered.'},
    {name:'Jonn Doe',email:'johndoe@gmail.com',rating:'4.5/5',reason:'I enjoy the variety of subjects offered I enjoy the variety of subjects offered.'},
    {name:'Jonn Doe',email:'johndoe@gmail.com',rating:'4.5/5',reason:'I enjoy the variety of subjects offered.'},
    {name:'Jonn Doe',email:'johndoe@gmail.com',rating:'4.5/5',reason:'I enjoy the variety of subjects offered.'},
    {name:'Jonn Doe',email:'johndoe@gmail.com',rating:'4.5/5',reason:'I enjoy the variety of subjects offered.'},
    {name:'Jonn Doe',email:'johndoe@gmail.com',rating:'4.5/5',reason:'I enjoy the variety of subjects offered.'},
    {name:'Jonn Doe',email:'johndoe@gmail.com',rating:'4.5/5',reason:'I enjoy the variety of subjects offered.'},
    {name:'Jonn Doe',email:'johndoe@gmail.com',rating:'4.5/5',reason:'I enjoy the variety of subjects offered.'},
    {name:'Jonn Doe',email:'johndoe@gmail.com',rating:'4.5/5',reason:'I enjoy the variety of subjects offered.'},

  ];
  return (
    <div className='flex items-center justify-center flex-col'>
      <h2 className='font-bold mt-8 mb-8 text-3xl' >
        <span>Admin </span>
       <span className='text-red-500'>Dashboard</span>
       </h2>
      <div className=' flex flex-row'>

        <div className='bg-blue-100 shadow-md p-4 m-2 rounded-lg flex flex-col items-center justify-center border border-red-500 '>
          <h3 className='text-lg font-semibold'>Total Number Of Student</h3>
          <p className='text-lg font-semibold '>50</p>
        </div>

        <div className='bg-white shadow-md m-2 p-4 rounded-lg flex flex-col items-center justify-center border border-blue-400'>
          <h3 className='text-lg font-semibold'>Total Number Of Feedback Given By Students</h3>
          <p className='text-lg font-semibold'>45</p>
        </div>

      </div>

      <div className='bg-white shadow rounded-lg mt-8 p-6 flex flex-col items-center justify-center  h-100 border border-blue-500'>
        <h3 className='text-lg font-bold text-red-500'>User Data</h3>
        <div className='overflow-auto max-h-64 w-full'>
          <table className='table-auto w-full'>
          <thead className='sticky top-0 bg-white'>
            <tr>
            <th className='px-4 py-2'>Name</th>
            <th className='px-4 py-2'>Email</th>
            <th className='px-4 py-2'>Rating</th>
            <th className='px-4 py-2'>Reason</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user,index)=>(
              <tr key={index}>
                <td className='border px-4 py-2'>{user.name}</td>
                <td className='border px-4 py-2'>{user.email}</td>
                <td className='border px-4 py-2'>{user.rating}</td>
                <td className='border px-4 py-2'>{user.reason}</td>
              </tr>
            ))}
          </tbody>
          </table>
          </div>
          <button className=' text-white text-lg font-bold p-2 mt-8 bg-red-500 hover:bg-red-600 rounded-full bg-gradient-to-r from-blue-400 to-red-600' >Upload To Excel</button>
        </div>
    </div>
  )
}

export default Home