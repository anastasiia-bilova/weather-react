// The API key shouldn't be stored in client-side JavaScript files.
// A client application running on a browser cannot securely store secrets.
// API key must be hidden, need to use the keys on server-side when we write our API calls.
export const API_KEY = process.env.REACT_APP_API_KEY;

export const DEFAULT_IMAGE_URL =
  "https://www.darksky.org/wp-content/uploads/2020/03/Earth-from-Space-istock-scaled.jpg";
export const KYIV_IMAGE_URL =
  "https://images.unsplash.com/photo-1591994719351-273dbc03f137?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80";
export const LONDON_IMAGE_URL =
  "https://images7.alphacoders.com/577/577962.jpg";
export const LVIV_IMAGE_URL =
  "https://cdnp.flypgs.com/files/Sehirler-long-tail/Lviv/lviv-sehir.jpg";
export const LISBON_IMAGE_URL =
  "https://i.ibb.co/gbK1Gkr/lisboa-compressed.jpg";
export const PARIS_IMAGE_URL = "https://wallpaperaccess.com/full/1192290.jpg";
export const BARCELONA_IMAGE_URL =
  "https://images.pexels.com/photos/5983559/pexels-photo-5983559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
export const TOKYO_IMAGE_URL =
  "https://upload.wikimedia.org/wikipedia/commons/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg";
export const EDINBURGH_IMAGE_URL =
  "https://www.stepin.de/weltneugier/wp-content/uploads/2011/11/adam-wilson-ktDODr-3tvY-unsplash-scaled.jpg";
export const REYKJAVIK_IMAGE_URL =
  "https://www.telegraph.co.uk/content/dam/Travel/hotels/2021/May/reykjavik-where-to-stay-p.jpg";
export const BERLIN_IMAGE_URL = "https://wallpaper.dog/large/20570120.jpg";
export const BERN_IMAGE_URL =
  "https://s1.1zoom.me/big0/26/Switzerland_Bern_Houses_Rivers_Bridges_Street_613622_1280x853.jpg";
export const VIENNA_IMAGE_URL =
  "https://cdn.britannica.com/61/154261-050-3E149111/view-dome-Vienna-St-Peters-pseudo-Gothic-Votive.jpg";
export const AMSTERDAM_IMAGE_URL =
  "https://www.bakermckenzie.com/-/media/images/locations/doing-business-netherlands_1440x788.jpg?sc_lang=en";
export const PRAGUE_IMAGE_URL = "https://t.ly/aHI_";
export const NEW_YORK_IMAGE_URL =
  "https://res.klook.com/image/upload/Mobile/City/szhx3ytpgfnhpbmsngk0.jpg";
export const NEW_ZEALAND_IMAGE_URL =
  "https://chrisgin.com/wp-content/uploads/2019/02/AucklandCity_00348.jpg";

export const IMAGE_URLS = {
  kyiv: KYIV_IMAGE_URL,
  lviv: LVIV_IMAGE_URL,
  london: LONDON_IMAGE_URL,
  lisbon: LISBON_IMAGE_URL,
  paris: PARIS_IMAGE_URL,
  barcelona: BARCELONA_IMAGE_URL,
  tokyo: TOKYO_IMAGE_URL,
  edinburgh: EDINBURGH_IMAGE_URL,
  reykjavik: REYKJAVIK_IMAGE_URL,
  berlin: BERLIN_IMAGE_URL,
  bern: BERN_IMAGE_URL,
  vienna: VIENNA_IMAGE_URL,
  amsterdam: AMSTERDAM_IMAGE_URL,
  prague: PRAGUE_IMAGE_URL,
  "new york": NEW_YORK_IMAGE_URL,
  "new zealand": NEW_ZEALAND_IMAGE_URL,
};

export const CODE_TO_ICON_MAPPING = {
  "01d": "CLEAR_DAY",
  "01n": "CLEAR_NIGHT",
  "02d": "PARTLY_CLOUDY_DAY",
  "02n": "PARTLY_CLOUDY_NIGHT",
  "03d": "PARTLY_CLOUDY_DAY",
  "03n": "PARTLY_CLOUDY_NIGHT",
  "04d": "CLOUDY",
  "04n": "CLOUDY",
  "09d": "RAIN",
  "09n": "RAIN",
  "10d": "RAIN",
  "10n": "RAIN",
  "11d": "RAIN",
  "11n": "RAIN",
  "13d": "SNOW",
  "13n": "SNOW",
  "50d": "FOG",
  "50n": "FOG",
};

export const LIST_OF_DAYS_OF_THE_WEEK = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];

export const LIST_OF_EXTENDED_DAYS_OF_THE_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const LIST_OF_CITIES = [
  "Kyiv",
  "London",
  "Paris",
  "Lisbon",
  "Barcelona",
  "Tokyo",
];
