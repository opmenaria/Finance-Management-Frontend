import React, { useState } from 'react'
//import Tabel from './Tabel'
import { Link, useNavigate } from 'react-router-dom'

export default function Form({ setUserData }) {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [age, setAge] = useState("")
    const [color, setColor] = useState('#ff0000')





    const handleSubmit = (e) => {
        e.preventDefault();
        setUserData((prev) => {
            if (Array.isArray(prev)) {
                return [...prev, {
                    name: name,
                    age: age,
                    color: color
                }];
            } else {
                return [{
                    name: name,
                    age: age,
                    color: color
                }];
            }
        });
        setAge('')
        setColor('#ff0000')
        navigate('/tabl')
    };


    return (
        <div id="app" className='flex flex-col w-1/2 mx-auto'>
            <h1 className='mx-auto py-1 mt-4  bg-black text-white w-1/3 text-center rounded-3'>Create User</h1>

            <form onSubmit={handleSubmit} type="submit" className='mx-auto border-2 border-gray-500 mt-1 p-6'>
                name: <input className='bg-slate-300 border-gray-500 border-2 rounded-2' value={name} type="text" onChange={(e) => setName(e.target.value)} /> <br /><br />
                Color: <input value={color} type='color' onChange={(e) => setColor(e.target.value)} /> <br /><br />
                age: <input className=' bg-slate-300 border-gray-500 border-2 rounded-2' value={age} type='number' onChange={(e) => setAge(e.target.value)} />
                <button className='bg-blue-500 p-1 rounded-lg mx-3 text-white hover:bg-blue-600' type='submit' >Submit</button>
            </form><br />
            <Link className='bg-gray-600 mx-auto px-3 py-1 text-white rounded-3' to='/tabl'>Table</Link>
        </div>
    )
}
