import React from "react";

import "./Weather.css";

export default function FormattedDate(props) {
  let extendedDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let hours = props.date.getHours();
  let minutes = String(props.date.getMinutes()).padStart(2, "0");
  let day = extendedDays[props.date.getDay()];

  return (
    <div className="FormattedDate">
      <p className="lead mb-0">
        {day} {hours}:{minutes}
      </p>
    </div>
  );
}
