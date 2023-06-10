// import React from "react";
// import { useState, useEffect } from "react";
// //import {useNavigate} from "react-router-dom"

// import styled from "styled-components";
// import axios from "axios";

// function Investment() {
//   const [tableData, setTableData] = useState([]);
//   const [showAlert, setShowAlert] = useState(false);
//   const [inputState, setInputState] = useState({
//     name: "",
//     amount: "",
//     type: "",
//     startDate: "",
//     description: "",
//   });
//   const handleOnChange = (event) => {
//     setInputState({ ...inputState, [event.target.name]: event.target.value });
//   };
//   const handleOnSubmit = async (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       try {
//         const response = await axios.post(
//           "http://localhost:5000/investments",
//           inputState,
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//             },
//             withCredentials: true,
//           }
//         );
//         if (response.status === 200) {
//           setTableData((prev) => [...prev, inputState]);
//           console.log("Investment added successfully");
//           console.log(response.data);
//         } else {
//           console.log("Investment addition failed");
//         }
//       } catch (err) {
//         console.error("Error:", err);
//       }
//       setInputState({
//         name: "",
//         amount: "",
//         type: "",
//         startdate: "",
//         description: "",
//       });
//     } else {
//       setShowAlert(true);
//     }
//   };

//   const validateForm = () => {
//     const { name, amount, type, startdate, description } = inputState;
//     if (
//       name.trim() === "" ||
//       amount.trim() === "" ||
//       type.trim() === "" ||
//       startdate.trim() === "" ||
//       description.trim() === ""
//     ) {
//       setShowAlert(true);
//       return false;
//     }
//     return true;
//   };

//   useEffect(() => {
//     let timeoutld;
//     if (showAlert) {
//       timeoutld = setTimeout(() => {
//         setShowAlert(false);
//       }, 3000);
//     }
//     return () => {
//       clearTimeout(timeoutld);
//     };
//   }, [showAlert]);

//   return (
//     <div classname="form">
//       <h1 className=" text-orange-500 font-semibold" style={elementStyle}>
//         Investment
//       </h1>
//       <FormStyled onSubmit={handleOnSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             name="name"
//             placeholder="Name"
//             value={inputState.name}
//             onChange={handleOnChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="amount">Amount</label>
//           <input
//             type="number"
//             className="form-control"
//             id="amount"
//             name="amount"
//             placeholder="Amount"
//             value={inputState.amount}
//             onChange={handleOnChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="type">Type</label>
//           <input
//             type="type"
//             className="form-control"
//             id="type"
//             name="type"
//             placeholder="Type"
//             value={inputState.type}
//             onChange={handleOnChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="startdate">Start Date</label>
//           <input
//             type="date"
//             className="form-control"
//             id="startdate"
//             name="startdate"
//             placeholder="Start Date"
//             value={inputState.startdate}
//             onChange={handleOnChange}
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="textarea">Description</label>
//           <textarea
//             type="textarea"
//             className="form-control"
//             id="textarea"
//             rows="3"
//             name="description"
//             placeholder="Add Description"
//             onChange={handleOnChange}
//           ></textarea>
//         </div>
//         <button
//           type="submit"
//           className="btn btn-primary border font-semibold text-lg mx-auto"
//         >
//           {" "}
//           Add Investment
//         </button>
//       </FormStyled>
//       <table className="table">
//         <thead className="thead-dark">
//           <tr>
//             <th scope="col">#</th>
//             <th scope="col">Name</th>
//             <th scope="col">Amount</th>
//             <th scope="col">type</th>
//             <th scope="col">Start Date</th>

//             <th scope="col">Description</th>
//             <th scope="col">Action</th>
//           </tr>
//         </thead>

//         <tbody>
//           {tableData.map((user, index) => (
//             <tr key={index.id}>
//               <td>{index + 1}</td>
//               <td>{user.name}</td>
//               <td>{user.amount}</td>
//               <td>{user.type}</td>
//               <td>{user.startdate}</td>

