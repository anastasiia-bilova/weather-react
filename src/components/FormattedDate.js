import React from "react";

import { LIST_OF_EXTENDED_DAYS_OF_THE_WEEK } from "../utils/constants";

export default function FormattedDate(props) {
  let currentDate = new Date(props.date * 1000);
  let hours = currentDate.getHours();
  let minutes = String(currentDate.getMinutes()).padStart(2, "0");
  let day = LIST_OF_EXTENDED_DAYS_OF_THE_WEEK[currentDate.getDay()];

  return (
    <div className="FormattedDate">
      <p className="lead fw-lighter">
        {day} {hours}:{minutes}
      </p>
    </div>
  );
}
