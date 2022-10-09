import Forecast from "./Forecast";
import Footer from "./Footer";
import Header from "./Header";
import Video from "./Video";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <section>
        <Video />
        <div className="container h-100">
          <div className="row g-xl-0 g-lg-0 g-md-0 mt-xl-4 mt-lg-3 mt-md-3 mt-sm-3 mt-3 mx-0">
            <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-12 col-xs-12">
              <Header />
            </div>
          </div>
          <Weather />
          <Forecast />
          <Footer />
        </div>
      </section>
    </div>
  );
}
