import React, { useState } from "react";
import axios from "axios";
import './WaterQualityTracker.css';


function WaterQualityTracker() {
  const [inputData, setInputData] = useState({
    pH: "",
    Hardness: "",
    Solids: "",
    Chloramines: "",
    Sulfate: "",
    Conductivity: "",
    Organic_carbon: "",
    Trihalomethanes: "",
    Turbidity: ""
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:5000/predict-water-quality", inputData);
      setResult(response.data.Potability === 1 ? "Potable" : "Non-potable");
    } catch (error) {
      console.error("Error predicting water quality:", error);
    }
  };

  return (
    <div className="container">
      <h2>Water Quality Prediction</h2>
      <div>
        <label>pH:</label>
        <input type="number" name="pH" value={inputData.pH} onChange={handleChange} />
      </div>
      <div>
        <label>Hardness:</label>
        <input type="number" name="Hardness" value={inputData.Hardness} onChange={handleChange} />
      </div>
      <div>
        <label>Solids:</label>
        <input type="number" name="Solids" value={inputData.Solids} onChange={handleChange} />
      </div>
      <div>
        <label>Chloramines:</label>
        <input type="number" name="Chloramines" value={inputData.Chloramines} onChange={handleChange} />
      </div>
      <div>
        <label>Sulfate:</label>
        <input type="number" name="Sulfate" value={inputData.Sulfate} onChange={handleChange} />
      </div>
      <div>
        <label>Conductivity:</label>
        <input type="number" name="Conductivity" value={inputData.Conductivity} onChange={handleChange} />
      </div>
      <div>
        <label>Organic Carbon:</label>
        <input type="number" name="Organic_carbon" value={inputData.Organic_carbon} onChange={handleChange} />
      </div>
      <div>
        <label>Trihalomethanes:</label>
        <input type="number" name="Trihalomethanes" value={inputData.Trihalomethanes} onChange={handleChange} />
      </div>
      <div>
        <label>Turbidity:</label>
        <input type="number" name="Turbidity" value={inputData.Turbidity} onChange={handleChange} />
      </div>
      <button onClick={handleSubmit}>Predict</button>
      {result && (
        <div>
          <h3>Predicted Water Quality: {result}</h3>
        </div>
      )}
    </div>
  );
}

export default WaterQualityTracker;
