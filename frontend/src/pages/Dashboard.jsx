import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
        <h1>Dashboard</h1>
        <Link to="/">
            <button className='bg-red-300 p-3'>Logout</button>  
        </Link>
    </div>
  )
}

export default Dashboard