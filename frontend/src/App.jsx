import React from 'react';
import Form from './components/Form'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/dashboard/Dashboard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* <Form /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Dashboard /> */}
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/form' element={<Form/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App