import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import Model from './Model'
import Show from './Show'
import { useParams } from 'react-router-dom'

export default function Tabel({ userData }) {
    const [user, setUser] = useState({})
    const { id } = useParams()
    id && console.log(id);
    userData && console.log(userData);

    const handleShow = (e, index) => {
        setUser({
            id: index + 1,
            name: e.name,
            color: e.color,
            age: e.age,

        })
    }
    return (
        <div className='flex justify-center'><table>
            <tbody>
                <tr>
                    <th className='bg-gray-400 px-2 border-2 border-gray-500 '>id</th>
                    <th className='bg-gray-400 px-2 border-2 border-gray-500 '>Name</th>
                    <th className='bg-gray-400 px-2 border-2 border-gray-500'>Color</th>
                    <th className='bg-gray-400 px-2 border-2 border-gray-500'>Age</th>
                </tr>
                {userData?.map((el, index) => {
                    return (
                        <tr key={index} className='mx-auto'>
                            <td className='px-2 border-2 border-gray-500' >{index + 1}</td>
                            <td className='px-2 border-2 border-gray-500' >{el.name}</td>
                            <td className='px-2 border-2 border-gray-500'>{el.color}</td>
                            <td className='px-2 border-2 border-gray-500'>{el.age}</td>
                            <td><Link onClick={() => handleShow(el, index)} data-bs-toggle="modal" data-bs-target="#exampleModal" className=' cursor-pointer rounded-3 bg-yellow-400 px-3 py- mx-3 border-2 border-gray-500'>Show Data</Link></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>

            {/* <Show user={user} /> */}
            {/* <Model user={user} /> */}
        </div>
    )
}
