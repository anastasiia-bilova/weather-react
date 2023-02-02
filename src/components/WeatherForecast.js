import React, { useState, useEffect } from "react";
import axios from "axios";

import { API_KEY } from "../utils/constants";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const latitude = props.coordinates.lat;
  const longitude = props.coordinates.lon;
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState({});

  useEffect(() => {
    async function fetchWeatherForecast() {
      if (!latitude && !longitude) return null;
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        );

        setForecast(response.data.daily);
        setLoaded(true);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchWeatherForecast();
  }, [props.coordinates]);

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row g-1 my-4 justify-content-center">
          {forecast.map(function (dailyForecast, index) {
            if (index > 0 && index < 6) {
              return (
                <div className="col mx-1 mx-lg-2" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  }
  return null;
}
