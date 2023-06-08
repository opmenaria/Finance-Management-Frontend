import './App.css';
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './components/LogIn'
import Register from './components/SignUp'
import Navbar from './components/Nav';
import Budget from './components/Budget';
import Expense from './components/Expense';
import Form from './components/Saving';
import Sidebar from './components/Sidebar';

function App() {


  return (
    <>
      <div className="app">
        <Navbar />
        <div className='flex'>
          <Sidebar />
          <div className=' w-4/5 mt-10'>
            <Routes>
              <Route path='/' element={<Form />} />
              <Route path='/log' element={<Login />} />
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

