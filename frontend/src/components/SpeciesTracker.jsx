import React, { useState } from "react";
import axios from "axios";

function SpeciesTracker() {
  const [speciesData, setSpeciesData] = useState(null);
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);  // Get the selected file
  };

  const fetchSpeciesData = async () => {
    const formData = new FormData();
    formData.append("image", image);  // Add the image to FormData

    try {
      const response = await axios.post("http://localhost:5000/species-classification", formData, {
        headers: {
          "Content-Type": "multipart/form-data",  // Ensure correct content type for file upload
        },
      });
      setSpeciesData(response.data);  // Set the species data from the response
    } catch (error) {
      console.error("Error fetching species data:", error);
    }
  };

  return (
    <div>
      <h2>Species Classification</h2>
      <input type="file" onChange={handleImageChange} />
      <button onClick={fetchSpeciesData}>Classify Species</button>
      {speciesData && (
        <div>
          <h3>Species: {speciesData.species}</h3>
        </div>
      )}
    </div>
  );
}

export default SpeciesTracker;
