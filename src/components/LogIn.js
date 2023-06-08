import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ setLoggedIn }) => {
    const navigate = useNavigate()
    const [loginData, setLoginData] = useState({ "email": '', "password": "" })

    const handleUserData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setLoginData((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/auth/login', loginData);
            if (response.status === 200) {
                console.log('Login successful');
                response && setLoggedIn(response.data)
                navigate('/')
                const token = response.data.token;
                document.cookie = `accessToken=${token}; path=/;`;
            } else {
                console.log('Login failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }

        setLoginData({ "email": '', "password": "" })
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="w-96 bg-white rounded shadow p-8">
                <h2 className="text-2xl font-bold mb-4 flex justify-center">Login</h2>
                <form onSubmit={handleSubmit}>

                    <div className="mb-4 flex items-center">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold">
                            email
                        </label>
                        <input
                            type="text" name='email' id="email" value={loginData.email} onChange={handleUserData} className="w-full p-2 border border-gray-400 rounded" placeholder="Enter email" required />
                    </div>

                    <div className="mb-4 flex items-center">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold">
                            Password
                        </label>
                        <input
                            type="password" name="password" id="password" value={loginData.password} onChange={handleUserData} className="w-full p-2 border border-gray-400 rounded" placeholder="Enter your password" required
                        />
                    </div>

                    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                        Login
                    </button>
                </form>
            </div>
            <div className='text-white space-y-4 mt-2  flex flex-col'>
                <p>New to our App</p>
                <Link className="w-full bg-blue-500 border py-2 px-4 text-center rounded hover:bg-blue-300" to="/reg">Register</Link>
            </div>
        </div>
    );
};

export default Login;
