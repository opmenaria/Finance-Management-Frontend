import './App.css';
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './components/LogIn'
import Register from './components/SignUp'
import Navbar from './components/Nav';
import Budget from './components/Budget';
import Expense from './components/Expense';
import Form from './components/Saving';
import Sidebar from './components/Sidebar';
import Saving from './components/Saving';
import Income from './components/Income';
import Investment from './components/Investment';
import Tax from './components/Tax';
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
              <Route path='/budget' element={<Budget />} />
              <Route path='/expense' element={<Expense />} />
              <Route path='/saving' element={<Saving />} />
              <Route path='/income' element={<Income />} />
              <Route path='/Investment' element={<Investment />} />
              <Route path='/Tax' element={<Tax />} />

              {/* <Route path='/Form' element={<Income/>} /> */}

              {/* <Route path='/productList' element={<ProductList/>}/> */}
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}
export default App


