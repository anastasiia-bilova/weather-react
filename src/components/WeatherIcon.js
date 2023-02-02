import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

import { CODE_ICON_MAPPING } from "../utils/constants";

export default function WeatherIcon(props) {
  if (props.code) {
    return (
      <ReactAnimatedWeather
        icon={CODE_ICON_MAPPING[props.code]}
        color="#fff"
        size={props.size}
        animate={true}
      />
    );
  }
  return null;
}
