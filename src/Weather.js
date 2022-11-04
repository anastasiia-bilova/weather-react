import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";
import FormattedDate from "./FormattedDate";
import WeatherForecast from "./WeatherForecast";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [submittedCity, setSubmittedCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      maxTemperature: Math.round(response.data.main.temp_max),
      minTemperature: Math.round(response.data.main.temp_min),
      country: response.data.sys.country, // formatCountry()
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      ready: true,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedCity(city);
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "8f82c6d344f9012fca0574b26e72d1f7";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row g-xl-0 g-lg-0 g-md-0 mt-xl-4 mt-lg-3 mt-md-3 mt-sm-3 mt-3 mx-0">
          <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-12 col-xs-12">
            {/* <form className="input-group" id="search-form" autoComplete="off"> */}
            <form
              className="input-group"
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <input
                type="search"
                className="form-control input-keyword"
                onChange={handleCityChange}
                placeholder="Search for location"
                aria-label="Recipient's username with two button addons"
              />
              <button
                className="btn btn-outline-light btn-search"
                type="submit"
              >
                Search
              </button>
              <button
                className="btn btn-outline-light btn-location"
                id="current-location"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-geo-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"
                  ></path>
                </svg>
              </button>
            </form>
            <div className="list-of-cities" id="list-of-cities"></div>
          </div>
        </div>
        <div className="d-flex flex-column text-center align-items-center">
          <div className="w-100 text-white">
            <p className="lead mb-0"></p>
            <FormattedDate date={weatherData.date} />
            <h1 className="display-1 mb-0">{submittedCity}</h1>
            {/* <h1 className="display-6 mt-0 mb-0" id="country">
              Austria
            </h1> */}
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-8 col-xs-12">
            <div className="align-items-center g-2 p-2 row row-cols">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                {/* <img src="" alt="Clear" id="icon" className="float-left" /> */}
                <div>
                  <WeatherIcon code={weatherData.icon} size={62} />
                </div>
                {/* <span className="img" role="img" aria-label="Sun Behind Cloud">
                  {" "}
                  ⛅
                </span> */}
                <p className="text-white mb-0">{weatherData.description}</p>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                <div className="float-left">
                  <WeatherTemperature celsius={weatherData.temperature} />
                </div>
                <p className="text-white mb-0">
                  Max: <span>{weatherData.maxTemperature}°</span>
                </p>
                <p className="text-white mb-0">
                  Min: <span>{weatherData.minTemperature}°</span>
                </p>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                <div className="float-left">
                  <ul>
                    <li>
                      Humidity: <span>{weatherData.humidity}</span> %
                    </li>
                    <li>
                      Wind: <span>{weatherData.wind}</span> km/h
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading weather...";
  }
}
