import React from "react";
import Weather from "./Weather";


import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container"> 
        <Weather defaultCity="Brussels" />
        <footer>
          This project is created by Floriane Ramirez De Bruyne and is {" "}
        <a href="https://github.com/floradb26/react-weather-app" target="_blank" rel="noreferrer">open-sourced on GitHub</a>
        </footer>
        </div>
    </div>
  );
}


