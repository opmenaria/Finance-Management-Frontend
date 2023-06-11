import React, { useEffect } from 'react';
import { Link } from "react-router-dom"
// import styled from "styled-components";
import { PieChartComponent, CustomBarChart } from './InvestChart';

const Dashboard = ({ graphData, fetchData }) => {
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <h1 className=" text-orange-400 shadow-lg  font-semibold mb-2" style={element_style}>Dashboard</h1>
            <div className='flex justify-center my-2'>
                <Link className=' text-white mx-4 border px-1 rounded hover:bg-gray-500' to=''>Incomes</Link>
                <Link className=' text-white mx-4 border px-1 rounded hover:bg-gray-500' to=''>Expenses</Link>
                <Link className=' bg-gray-700 text-white mx-4 border px-1 rounded hover:bg-gray-500' to=''>Investments</Link>
                <Link className=' text-white mx-4 border px-1 rounded hover:bg-gray-500' to=''>Budget</Link>
            </div>
            <h1 className='flex text-green-600 justify-center my-2'>Currently showing Investment Data</h1>
            <div className='flex items-center mx-auto my-3'
                style={{ width: "85%" }}>
                <PieChartComponent graphData={graphData} />
                <CustomBarChart graphData={graphData} />
            </div>
            <table className="table w-5/6 mx-auto overflow-hidden rounded-md shadow-xl">
                <thead className="thead-dark bg-gray-700 text-white">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Amount</th>
                        <th scope="col">type</th>
                        <th scope="col">Start Date</th>
                        <th scope="col">Description</th>
                    </tr >
                </thead >

                <tbody className="bg-gray-400">
                    {graphData.map((user, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.amount}</td>
                            <td>{user.type}</td>
                            <td>{new Date(user.startDate).toLocaleString()}</td>
                            <td>{user.description}</td>
                        </tr >
                    ))}
                </tbody >
            </table >

        </>
    );
};
const element_style = {
    fontSize: "2.5rem",
    textAlign: "center",
};

export default Dashboard;
