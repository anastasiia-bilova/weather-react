import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature fw-bold">{props.celsius}</span>
        <span className="units fw-bold">
          °C |
          <a
            href="/"
            className="text-white text-decoration-none"
            onClick={showFahrenheit}
          >
            {" "}
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature fw-bold">{fahrenheit()}</span>
        <span className="units fw-bold">
          <a
            href="/"
            className="text-white text-decoration-none"
            onClick={showCelsius}
          >
            °C{" "}
          </a>
          | °F
        </span>
      </div>
    );
  }
}
