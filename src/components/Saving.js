import React from "react";
import styled from "styled-components";
import { useState } from "react";

import axios from "axios";
function Saving() {

  const [tableData, setTableData] = useState([]);
  const [inputState, setInputState] = useState({
    type: "",
    amount: "",
    description: "",
    createdAt: "",
  });

  const [showAlert, setShowAlert] = useState(false);
  const handleOnChange = (event) => {
    setInputState({ ...inputState, [event.target.name]: event.target.value });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    // if (validateForm()) {
    console.log(inputState);
    await axios.post("http://localhost:5000/savings", inputState)
      .then((response) => {
        console.log("Form Submitted:", response);
        setTableData(response.data)
        setInputState({
          type: "",
          amount: "",
          description: "",

        });
        // navigate('/Saving_table');

      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
    // } else {
    //   setShowAlert(true);
    // }
  };

  // const validateForm = () => {
  //   const { userId, type, amount, description, createdAt } = inputState;

  //   if (
  //     userId.trim() === "" ||
  //     type.trim() === "" ||
  //     amount.trim() === "" ||
  //     description.trim() === "" ||
  //     createdAt.trim() === ""
  //   ) {
  //     return false;
  //   }
  //   return true;
  // };

  return (
    <div className="form h-screen">
      <h1 className=" text-orange-500 font-semibold" style={elementStyle}>Savings</h1>
      {showAlert && (
        <AlertStyled>
          Please fill in all the fields before submitting!!
        </AlertStyled>
      )}
      <FormStyled onSubmit={handleOnSubmit}>
        <div className="form-group">
          <label htmlFor="type">Type</label>
          <input
            type="text"
            className="form-control"
            id="type"
            name="type"
            placeholder="Type"
            value={inputState.type}
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
          <label htmlFor="textarea">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="3"
            value={inputState.description}
            onChange={handleOnChange}
          ></textarea>
        </div >
        <button type="submit" className="btn btn-primary border font-semibold text-lg mx-auto"> Add Saving
        </button>
      </FormStyled >
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Type</th>
            <th scope="col">Amount</th>
            <th scope="col">Description</th>
            <th scope="col">Created</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          {tableData.map((user, index) => (
            <tr key={index.id}>
              <td>{index + 1}</td>
              <td>{user.userId}</td>
              <td>{user.type}</td>
              <td>{user.amount}</td>
              <td>{user.description}</td>
              <td>{user.createdAt}</td>

              <td>
                <button className="btn btn-warning">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div >
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
    width: 20vh;
    &:hover {
      background-color: #0069d9;
      border-color: #0062cc;
    }
  }
`;
const AlertStyled = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
`;

const elementStyle = {
  fontSize: "2.5rem",
  textAlign: "center",
};
export default Saving;
