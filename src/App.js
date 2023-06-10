import './App.css';
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './components/LogIn'
import Register from './components/SignUp'
import Navbar from './components/Nav';
import Budget from './components/Budget';
import Expense from './components/Expense';
import Sidebar from './components/Sidebar';
import Income from './components/Income';
import Investment from './components/Investment';
import Dashbord from './components/Dashbord';

function App() {
  const [loggedIn, setLoggedIn] = useState()
  const [mail, setMail] = useState()


  return (
    <>
      <div className="app">
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} setMail={setMail} mail={mail} />
        <div className='flex'>
          <div className='w-1/6'>
            <Sidebar loggedIn={loggedIn} mail={mail} />
          </div>
          <div className='mx-auto mt-20 w-5/6'>
            <Routes>
              {loggedIn || mail ?
                <>
                  <Route path='/' element={<Dashbord />} />
                  <Route path='/budget' element={<Budget />} />
                  <Route path='/expense' element={<Expense />} />
                  <Route path='/income' element={<Income />} />
                  <Route path='/Investment' element={<Investment />} /></>
                : <>
                  <Route path='/' element={<Login setLoggedIn={setLoggedIn} />} />
                  <Route path='/reg' element={<Register />} /></>
              }
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}
export default App


