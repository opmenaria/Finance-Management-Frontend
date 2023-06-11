import './App.css';
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import axios from 'axios'
import Login from './components/LogIn'
import Register from './components/SignUp'
import Navbar from './components/Nav';
import Budget from './components/Budget';
import Expense from './components/Expense';
import Sidebar from './components/Sidebar';
import Income from './components/Income';
import Investment from './components/Investment';
import Dashbord from './components/Dashbord';
import Contect from './components/Contect';
import Footer from './components/Footer';
import About from './components/About';
function App() {
  const [loggedIn, setLoggedIn] = useState()
  const [tableData, setTableData] = useState([])
  const [mail, setMail] = useState()

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/investments', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        withCredentials: true,
      });
      if (response.status === 200) {
        setTableData(response.data);
        console.log(response.data);
        console.log('Data retrieved successfully');
      } else {
        console.log('Failed to retrieve data');
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <>
      <div className="app">
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} setMail={setMail} mail={mail} />
        <div className='flex'>
          <div className='w-1/6'>
            {(loggedIn || mail) && <Sidebar loggedIn={loggedIn} mail={mail} />}
          </div>
          <div className='mx-auto mt-20 w-5/6'>
            <Routes>
              {(loggedIn || mail) ?
                <Route path='/' element={<Dashbord graphData={tableData} fetchData={fetchData} />} />
                : <Route path='/' element={<Login setLoggedIn={setLoggedIn} />} />

              }
              <Route path='/budget' element={<Budget />} />
              <Route path='/expense' element={<Expense />} />
              <Route path='/income' element={<Income />} />
              <Route path='/About' element={<About />} />
              <Route path='/Contect' element={<Contect />} />
              <Route path='/Investment' element={<Investment fetchData={fetchData} tableData={tableData} setTableData={setTableData} />} />
              <Route path='/log' element={<Login setLoggedIn={setLoggedIn} />} />
              <Route path='/reg' element={<Register />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
export default App


