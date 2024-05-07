import React from 'react';
import { Link } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const isAuthenticated = localStorage.getItem("adminName");

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-3xl font-bold">404 Not Found</h1>
          <p className="text-gray-600 text-lg mb-4">You need to login to see this page.</p>
          <Link to="/" className="text-blue-500">Go back to login</Link>
        </div>
      </div>
    );
  }

  return children;
};

export default RequireAuth;