import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from 'axios'

function Investment({ tableData, fetchData, setTableData }) {
  const [showAlert, setShowAlert] = useState(false)
  const [inputState, setInputState] = useState({
    name: "",
    amount: "",
    type: "",
    startDate: "",
    description: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const handleOnUpdate = async (id) => {
    console.log(id);
    try {
      const response = await axios.put(`http://localhost:5000/investments/${id}`,
        {
          name: inputState.name,
          amount: inputState.amount,
          type: inputState.type,
          startDate: inputState.startDate,
          description: inputState.description,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
          },
          withCredentials: true
        }
      );
      if (response.status === 200) {
        setInputState({
          name: "",
          amount: "",
          type: "",
          startDate: "",
          description: ""
        })
        console.log("Data updated successfully");
        fetchData();
      } else {
        console.log("Failed to update data");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const handleOnDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/investments/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
          },
          withCredentials: true
        }
      );
      if (response.status === 200) {
        console.log("Data deleted successfully");
        fetchData();
      } else {
        console.log("Failed to delete data");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const handleOnChange = (event) => {
    setInputState({ ...inputState, [event.target.name]: event.target.value });
  };


  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        console.log(inputState);
        const response = await axios.post('http://localhost:5000/investments', inputState,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
            withCredentials: true,
          });
        if (response.status === 201) {
          setTableData((prev) => [tableData, ...prev]);
          console.log('Investment added successfully');
          console.log(response.data);
          setInputState({
            name: "",
            amount: "",
            type: "",
            startDate: "",
            description: ""
          })
          fetchData()
          // navigate('/')

        } else {
          console.log('Investment addition failed');
        }
      } catch (err) {
        console.error('Error:', err);
      }

    }
    else {
      setShowAlert(true);
    }
  };
  const validateForm = () => {
    const { name, amount, type, startDate, description } = inputState;
    if (
      name.trim() === "" ||
      amount.trim() === "" ||
      type.trim() === "" ||
      startDate.trim() === "" ||
      description.trim() === ""
    ) {
      setShowAlert(true);
      return false;
    }
    return true;
  };

  useEffect(() => {
    let timeoutld;
    if (showAlert) {
      timeoutld = setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
    return () => {
      clearTimeout(timeoutld);
    };
  }, [showAlert]);
  return (
    <div className="form h-full">

      {showAlert && (
        <AlertStyled>
          Please fill in all the fields before submitting!!
        </AlertStyled>
      )}
      <h1 className=" text-orange-400 shadow-lg  font-semibold mb-2" style={element_style}>Investment</h1>
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
            name="startDate"
            placeholder="Start Date"
            value={inputState.startDate}
            onChange={handleOnChange}
          />
        </div>

        <div className="form-group mx-auto">
          <label className=" text-white" htmlFor="textarea">Description</label>
          <textarea
            type="textarea"
            className="form-control w-96"
            id="description"
            rows="3"
            name="description"
            placeholder="Add Description"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button type="submit" className="mb-2 btn btn-primary border font-semibold text-lg mx-auto"> Submit</button>

      </FormStyled>
      <table className="table w-5/6 mx-auto overflow-hidden  rounded-md shadow-xl">
        <thead className="thead-dark bg-gray-700 text-white">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Amount</th>
            <th scope="col">type</th>
            <th scope="col">Start Date</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr >
        </thead >

        <tbody className="bg-gray-400">
          {tableData.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.amount}</td>
              <td>{user.type}</td>
              <td>{new Date(user.startDate).toLocaleString()}</td>
              <td>{user.description}</td>
              <td className="flex justify-between">
                <button className="btn btn-warning w-20 font-semibold" onClick={() => handleOnUpdate(user._id)}>Edit</button>
                <button className="btn btn-danger w-20 font-semibold" onClick={() => handleOnDelete(user._id)}>Delete</button>
              </td>
            </tr >
          ))}
        </tbody >
      </table >
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
const element_style = {
  fontSize: "2.5rem",
  textAlign: "center",
};
export default Investment;


