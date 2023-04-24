import React from "react";
import { Doughnut } from "react-chartjs-2";

const dataDoughnut = {
  labels: ["Bonds", "Stocks"],
  datasets: [
    {
      label: "Portfolio Allocation",
      data: [20, 80],
      backgroundColor: ["blue", "red"],
      borderWidth: 1,
    },
  ],
};

const optionsPortfolioChart = {
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRation: false,
};

const PortfolioChart = () => {
  return <div style={{ width: "400px", height: "400px" }}></div>;
};

export default PortfolioChart;