//               <td>{user.description}</td>
//               <td>
//                 <button className="btn btn-warning">Edit</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
// const FormStyled = styled.form`
//   display: flex;
//   flex-direction: column;
//   max-width: 400px;
//   margin: 0 auto;
//   margin-bottom: 15px;
//   .form-group {
//     margin-bottom: 1rem;
//   }

//   .form-control {
//     padding: 0.5rem 0.75rem;
//     border: 1px solid #ced4da;
//     border-radius: 0.25rem;
//     transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

//     &:focus {
//       outline: none;
//       border-color: #80bdff;
//       box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
//     }
//   }
//   .selects {
//     display: flex;
//     justify-content: flex-end;
//     select {
//       color: rgba(34, 34, 96, 0.4);
//       &:focus,
//       &:active {
//         color: rgba(34, 34, 96, 1);
//       }
//     }
//   }
//   .btn-primary {
//     background-color: #007bff;
//     border-color: #007bff;
//     border-radius: 12px;
//     margin-bottom: 4px;
//     width: 25vh;
//     &:hover {
//       background-color: #0069d9;
//       border-color: #0062cc;
//     }
//   }
// `;
// const elementStyle = {
//   fontSize: "2.5rem",
//   textAlign: "center",
// };
// export default Investment;


import React from "react";
import styled from "styled-components";
import { useEffect,useState } from "react";

import axios from 'axios'
// import { useNavigate } from 'react-router-dom';



function Investment() {
  // const navigate = useNavigate()
  const[showAlert,setShowAlert]=useState(false)
  const [tableData, setTableData] = useState([])
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
  
 
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (validateform()){
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
    setInputState({ name: "", amount: "", type: "", startdate: "",description: "", })
    
  }
  else{
    setShowAlert(true);
  }
};
   const validateform = () =>{
    const{name,amount,type,startdate,description} = inputState;

    if (
      name.trim() ===""||
      amount.trim() ==="" ||
      type.trim() === "" ||
      startdate.trim() === ""||
      description.trim() === ""
    )
    {
    setShowAlert(true);
    return false;
   }
     return true;
  };
  
  useEffect(()=>{
    let timeoutld;
    if(showAlert){
      timeoutld=setTimeout(()=>{
        setShowAlert(false)
      },3000)
    }
    return()=>{
      clearTimeout (timeoutld);
    };

  },[showAlert]);
  return (

    <div className="form">
      {showAlert&&(
        <AlertStyled>
            Please fill in all the fields before submitting!!
        </AlertStyled>
      )
      }
      <h1 className=" text-orange-500 font-semibold" style={element_style}>Investment</h1>
      <FormStyled onSubmit={handleOnSubmit}>
         <div className="form-group">
           <label htmlFor="name">Name</label>
           <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Name"
            value={inputState.name}
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
          <label htmlFor="type">Type</label>
          <input
            type="type"
            className="form-control"
            id="type"
            name="type"
            placeholder="Type"
            value={inputState.type}
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="startdate">Start Date</label>
          <input
            type="date"
            className="form-control"
            id="startdate"
            name="startdate"
            placeholder="Start Date"
            value={inputState.startdate}
            onChange={handleOnChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="textarea">Description</label>
          <textarea
            type="textarea"
            className="form-control"
            id="textarea"
            rows="3"
            name="description"
            placeholder="Add Description"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary border font-semibold text-lg mx-auto"
        >
          {" "}
          Add Investment
        </button>
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
          {tableData.map((user, index) => (
            <tr key={index.id}>
              <td>{index + 1}</td>
              <td>{user.title}</td>
              <td>{user.amount}</td>
              <td>{user.type}</td>
              <td>{user.date}</td>
              <td>{user.category}</td>
              <td>{user.description}</td>
              <td>
                <button className="btn btn-warning">Edit</button>
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
export default Investment;


