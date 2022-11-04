import React from "react";

import "./WeatherForecastDay.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let date = new Date(props.data.dt * 1000);
  let day = days[date.getDay()];

  return (
    <div className="WeatherForecastDay">
      <div className="day">{day}</div>
      <WeatherIcon
        code={props.data.weather[0].icon}
        size={44}
        className="icon"
      />
      <div className="temperature">
        <span className="temperature-max">
          {Math.round(props.data.temp.max)}°
        </span>
        <span className="temperature-min">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
