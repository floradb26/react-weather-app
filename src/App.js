import React from "react";
import Weather from "./Weather";


import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container"> 
        <Weather defaultCity="Brussels" />
        <footer >
          This project is created by Floriane Ramirez De Bruyne and is {" "}
        <a href="https://github.com/floradb26/react-weather-app" target="_blank" rel="noreferrer">open-sourced on GitHub</a> and hosted on <a href="https://naughty-aryabhata-a7d453.netlify.app/" target="_blank" rel="noreferrer">Netlify</a>
        </footer>
        </div>
    </div>
  );
}


