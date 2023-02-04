// The API key shouldn't be stored in client-side JavaScript files.
// A client application running on a browser cannot securely store secrets.
// API key must be hidden, need to use the keys on server-side when we write our API calls.
export const API_KEY = process.env.REACT_APP_API_KEY;

export const DEFAULT_IMAGE_URL =
  "https://www.darksky.org/wp-content/uploads/2020/03/Earth-from-Space-istock-scaled.jpg";
export const KYIV_IMAGE_URL =
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/065/820/original/Kyiv-2.png?1675547141";
export const LONDON_IMAGE_URL =
  "https://images7.alphacoders.com/577/577962.jpg";
export const LVIV_IMAGE_URL =
  "https://cdnp.flypgs.com/files/Sehirler-long-tail/Lviv/lviv-sehir.jpg";
export const LISBON_IMAGE_URL = "https://wallpaperaccess.com/full/1647316.jpg";
export const PARIS_IMAGE_URL = "https://wallpaperaccess.com/full/1192290.jpg";
export const BARCELONA_IMAGE_URL =
  "https://images.pexels.com/photos/5983559/pexels-photo-5983559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
export const TOKYO_IMAGE_URL = "https://wallpaperaccess.com/full/4396201.jpg";
export const EDINBURGH_IMAGE_URL =
  "https://wallpaperaccess.com/full/7272961.jpg";
export const REYKJAVIK_IMAGE_URL =
  "https://wallpaperaccess.com/full/804362.jpg";
export const BERLIN_IMAGE_URL = "https://wallpaperaccess.com/full/1124725.jpg";
export const BERN_IMAGE_URL = "https://wallpaperaccess.com/full/2073055.jpg";
export const VIENNA_IMAGE_URL =
  "https://cdn.britannica.com/61/154261-050-3E149111/view-dome-Vienna-St-Peters-pseudo-Gothic-Votive.jpg";
export const AMSTERDAM_IMAGE_URL =
  "https://wallpaperaccess.com/full/2828248.jpg";
export const PRAGUE_IMAGE_URL = "https://wallpaperaccess.com/full/41215.jpg";
export const NEW_YORK_IMAGE_URL = "https://wallpaperaccess.com/full/492910.jpg";
export const AUCKLAND_IMAGE_URL =
  "https://wallpaperaccess.com/full/7729093.jpg";
export const LOS_ANGELES_IMAGE_URL =
  "https://wallpaperaccess.com/full/250776.jpg";

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
  auckland: AUCKLAND_IMAGE_URL,
  "los angeles": LOS_ANGELES_IMAGE_URL,
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
