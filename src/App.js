import './App.css';
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './components/LogIn'
import Register from './components/SignUp'

function App() {


  return (
    <>
      <div className="app">
        <Routes>
          <Route path='/log' element={<Login />} />
          <Route path='/reg' element={<Register />} />
        </Routes>
      </div>
    </>
  )
}
export default App

