import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()
    const [userData, setUserData] = useState({ "username": '', "email": '', "password": '', "phone": '' })

    const handleUserData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData((prev) => {
            return { ...prev, [name]: value }
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/auth/register', userData);
            if (response.status === 200) {
                console.log('Registration successful');
                navigate('/log')

            } else {
                console.log('Registration failed');
            }
        } catch (err) {
            console.error('Error:', err);
        }

        setUserData({ "username": '', "email": '', "password": '', "phone": '' })
    };


    return (
        <div className="flex flex-col justify-center items-center h-screen ">
            <div className="w-96 bg-white rounded shadow p-8 ">
                <h2 className="text-2xl font-bold mb-4 flex justify-center ">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4 flex items-center space-x-2">
                        <label htmlFor="username" className="block text-gray-700 text-sm font-bold">
                            Username
                        </label>
                        <input type="text" name='username' id="username" value={userData.username} onChange={handleUserData} className="w-full p-2 border border-gray-400 rounded" placeholder="Enter username" required
                        />
                    </div>
                    <div className="mb-4 flex items-center space-x-2">
                        <label htmlFor="username" className="block text-gray-700 text-sm font-bold">
                            Email
                        </label>
                        <input type="email" name='email' id="email" value={userData.email} onChange={handleUserData} className="w-full p-2 border border-gray-400 rounded" placeholder="Enter email" required
                        />
                    </div>
                    <div className="mb-4 flex items-center space-x-2">
                        <label htmlFor="username" className="block text-gray-700 text-sm font-bold">
                            Password
                        </label>
                        <input type="password" name='password' id="password" value={userData.password} onChange={handleUserData} className="w-full p-2 border border-gray-400 rounded" placeholder="Enter password" required
                        />
                    </div>
                    <div className="mb-4 flex items-center space-x-2">
                        <label htmlFor="username" className="block text-gray-700 w-28 text-sm font-bold">
                            Phone No.
                        </label>
                        <input type="password" name='phone' id="password" value={userData.phone} onChange={handleUserData} className="w-full p-2 border border-gray-400 rounded" placeholder="Enter phone no." required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" >
                        Register
                    </button>
                </form>
            </div>
            <div className='text-white space-y-4 mt-2  flex flex-col'>
                <p>Already have an account</p>
                <Link className="w-full bg-blue-500 border py-2 px-4 text-center rounded hover:bg-blue-300" to="/log">Login</Link>
            </div>
        </div>
    );
};

export default Register;
