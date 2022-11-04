import React, { useState, useEffect } from "react";
import axios from "axios";

import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    const apiKey = "8f82c6d344f9012fca0574b26e72d1f7";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="g-1 g-xl-3 g-lg-3 g-md-2 g-sm-2 my-5 row row-cols-5 justify-content-center">
          {forecast.map(function (dailyForecast, index) {
            if (index > 0 && index < 6) {
              return (
                <div
                  className="col col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-0 mx-lg-2 mx-xs-0"
                  key={index}
                >
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
    return "Loading forecast...";
  }
}
