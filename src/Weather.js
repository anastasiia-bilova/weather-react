import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="d-flex flex-column text-center align-items-center">
        <div className="w-100 text-white">
          <p className="lead mb-0" id="date"></p>
          <h1 className="display-1 mb-0" id="city">
            Salzburg
          </h1>
          <h1 className="display-6 mt-0 mb-0" id="country">
            Austria
          </h1>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-8 col-xs-12">
          <div className="align-items-center g-2 p-2 row row-cols">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
              {/* <img src="" alt="Clear" id="icon" className="float-left" /> */}
              <span className="img" role="img" aria-label="Sun Behind Cloud">
                {" "}
                ⛅
              </span>
              <p className="text-white mb-0" id="description">
                Partly Cloudy
              </p>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
              <div className="float-left">
                <span className="temperature text-white" id="temperature">
                  20
                </span>
                <span className="units">
                  <a
                    href="https://sparkly-hamster-5c8b70.netlify.app/"
                    className="active text-white"
                    id="celsius-link"
                  >
                    °C
                  </a>
                  <span className="text-white">|</span>
                  <a
                    href="https://sparkly-hamster-5c8b70.netlify.app/"
                    className="text-white"
                    id="fahrenheit-link"
                  >
                    °F
                  </a>
                </span>
              </div>
              <p className="text-white mb-0">
                Max: <span id="max-temperature"></span> 21°
              </p>
              <p className="text-white mb-0">
                Min: <span id="min-temperature"></span>9°
              </p>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
              <div className="float-left">
                <ul>
                  <li>
                    Humidity: <span id="humidity"></span> 10 %
                  </li>
                  <li>
                    Wind: <span id="wind"></span> 10 km/h
                  </li>
                  <li>
                    Visibility: <span id="visibility"></span> 10000 km
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
