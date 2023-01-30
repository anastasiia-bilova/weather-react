import React from "react";

import "./WeatherForecastDay.css";
import { LIST_OF_DAYS_OF_THE_WEEK } from "./Constants";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  let date = new Date(props.data.dt * 1000);
  let day = LIST_OF_DAYS_OF_THE_WEEK[date.getDay()];

  return (
    <div className="WeatherForecastDay">
      <div className="day py-3">{day}</div>
      <WeatherIcon
        code={props.data.weather[0].icon}
        size={40}
        className="icon"
      />
      <div className="temperature pt-2">
        <span className="temperature-max">
          {Math.round(props.data.temp.max)}°
        </span>
        <span className="temperature-min ms-2">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
