import React from "react";
import { useState } from "react";
//import {useNavigate} from "react-router-dom"

import styled from "styled-components";
import axios from "axios";
import { FaPlus } from "react-icons/fa";

function Income() {
  //const [tableData, setTableData] = useState([]);
  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  });
  const handleOnChange = (event) => {
    setInputState({ ...inputState, [event.target.name]: event.target.value });
  };

  const handleOnSubmit = async(event) => {
    event.preventDefault();
    try{
      console.log(inputState);
      const response = await  axios.post("http://localhost:5000/transactions/add-income",inputState,{
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        withCredentials: true, // Include credentials in the request
      }
    );
    if(response.status === 200){
      console.log('Income added successfully');
      console.log(response.data);
    }
    else{
      console.log('Income aaddition failed');
    }
   }
      catch(error) {
        console.error("Error submitting form:", error);
      }
  };
  return (
    <div classname="form">
      <h1 style={elementStyle}>Incomes</h1>
      <FormStyled onSubmit={handleOnSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Title"
            value={inputState.title}
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="Amount"
            value={inputState.amount}
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            placeholder="Date"
            value={inputState.date}
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            className="form-control"
            id="category"
            name="category"
            value={inputState.category}
            onChange={handleOnChange}
          >
            <option value="">Select options</option>
            <option value="salary">Salary</option>

            <option value="freelancing">Freelancing</option>
            <option value="investment">Investment</option>
            <option value="bank">Bank</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="textarea">Description</label>
          <textarea
            className="form-control"
            id="textarea"
            rows="3"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Income <FaPlus />
        </button>

        {/* <Button
      name={'Add Income'}
      bPad={'.8rem 1.6rem'}
      brad={'30px'}
      bg={'var(--color-accent'}
      color={'#fff'}/> */}
      </FormStyled>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Amount</th>
            <th scope="col">Date</th>
            <th scope="col">Category</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
           {/* {tableData.map((user, index) => (
            <tr key={index.id}>
              <td>{index + 1}</td>
              <td>{user.title}</td>
              <td>{user.amount}</td>
              <td>{user.date}</td>
              <td>{user.category}</td>
              <td>{user.description}</td>
              <td>
                <button className="btn btn-warning">Edit</button>
              </td>
            </tr>
          ))}  */}
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
  color: "#002D62",
  textAlign: "center",
};
export default Income;
