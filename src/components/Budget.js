

// import React from "react";
// import styled from "styled-components";
// import { useState } from "react";

// import axios from "axios";


// function Budget() {

//   const [tableData, setTableData] = useState([]);
//   const [inputState, setInputState] = useState({
//     category: "",
//     amount: "",
//     startDate: "",
//     endDate: "",
//   });

//   const [showAlert, setShowAlert] = useState(false);
//   const handleOnChange = (event) => {
//     setInputState({ ...inputState, [event.target.name]: event.target.value });
//   };

//   const handleOnSubmit = (event) => {
//     event.preventDefault();

//     if (validateForm()) {
//       axios
//         .post("http://localhost:5000/budgets", inputState, {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//           },
//           withCredentials: true, // Include credentials in the request
//         })
//         .then((response) => {
//           setTableData((prev) => [...prev, response.data]);

//           console.log("Form Submitted:", response.data);

//           setInputState({ category: "", amount: "", startDate: "", endDate: "" })
//         })
//         .catch((error) => {
//           console.error("Error submitting form:", error);
//         });
//     } else {
//       setShowAlert(true);
//     }

//   };

//   const validateForm = () => {
//     const { category, amount, startDate, endDate } = inputState;

//     if (
//       category.trim() === "" ||
//       amount.trim() === "" ||
//       startDate.trim() === "" ||
//       endDate.trim() === ""
//     ) {
//       return false;
//     }
//     return true;
//   };

//   return (
//     <div className="form h-screen">
//       <h1 className=" text-orange-500 font-semibold" style={elementStyle}>Budget</h1>
//       {showAlert && (
//         <AlertStyled>
//           Please fill in all the fields before submitting!!
//         </AlertStyled>
//       )}
//       <FormStyled onSubmit={handleOnSubmit}>
//         <div className="form-group mx-auto">
//           <label htmlFor="category">Category</label>
//           <input
//             value={inputState.category}
//             type="text"
//             className="form-control w-96"
//             id="category"
//             name="category"
//             onChange={handleOnChange}
//           />
//         </div>
//         <div className="form-group mx-auto">
//           <label htmlFor="amount">Amount</label>
//           <input
//             value={inputState.amount}
//             type="number"
//             className="form-control w-96"
//             id="amount"
//             name="amount"
//             onChange={handleOnChange}
//           />
//         </div>
//         <div className="form-group mx-auto">
//           <label htmlFor="startDate">Start Date</label>
//           <input
//             value={inputState.startDate}
//             type="date"
//             className="form-control w-96"
//             id="startDate"
//             name='startDate'
//             onChange={handleOnChange}
//           />
//         </div>
//         <div className="form-group mx-auto">
//           <label htmlFor="endDate">End Date</label>
//           <input
//             value={inputState.endDate}
//             type="date"
//             className="form-control w-96"
//             id="endDate"
//             name="endDate"
//             onChange={handleOnChange}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary border font-semibold text-lg mx-auto"> Add Budget
//         </button>
//       </FormStyled>
//       <table className="table">
//         <thead className="thead-dark">
//           <tr>
//             <th scope="col">#</th>
//             <th scope="col">Category</th>
//             <th scope="col">Amount</th>
//             <th scope="col">Start Date</th>
//             <th scope="col">End Date</th>

//             <th scope="col">Action</th>
//           </tr>
//         </thead>

//         <tbody>
//           {tableData.map((user, index) => (
//             <tr key={index}>
//               <td>{index + 1}</td>
//               <td>{user.category}</td>
//               <td>{user.amount}</td>
//               <td>{user.startDate}</td>
//               <td>{user.endDate}</td>

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
//     width: 20vh;
//     &:hover {
//       background-color: #0069d9;
//       border-color: #0062cc;
//     }
//   }
// `;
// const AlertStyled = styled.div`
//   background-color: #f8d7da;
//   color: #721c24;
//   padding: 10px;
//   margin-bottom: 10px;
//   border: 1px solid #f5c6cb;
//   border-radius: 4px;
// `;

// const elementStyle = {
//   fontSize: "2.5rem",
//   textAlign: "center",
// };
// export default Budget;

import React from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

function Budget() {
  const [tableData, setTableData] = useState([]);
  const [inputState, setInputState] = useState({
    category: "",
    amount: "",
    startDate: "",
    endDate: ""
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleOnChange = (event) => {
    setInputState({ ...inputState, [event.target.name]: event.target.value });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      axios
        .post("http://localhost:5000/budgets", inputState, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
          },
          withCredentials: true // Include credentials in the request
        })
        .then((response) => {
          setTableData((prev) => [...prev, response.data]);
          console.log("Form Submitted:", response.data);
          setInputState({ category: "", amount: "", startDate: "", endDate: "" });
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
        });
    } else {
      setShowAlert(true);
    }
  };

  const validateForm = () => {
    const { category, amount, startDate, endDate } = inputState;

    if (
      category.trim() === "" ||
      amount.trim() === "" ||
      startDate.trim() === "" ||
      endDate.trim() === ""
    ) {
      return false;
    }
    return true;
  };

  return (
    <div className="form h-full">
      {/* {showAlert && (
        <AlertStyled>
          Please fill in all the fields before submitting!!
        </AlertStyled>
      )} */}
      <h1 className="text-orange-500 font-semibold mb-2" style={elementStyle}>
        Budget
      </h1>
      <FormStyled className="shadow-lg rounded-lg" onSubmit={handleOnSubmit}
        style={{ backgroundColor: "#ffffff11" }}
      >        <div className="form-group mx-auto">
          <label htmlFor="category">Category</label>
          <input
            value={inputState.category}
            type="text"
            className="form-control w-96"
            id="category"
            name="category"
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group mx-auto">
          <label htmlFor="amount">Amount</label>
          <input
            value={inputState.amount}
            type="number"
            className="form-control w-96"
            id="amount"
            name="amount"
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group mx-auto">
          <label htmlFor="startDate">Start Date</label>
          <input
            value={inputState.startDate}
            type="date"
            className="form-control w-96"
            id="startDate"
            name='startDate'
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group mx-auto">
          <label htmlFor="endDate">End Date</label>
          <input
            value={inputState.endDate}
            type="date"
            className="form-control w-96"
            id="endDate"
            name="endDate"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit" className="mb-2 btn btn-primary border font-semibold text-lg mx-auto"> Submit
        </button>
      </FormStyled>
      <table className="table w-5/6 mx-auto  rounded-full shadow-xl">
        <thead className="thead-dark bg-gray-700 text-white">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Category</th>
            <th scope="col">Amount</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>

            <th scope="col">Action</th>
          </tr>
        </thead>

        <tbody className="bg-gray-400">
          {tableData.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.category}</td>
              <td>{user.amount}</td>
              <td>{user.startDate}</td>
              <td>{user.endDate}</td>

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

export default Budget;
