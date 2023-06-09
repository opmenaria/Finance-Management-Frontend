import React from "react";
import styled from "styled-components";
import { useState } from "react";

function Expense() {
  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    type: "",
    date: "",
    category: "",
    description: "",
  });
  const handleOnChange = (event) => {
    console.log(inputState);
    setInputState({ ...inputState, [event.target.name]: event.target.value });
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="form">
      <h1 style={element_style}>Add New Expenses</h1>
      <FormStyled onSubmit={handleOnSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            placeholder="Amount"
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Type</label>
          <input
            type="text"
            className="form-control"
            id="amount"
            placeholder="Amount"
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            placeholder="Date"
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            className="form-control"
            id="category"
            onChange={handleOnChange}
          >
            <option value="disabled">Select options</option>
            <option value="salary">Education</option>
            <option value="freelancing">Health</option>
            <option value="investment">Groceries</option>
            <option value="bank">Clothing</option>
            <option value="bank">Travelling</option>
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
          Submit
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
            <th scope="col">Type</th>
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
          ))} */}
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
    width: 20vh;
    &:hover {
      background-color: #0069d9;
      border-color: #0062cc;
    }
  }
`;
const element_style = {
  fontSize: "2.5rem",
  color: "#002D62",
  textAlign: "center",
};
export default Expense;
