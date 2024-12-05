import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [pollutionData, setPollutionData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.post("http://localhost:5000/predict-pollution", {
        latitude: 24.5,
        longitude: 45.7,
        plastic_debris: 0.8,
        oil_spill: 0.1,
      });
      setPollutionData(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Pollution Prediction</h2>
      {pollutionData ? (
        <p>Predicted Pollution Level: {pollutionData.pollution_prediction}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Dashboard;
