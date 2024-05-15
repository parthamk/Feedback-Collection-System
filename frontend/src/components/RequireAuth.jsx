import React from 'react';
import { Link } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const isAuthenticated = localStorage.getItem("adminName");

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-white">
        <h2 className='flex justify-center items-center text-9xl '>OOPS!</h2>
        <label className='bg-white text-black'>404 - THE PAGE CAN{`'`}T BE FOUND</label>
        <Link to="/" className="text-white rounded-md font-semibold bg-orange-600 p-4 mb-20 mt-4">GO TO LOGIN PAGE</Link>
      </div>
    );
}
  

  return children;
};

export default RequireAuth;