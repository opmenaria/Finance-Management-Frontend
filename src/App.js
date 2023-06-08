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
import Saving from './components/Saving';
// import Income from './components/Form';
// import ProductList from './components/Expense'

function App() {


  return (
    <>
      <div className="app">
        <Navbar />
        <div className='flex'>
          <Sidebar />
          <div className=' w-4/5 mt-10'>
            <Routes>
              <Route path='/Saving' element={<Form />} />
              <Route path='/log' element={<Login />} />
              <Route path='/reg' element={<Register />} />
              <Route path='/budget' element={<Budget />} />
              <Route path='/Expense' element={<Expense />} />
              <Route path='/Saveing' element={<Saving />} />
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

