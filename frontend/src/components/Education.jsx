import React, { useState } from 'react';
import './Education.css';
import WaterQualityTracker from './WaterQualityTracker';
import WeatherTracker from './WeatherTracker';
import WildlifeCorridor from './WildlifeCorridor';
import SpeciesTracker from './SpeciesTracker';
import Dashboard from './Dashboard';
import MapView from './MapView';
import MarineHeatwavePrediction from './MarineHeatwavePrediction';
import card1 from '../assets/card1.jpg';
import card2 from '../assets/card2.jpg'; // Add more card images if needed
import card4 from '../assets/card4.jpg';
import card5 from '../assets/card5.jpg';
import card6 from '../assets/card6.jpg';
import card7 from '../assets/card7.jpg';
export default function Education() {
  const [activeInfo, setActiveInfo] = useState(null);

  const components = {
    fireVehicle: <WaterQualityTracker />,
    fireEducation: <WeatherTracker />,
    fireResponse: <WildlifeCorridor />,
    speciesTracker: <SpeciesTracker />,
    dashboard: <Dashboard />,
    marineHeatwave: <MarineHeatwavePrediction />,
  };

  // Add unique backgrounds for each item
  const educationItems = [
    { key: 'fireVehicle', background: card1 },
    { key: 'fireEducation', background: card2 },
    { key: 'fireResponse', background: card4 },
    { key: 'speciesTracker', background: card5 },
    { key: 'dashboard',  background: card7 },
    { key: 'marineHeatwave', background: card6 },
  ];

  const resetInfo = () => setActiveInfo(null);

  return (
    <div id="edu-cation">
      {!activeInfo ? (
        <div>
          <h1 className="Education-Head">Features</h1>
          <div className="Education-Card">
            {educationItems.map((item) => (
              <div
                key={item.key}
                style={{ backgroundImage: `url(${item.background})` }} // Set unique background for each card
                className="Education-subcard"
                onClick={() => setActiveInfo(item.key)}
              >
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="info-container">
          <button onClick={resetInfo} className="info-container-button">
            X
          </button>
          <div className="img-info">{components[activeInfo]}</div>
        </div>
      )}
    </div>
  );
}
