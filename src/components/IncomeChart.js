
import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

function IncomeChart() {
  const [incomeData, setIncomeData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/transactions/get-incomes')
      .then(response => {
        // Assuming the response data is an array of monthly income values
        setIncomeData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="container-fluid mb-5">
      <h3>Incomes</h3>
      <Chart
        type="bar"
        width={1380}
        height={700}
        series={[
          {
            name: 'Incomes',
            data: incomeData,
          },
        ]}
        options={{
          title: {
            text: "BarChart",
            style: { fontSize: 30 },
          },
          subtitle: {
            text: "This is BarChart graph",
            style: { fontSize: 18 },
          },
          colors: ["#f90000"],
          theme: { mode: "light" },
          xaxis: {
            tickPlacement: "on",
            categories: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
            title: {
              text: "Monthly Income",
              style: { color: "#f90000", fontSize: 30 },
            },
          },
          yaxis: {
            labels: {
              formatter: (val) => {
                return `${val}`;
              },
              style: { fontSize: 15, colors: ["#f90000"] },
            },
            title: {
              text: "User",
              style: { color: "#f90000", fontSize: 15 },
            },
          },
          legend: {
            show: true,
            position: "right",
          },
          dataLabels: {
            formatter: (val) => {
              return `${val}`;
            },
            style: {
              colors: ["#f4f4f4"],
              fontSize: 15,
            },
          },
        }}
      />
    </div>
  );
}

export default IncomeChart;
   



