import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../imgs/financelogo.png'
export default function Navbar() {
    return (
        <div className=' w-full fixed flex items-center justify-between py-2 bg-gray-900 font-semibold text-lg border-b'>

            <div>
                <img className=' mx-3 h-12 bg-none rounded-xl border-2 hover:border-blue-500' src={logo} alt="logo" />
            </div>
            <div className='flex  space-x-10'>

                <Link to='/'>
                    <div className=' text-yellow-200 hover:text-white border-x  px-2 rounded-md'>Home</div>
                </Link>
                <Link to='/bud'>
                    <div className=' text-yellow-200 hover:text-white border-x  px-2 rounded-md'>Budget</div>
                </Link>
                <Link to='/exp'>
                    <div className=' text-yellow-200 hover:text-white border-x  px-2 rounded-md'>Expense</div>
                </Link>
            </div>
            <div className='flex space-x-2 mx-3 text-blue-400'>
                <Link to='/log'>
                    <button>Login</button>
                </Link>
                <h3>/</h3>
                <Link to='/reg'>
                    <button>Register</button>
                </Link>
            </div>

        </div>
    )
}
