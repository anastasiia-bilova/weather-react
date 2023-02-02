import React, { useState, useEffect } from "react";
import axios from "axios";

export default function WeatherCountry(props) {
  const [country, setCountry] = useState("");
  const [countryList, setCountryList] = useState({});

  useEffect(() => {
    async function fetchCountryList() {
      try {
        const response = await axios.get(
          `https://pkgstore.datahub.io/core/country-list/data_json/data/8c458f2d15d9f2119654b29ede6e45b8/data_json.json`
        );
        if (Object.keys(response).length !== 0) setCountryList(response.data);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchCountryList();
  }, []);

  useEffect(() => {
    if (Object.keys(countryList).length !== 0) {
      countryList.forEach((countryElement) => {
        if (countryElement.Code === props.countryCode) {
          setCountry(countryElement.Name);
        }
      });
    }
  }, [props.countryCode]);

  return (
    <div className="WeatherCountry">
      <h1 className="display-6 fw-lighter">{country}</h1>
    </div>
  );
}
