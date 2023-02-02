import React from "react";

import Footer from "./Footer";
import Weather from "./Weather";

import "../styles/App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <Footer />
      </div>
    </div>
  );
}
