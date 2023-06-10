import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../imgs/financelogo.png'

export default function Navbar({ loggedIn, setLoggedIn, setMail, mail }) {
    // const [mail, setMail] = useState()
    const handleLogout = () => {
        document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        setLoggedIn(null)
        setMail('')
        localStorage.removeItem("email")
    }
    useEffect(() => {
        const email = localStorage.getItem("email")
        setMail(email)
    }, [])
    useEffect(() => {
        mail && console.log(mail);
    }, [mail])
    return (
        <div className='z-10 w-full fixed flex items-center justify-between py-1 bg-gray-900 font-semibold text-lg border-b'>

            <div>
                <img className=' mx-3 h-10 bg-none rounded-xl border-2 hover:border-blue-500' src={logo} alt="logo" />
            </div>
            <div className='flex  space-x-10'>

                <Link to='/'>
                    <div className=' text-yellow-200 hover:text-white border-x  px-2 rounded-md'>Home</div>
                </Link>
                <Link to='/About'>
                    <div className=' text-yellow-200 hover:text-white border-x  px-2 rounded-md'>About</div>
                </Link>
                <Link to='/Contect'>
                    <div className=' text-yellow-200 hover:text-white border-x  px-2 rounded-md'>Contact Us</div>
                </Link>
            </div>
            {loggedIn || mail ?
                <div className=' mr-4  flex items-center space-x-3'>
                    {mail && <h2 className=' text-white text-sm mr-4'>{mail}</h2>}
                    {loggedIn && <h2 className=' text-white text-sm mr-4'>{loggedIn.data.email}</h2>}
                    <Link className=' bg-blue-500 hover:bg-blue-600 mr-4 text-md border mx-auto px-2 rounded-md' to='/reg'>
                        <button onClick={handleLogout} className=' text-white'>Logout</button>
                    </Link></div>
                : <div className='flex space-x-2 mx-3 text-blue-400'>
                    <Link to='/log'>
                        <button>Login</button>
                    </Link>
                    <h3>/</h3>
                    <Link to='/reg'>
                        <button>Register</button>
                    </Link>
                </div>
            }
        </div>
    )
}
