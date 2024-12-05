// WildlifeCorridor.js
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import axios from "axios";
import L from "leaflet";



// Set initial coordinates for the terrestrial and marine areas
const terrestrialLocation = [50, -10]; // Example: Dubai (terrestrial area)
const marineLocation = [55, -60]; // Example: Hong Kong (marine area)

function WildlifeCorridor() {
  const [environmentalData, setEnvironmentalData] = useState(null);

  useEffect(() => {
    // Fetch environmental data from OpenWeatherMap or another API (simplified)
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=22.3964&lon=114.1095&units=metric&appid=YOUR_API_KEY`)
      .then((response) => {
        setEnvironmentalData(response.data);
      })
      .catch((error) => console.log("Error fetching data", error));
  }, []);

  // Corridor line connecting terrestrial and marine areas
  const corridor = [terrestrialLocation, marineLocation];

  return (
    <div>
      <h2>Wildlife Corridor: Terrestrial to Marine Connection</h2>

      <MapContainer center={terrestrialLocation} zoom={2} style={{ height: "500px", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        
        <Marker position={terrestrialLocation}>
          <Popup>Terrestrial Area (e.g., Nesting Site)</Popup>
        </Marker>

        <Marker position={marineLocation}>
          <Popup>Marine Area (e.g., Feeding Ground)</Popup>
        </Marker>

        {/* Corridor Line */}
        <Polyline positions={corridor} color="blue" />

      </MapContainer>

      {environmentalData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Marine Area Environmental Data</h3>
          <p>Temperature: {environmentalData.main.temp}°C</p>
          <p>Humidity: {environmentalData.main.humidity}%</p>
          <p>Weather: {environmentalData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default WildlifeCorridor;
