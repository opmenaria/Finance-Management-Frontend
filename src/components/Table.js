// import React from 'react'
// import axios from "axios";
// import {useState, useEffect} from 'react';
// function Table() {
//    const [tableData, setTableData] = useState([]);
//     useEffect{()=>{
//         axios.get("http://localhost:5000/transactions/get-incomes",tableData)
//         .then((response)=>{
//            setTableData(response.data);
//         })
//        .catch((error)=>{
//            console.log("Errors fetching data:",error);
//        },[])
//     }

//      };


   
//   return (
//     <div>
//       <table className="table">
//         <thead className="thead-dark">
//           <tr>
//             <th scope="col">#</th>
//             <th scope="col">Title</th>
//             <th scope="col">Amount</th>
//             <th scope="col">Date</th>
//             <th scope="col">Category</th>
//             <th scope="col">Description</th>
//             <th scope="col">Action</th>
//           </tr>
//         </thead>

//         <tbody>
//           {tableData.map((user, index) => (
//             <tr key={index.id}>
//               <td>{user.title}</td>
//               <td>{user.amount}</td>
//               <td>{user.date}</td>
//               <td>{user.category}</td>
//               <td>{user.description}</td>
//           <button className="btn btn-warning" >
//             Edit
//           </button>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default Table


import React, { useState, useEffect } from 'react';
import axios from "axios";

function Table() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("http://localhost:5000/transactions/get-incomes")
      .then((response) => {
        setTableData(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  };

  return (
    <div>
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
          {tableData.map((user, index) => (
            <tr key={index.id}>
              <td>{index + 1}</td>
              <td>{user.title}</td>
              <td>{user.amount}</td>
              <td>{user.date}</td>
              <td>{user.category}</td>
              <td>{user.description}</td>
              <td>
                <button className="btn btn-warning">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

