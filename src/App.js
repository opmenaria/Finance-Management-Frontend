import './App.css';
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './components/LogIn'
import Register from './components/SignUp'
import Navbar from './components/Nav';
import Budget from './components/Budget';
import Expense from './components/Expense';
import Form from './components/Form';
import Saving from './components/Saving';
import Income from './components/Income';
import Sidebar from './components/Sidebar';
import Tax from './components/Tax';
function App() {
const myclass={
  flex:'1',
  backdropFilter:'blur(4.5px)',
 backgroundColor: '#f6f7fa',
  borderRadius:'12px',
  overflow:'auto',
 
  overflowX:'hidden',
  marginLeft:'5%',
  padding:'12 32px',
  marginTop:'7%',
  marginRight:'20%',
  height:'40%',
  width:'40%', 
}

  return (
    <>
      <div className="app">
        <Navbar />
        <div className='flex'>
          <Sidebar />
          <div className=' w-4/5 mt-10' style={myclass}>
            <Routes>
              <Route path='/' element={<Form />} />
              <Route path='/log' element={<Login />} />
              <Route path='/reg' element={<Register />} />
              <Route path='/Income' element={<Income />} />
              <Route path='/Budget' element={<Budget />} />
              <Route path='/Expense' element={<Expense />} />
              <Route path='/saving' element={<Saving />} />
              <Route path='/tax' element={<Tax />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}
export default App

