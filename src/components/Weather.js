import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  API_KEY,
  DEFAULT_IMAGE_URL,
  IMAGES_URL,
  LIST_OF_CITIES,
} from "../utils/constants";
import "../styles/Weather.css";
import FormattedDate from "./FormattedDate";
import WeatherCountry from "./WeatherCountry";
import WeatherForecast from "./WeatherForecast";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function Weather(props) {
  const [data, setData] = useState({
    coordinates: "",
    date: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    countryCode: "",
    humidity: "",
    wind: "",
    description: "",
    icon: "",
    city: "",
  });
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState(props.defaultCity);
  const cities = [];
  const [coords, setCoords] = useState({ latitude: "", longitude: "" });
  const [counter, setCounter] = useState(0);
  const [isDefaultImage, setIsDefaultImage] = useState(true);

  const WEATHER_API_URL_WITH_COORDINATES = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}&units=metric`;
  const WEATHER_API_URL_WITH_QUERY = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=metric`;

  async function sendRequestToAPI(url) {
    try {
      const response = await axios.get(url);

      setData({
        coordinates: response.data.coord,
        date: response.data.dt,
        temperature: Math.round(response.data.main.temp),
        maxTemperature: Math.round(response.data.main.temp_max),
        minTemperature: Math.round(response.data.main.temp_min),
        countryCode: response.data.sys.country,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        city: response.data.name,
      });

      if (response.data.name.toLowerCase() in IMAGES_URL) {
        setIsDefaultImage(false);
        document.body.setAttribute(
          "style",
          `background-image: url(${
            IMAGES_URL[response.data.name.toLowerCase()]
          })`
        );
      } else {
        setIsDefaultImage(true);
        document.body.setAttribute(
          "style",
          `background-image: url(${DEFAULT_IMAGE_URL})`
        );
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    async function fetchWeatherByQuery() {
      await sendRequestToAPI(WEATHER_API_URL_WITH_QUERY);
    }

    fetchWeatherByQuery();
  }, [search]);

  useEffect(() => {
    async function fetchWeatherByCoordinates() {
      if (counter > 0) {
        await sendRequestToAPI(WEATHER_API_URL_WITH_COORDINATES);
      }
    }

    fetchWeatherByCoordinates();
  }, [counter]);

  async function handleSubmit(event) {
    event.preventDefault();
    setSearch(query);
  }

  async function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(function (position) {
      if (position.coords) {
        setCoords({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setCounter(counter + 1);
      }
    });
  }

  LIST_OF_CITIES.forEach((data, index) => {
    cities.push(
      <div key={index} className="d-inline">
        <button
          className="btn shadow-none"
          type="button"
          onClick={() => setSearch(data)}
        >
          {data}
        </button>
      </div>
    );
  });

  return (
    <div className="Weather">
      <div className="row mt-3">
        <div className="col-lg-10 offset-lg-1 col-12">
          <form
            className="input-group"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <input
              type="search"
              className="form-control input-keyword"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Enter a city"
              aria-label="Recipient's username with two button addons"
              style={{ border: isDefaultImage ? "1px solid #fff" : "" }}
            />
            <button
              className="btn btn-outline-light btn-search"
              type="button"
              onClick={() => setSearch(query)}
              style={{ border: isDefaultImage ? "1px solid #fff" : "" }}
            >
              Search
            </button>
            <button
              className="btn btn-outline-light btn-location"
              type="button"
              onClick={getCurrentLocation}
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="It may take a few seconds to display the weather for your location."
              style={{ border: isDefaultImage ? "1px solid #fff" : "" }}
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
          <div className="list-of-cities text-start">{cities}</div>
        </div>
      </div>
      <div className="weather-description mt-4 py-5">
        <div>
          <FormattedDate date={data.date} />
          <h1 className="display-2 fw-bold">{data.city}</h1>
          <WeatherCountry countryCode={data.countryCode} />
        </div>
        <div className="d-flex flex-column flex-sm-row align-items-center mt-3">
          <div className="col">
            <div className="mt-4">
              <WeatherIcon code={data.icon} size={62} />
            </div>
            <p className="mb-0">{data.description}</p>
          </div>
          <div className="col order-first order-sm-1 align-self-center align-self-sm-end">
            <WeatherTemperature celsius={data.temperature} />
            <p className="d-inline">
              Max: <span>{data.maxTemperature}°&nbsp;&nbsp;</span>
            </p>
            <p className="d-inline">
              Min: <span>{data.minTemperature}°</span>
            </p>
          </div>
          <div className="col mt-4 order-sm-last align-self-center align-self-sm-end">
            <ul>
              <li>
                Humidity: <span>{data.humidity}</span> %
              </li>
              <li>
                Wind: <span>{data.wind}</span> km/h
              </li>
            </ul>
          </div>
        </div>
        <WeatherForecast coordinates={data.coordinates} />
      </div>
    </div>
  );
}
