

import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
  color: "powderblue",
  textAlign: "center",
};

function Budget() {
  const navigate = useNavigate();
  // const [tableData, setTableData] = useState([]);
  const [inputState, setInputState] = useState({
    name: "",
    amount: "",
    date1: "",
    date2: "",
  });

  const [showAlert, setShowAlert] = useState(false);
  const handleOnChange = (event) => {
    setInputState({ ...inputState, [event.target.name]: event.target.value });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      axios
        .post("http://localhost:5000/transactions/add-expense", inputState)
        .then((response) => {
          //setTableData((prev) => [...prev, inputState]);

          console.log("Form Submitted:", inputState);

          setInputState({
            name: "",
            amount: "",
            date1: "",
            date2: "",
          });
          navigate("/Budget_table");
          // setUsers((prev)=>[...prev,inputState]);
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
        });
    } else {
      setShowAlert(true);
    }
  };

  const validateForm = () => {
    const { name, amount, date1, date2 } = inputState;

    if (
      name.trim() === "" ||
      amount.trim() === "" ||
      date1.trim() === "" ||
      date2.trim() === ""
    ) {
      return false;
    }
    return true;
  };

  return (
    <div className="form">
      <h1 style={elementStyle}>Budget</h1>
      {showAlert && (
        <AlertStyled>
          Please fill in all the fields before submitting!!
        </AlertStyled>
      )}
      <FormStyled onSubmit={handleOnSubmit}>
        <div className="form-group">
          <label htmlFor="budget">Budget Name</label>
          <input
            type="text"
            className="form-control"
            id="budget"
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date1">Start Date</label>
          <input
            type="date"
            className="form-control"
            id="date1"
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date2">End Date</label>
          <input
            type="date"
            className="form-control"
            id="date2"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Budget
        </button>
      </FormStyled>
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
export default Budget;
