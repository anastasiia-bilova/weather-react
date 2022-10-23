import React from "react";
import Forecast from "./Forecast";
import Footer from "./Footer";
import Video from "./Video";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <section>
        <Video />
        <div className="container h-100">
          <Weather defaultCity="London" />
          <Forecast />
          <Footer />
        </div>
      </section>
    </div>
  );
}
