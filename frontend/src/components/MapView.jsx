import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

function MapView() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function fetchPollutionData() {
      try {
        const response = await axios.post("http://localhost:5000/predict-pollution", {
          latitude: 24.5,
          longitude: 45.7,
          plastic_debris: 0.8,
          oil_spill: 0.1,
        });
        setLocations(response.data);
      } catch (error) {
        console.error("Error fetching pollution data:", error);
      }
    }
    fetchPollutionData();
  }, []);

  
  const mumbaiHighCoords = [18.8, 69.9];

  return (
    <div className="map-view">
      <h2>Pollution and Marine Health Map</h2>
      <MapContainer center={[18.25, 72.20]} zoom={6} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
    
        <Marker position={mumbaiHighCoords}>
          <Popup>
            <div>
              <h3>Mumbai High (Arabian Sea)</h3>
              <p>Pollution Level: High</p>
              <p>Plastic Debris: Unknown</p>
              <p>Oil Spill: Active</p>
            </div>
          </Popup>
        </Marker>

    
        {locations.length > 0 && locations.map((location, index) => (
          <Marker key={index} position={[location.latitude, location.longitude]}>
            <Popup>
              <div>
                <h3>{location.name}</h3>
                <p>Pollution Level: {location.pollution_prediction}</p>
                <p>Plastic Debris: {location.plastic_debris}</p>
                <p>Oil Spill: {location.oil_spill}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapView;
