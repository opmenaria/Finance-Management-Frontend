import './App.css';
import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './components/LogIn'
import Register from './components/SignUp'
import Navbar from './components/Nav';
import Budget from './components/Budget';
import Expense from './components/Expense';
import Form from './components/Saving';
import Sidebar from './components/Sidebar';

function App() {
  const [loggedIn, setLoggedIn] = useState()

  return (
    <>
      <div className="app">
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <div className='flex'>
          <Sidebar />
          <div className='mx-auto  mt-20'>
            <Routes>
              <Route path='/' element={<Form />} />
              <Route path='/log' element={<Login setLoggedIn={setLoggedIn} />} />
              <Route path='/reg' element={<Register />} />
              <Route path='/bud' element={<Budget />} />
              <Route path='/exp' element={<Expense />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}
export default App

