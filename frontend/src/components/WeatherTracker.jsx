import React, { useState } from "react";
import axios from "axios";

const api = {
  key: "d03de66a01abbebed957e480140effdc",
  base: "https://api.openweathermap.org/data/2.5/"
};

function WeatherTracker() {
  const [search, setSearch] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeatherData = () => {
    axios
      .get(`${api.base}weather?q=${search}&units=metric&appid=${api.key}`, {
        timeout: 5000,
      })
      .then((response) => {
        setWeatherData(response.data); 
        setError(null); 
      })
      .catch((err) => {
        setWeatherData(null); 
        setError("Error fetching weather data. Please try again."); 
        console.error("Error fetching weather data", err);
      });
  };

  return (
    <div>
      <h2>Weather Tracker</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter a city"
      />
      <button onClick={fetchWeatherData}>Get Weather</button>

      {error && <p>{error}</p>} {/* Display error message if any */}

      {weatherData && (
        <div>
          <h3>Weather in {weatherData.name}</h3>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherTracker;
