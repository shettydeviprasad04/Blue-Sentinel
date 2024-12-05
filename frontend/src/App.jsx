// App.js
import React from "react";
import HomeNavbar from './components/HomeNavbar';
import Body from './components/Body';
import Footer from "./components/Footer";

import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <HomeNavbar />
      <Body />
      <Education />
      <Footer/>
      
    </div>
  );
}

export default App;
