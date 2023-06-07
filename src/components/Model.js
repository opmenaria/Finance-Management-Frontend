import React from 'react'

export default function Model({ user }) {
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5 mx-auto mt-  bg-black text-white w-1/3 text-center rounded-2" id="exampleModalLabel">User Detail</h1>

                    </div>
                    <div className="modal-body mx-auto">
                        <table>
                            <tbody className=''>
                                <tr>
                                    <th className='bg-gray-400 px-2 border-2 border-gray-500 '>Name</th>
                                    <th className='bg-gray-400 px-2 border-2 border-gray-500'>Color</th>
                                    <th className='bg-gray-400 px-2 border-2 border-gray-500'>Age</th>
                                </tr>
                                {user && <>
                                    <tr key={user.id} className='mx-auto'>
                                        <td className='px-2 border-2 border-gray-500' >{user.name}</td>
                                        <td className='px-2 border-2 border-gray-500'>{user.color}</td>
                                        <td className='px-2 border-2 border-gray-500'>{user.age}</td>
                                    </tr>
                                </>
                                }
                            </tbody>
                        </table>            </div>
                    <div className="modal-footer ">
                        <button type="button" className="mx-auto bg-blue-500 p-1 rounded-lg text-white hover:bg-blue-600" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
