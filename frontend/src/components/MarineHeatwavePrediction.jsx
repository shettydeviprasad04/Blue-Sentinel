import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './MarineHeatwavePrediction.css';

// Register the required components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function MarineHeatwavePrediction() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], // Example months
    datasets: [
      {
        label: 'Ocean Surface Temperature (°C)',
        data: [24.1, 24.5, 25.0, 26.3, 27.5, 28.1, 29.0], // Simulated data
        borderColor: '#ff5722',
        backgroundColor: 'rgba(255, 87, 34, 0.2)',
        fill: true,
      },
      {
        label: 'Heatwave Threshold (°C)',
        data: [27, 27, 27, 27, 27, 27, 27],
        borderColor: '#ff0000',
        borderDash: [5, 5],
        borderWidth: 2,
        pointStyle: 'line',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Temperature (°C)',
        },
        min: 20,
        max: 30,
      },
    },
  };

  return (
    <div className="marine-heatwave-container">
      <h2>Marine Heatwave Prediction</h2>
      <p>
        The graph below visualizes ocean surface temperatures over time, with a
        threshold indicating heatwave risk levels. Elevated temperatures above
        the threshold can trigger warnings for marine ecosystems.
      </p>
      <div className="chart-container">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
