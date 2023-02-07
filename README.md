# 🌦️ React Weather Forecast Application

The Weather Forecast app helps you get the weather forecast for your current location for the next 5 days.

You have the option to get the weather forecast in degrees Celsius or Fahrenheit. The app has an adaptive design, the interface adapts to the layout of the device, making it easier to use, navigate and search for information.

In addition, the background image changes dynamically for each city entered.

![](./src/assets/preview.png)

# ⚙ ️App Configuration

The **[OpenWeatherMap API](https://openweathermap.org/)** was used to get weather forecast data.

First of all, you must obtain an API key in order to be able to send a request to the API.

You can get the `OpenWeatherMap API key` at **https://home.openweathermap.org/api_keys**.

After getting the API key, you need to set the environment variable.
For this you will need the following:

- Create a new file named `.env` in the root directory of your React app.
- Create a variable `REACT_APP_API_KEY`(_React app reads variables that begin with `REACT_APP` and makes them available through `process.env`_) in this file and set your value from **[OpenWeatherMap API Keys](https://home.openweathermap.org/api_keys)**
- You can now access the API key in any file in the React app using `process.env`:

```
const API_KEY = process.env.REACT_APP_API_KEY
```

- Ensure you add `.env` to the `.gitignore` file to prevent git from tracking it.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
