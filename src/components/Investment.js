import React from "react";
import { useState } from "react";
//import {useNavigate} from "react-router-dom"

import styled from "styled-components";
import axios from "axios";

function Investment() {
  const [tableData, setTableData] = useState([]);
  const [inputState, setInputState] = useState({
    name: "",
    amount: "",
    type: "",
    startDate: "",
    description: "",
  });
  const handleOnChange = (event) => {
    setInputState({ ...inputState, [event.target.name]: event.target.value });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(inputState);
      const response = await axios.post('http://localhost:5000/investments', inputState, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        withCredentials: true, // Include credentials in the request
      });
      if (response.status === 200) {
        setTableData((prev) => [...prev, inputState]);
        console.log('Investment added successfully');
        console.log(response.data);
        // navigate('/')

      } else {
        console.log('Investment addition failed');
      }
    } catch (err) {
      console.error('Error:', err);
    }
    setInputState({ name: "", amount: "", type: "", startdate: "", description: "", })


  };
  return (
    <div classname="form h-full">
      {/* {showAlert && (
        <AlertStyled>
          Please fill in all the fields before submitting!!
        </AlertStyled>
      )} */}
      <h1 className=" text-orange-500 font-semibold mb-2" style={elementStyle}>Investment</h1>
      <FormStyled className="shadow-lg rounded-lg " onSubmit={handleOnSubmit} style={{ backgroundColor: "#ffffff11" }}>
        <div className="form-group mx-auto">
          <label className=" text-white" htmlFor="title">Name</label>
          <input
            type="text"
            className="form-control w-96"
            id="name"
            name="name"
            placeholder="Name"
            value={inputState.name}
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group mx-auto">
          <label className=" text-white" htmlFor="amount">Amount</label>
          <input
            type="number"
            className="form-control w-96"
            id="amount"
            name="amount"
            placeholder="Amount"
            value={inputState.amount}
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group mx-auto">
          <label className=" text-white" htmlFor="type">Type</label>
          <input
            type="type"
            className="form-control w-96"
            id="type"
            name="type"
            placeholder="Type"
            value={inputState.type}
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group mx-auto">
          <label className=" text-white" htmlFor="startdate">Start Date</label>
          <input
            type="date"
            className="form-control w-96"
            id="startdate"
            name="startdate"
            placeholder="Start Date"
            value={inputState.startdate}
            onChange={handleOnChange}
          />
        </div>

        <div className="form-group mx-auto">
          <label className=" text-white" htmlFor="textarea">Description</label>
          <textarea
            type="textarea"
            className="form-control w-96"
            id="textarea"
            rows="3"
            name="description"
            placeholder="Add Description"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button type="submit" className="mb-2 btn btn-primary border font-semibold text-lg mx-auto"> Submit
        </button>

      </FormStyled>
      <table className="table w-5/6 mx-auto  rounded-full shadow-xl">
        <thead className="thead-dark bg-gray-700 text-white">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Amount</th>
            <th scope="col">type</th>
            <th scope="col">Start Date</th>

            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        <tbody className="bg-gray-400">
          {tableData.map((user, index) => (
            <tr key={index.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.amount}</td>
              <td>{user.type}</td>
              <td>{user.startdate}</td>

              <td>{user.description}</td>
              <td>
                <button className="btn btn-warning w-20 font-semibold">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  margin-bottom: 15px;
  .form-group {
    margin-bottom: 1rem;
  }

  .form-control {
    padding: 0.5rem 0.75rem;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &:focus {
      outline: none;
      border-color: #80bdff;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
  }
  .selects {
    display: flex;
    justify-content: flex-end;
    select {
      color: rgba(34, 34, 96, 0.4);
      &:focus,
      &:active {
        color: rgba(34, 34, 96, 1);
      }
    }
  }
  .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
    border-radius: 12px;
    margin-bottom: 4px;
    width: 25vh;
    &:hover {
      background-color: #0069d9;
      border-color: #0062cc;
    }
  }
`;
const elementStyle = {
  fontSize: "2.5rem",
  textAlign: "center",
};
export default Investment;
