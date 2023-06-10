import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";

import axios from 'axios'
// import { useNavigate } from 'react-router-dom';



function Expense() {
  // const navigate = useNavigate()
  const [showAlert, setShowAlert] = useState(false)
  const [tableData, setTableData] = useState([])
  const [inputState, setInputState] = useState({
    title: "",
    amount: '',
    type: "",
    date: "",
    category: "",
    description: ""
  });
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/transactions/get-expenses/', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        withCredentials: true,
      });
      if (response.status === 200) {
        setTableData(response.data);
        console.log('Data retrieved successfully');
      } else {
        console.log('Failed to retrieve data');
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };

  const handleOnUpdate = async (id) => {
    console.log(id);
    try {
      const response = await axios.put(`http://localhost:5000/transactions/update-expense/${id}`,
        {
          category: inputState.category,
          amount: inputState.amount,
          type: inputState.type,
          date: inputState.date,
          title: inputState.title,
          description: inputState.description
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
          },
          withCredentials: true
        }
      );
      if (response.status === 200) {
        console.log("Data updated successfully");
        setInputState({ title: "", amount: "", type: "", date: "", category: "", description: "", })
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
        `http://localhost:5000/transactions/delete-expense/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
          },
          withCredentials: true
        }
      );
      if (response.status === 200) {
        console.log("Data deleted successfully");
        fetchData(); // Refresh the data after deletion
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
    if (validateform()) {
      try {
        console.log(inputState);
        const response = await axios.post('http://localhost:5000/transactions/add-expense', inputState, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
          withCredentials: true, // Include credentials in the request
        });
        if (response.status === 200) {
          setTableData((prev) => [inputState, ...prev]);
          console.log('Expense added successfully');
          fetchData()
          // navigate('/')
        } else {
          console.log('Expense addition failed');
        }
      } catch (err) {
        console.error('Error:', err);
      }
      setInputState({ title: "", amount: "", type: "", date: "", category: "", description: "", })

    }
    else {
      setShowAlert(true);
    }
  };
  const validateform = () => {
    const { title, amount, type, date, category, description } = inputState;

    if (
      title.trim() === "" ||
      amount.trim() === "" ||
      type.trim() === "" ||
      date.trim() === "" ||
      category.trim() === "" ||
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
        setShowAlert(false)
      }, 3000)
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
        </AlertStyled>)}
      <h1 className=" text-orange-500 font-semibold mb-2" style={element_style}>Expenses</h1>
      <FormStyled className="shadow-lg rounded-lg" onSubmit={handleOnSubmit}
        style={{ backgroundColor: "#ffffff11" }}
      >     <div className="form-group mx-auto">
          <label className=" text-white" htmlFor="title">Title</label>
          <input
            value={inputState.title}
            type="text"
            className="form-control w-96"
            name="title"
            id="title"
            placeholder="Title"
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group mx-auto">
          <label className=" text-white" htmlFor="amount">Amount</label>
          <input
            value={inputState.amount}
            type="number"
            className="form-control w-96"
            name="amount"
            id="amount"
            placeholder="Amount"
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group mx-auto">
          <label className=" text-white" htmlFor="amount">Type</label>
          <input
            value={inputState.type}
            type="text"
            className="form-control w-96"
            name="type"
            id="type"
            placeholder="Type"
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group mx-auto">
          <label className=" text-white" htmlFor="date">Date</label>
          <input
            value={inputState.date}
            type="date"
            className="form-control w-96"
            name="date"
            id="date"
            placeholder="Date"
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group mx-auto">
          <label className=" text-white" htmlFor="category">Category</label>
          <select
            value={inputState.category}
            className="form-control w-96"
            name="category"
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

        <div className="form-group mx-auto">
          <label className=" text-white" htmlFor="textarea">Description</label>
          <textarea
            value={inputState.description}
            className="form-control w-96"
            name="description"
            id="description"
            rows="3"
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
            <th scope="col">Title</th>
            <th scope="col">Amount</th>
            <th scope="col">Type</th>
            <th scope="col">Date</th>
            <th scope="col">Category</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        <tbody className="bg-gray-400">
          {tableData.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.title}</td>
              <td>{user.amount}</td>
              <td>{user.type}</td>
              <td>{new Date(user.date).toLocaleString()}</td>
              <td>{user.category}</td>
              <td>{user.description}</td>
              <td className="flex justify-between">
                <button className="btn btn-warning w-20 font-semibold" onClick={() => handleOnUpdate(user._id)}>Edit</button>
                <button className="btn btn-danger w-20 font-semibold" onClick={() => handleOnDelete(user._id)}>Delete</button>
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
export default Expense;
