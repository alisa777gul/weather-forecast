import { useEffect, useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import Info from "./Info/Info";

import "./App.css";
import getWeather from "../js/api-weather";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [location, setLocation] = useState(null);
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       setLocation({
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude,
  //       });
  //       setError(null);
  //     },
  //     (err) => {
  //       console.error("Error getting location:", err.message);
  //       setError(true);
  //     }
  //   );
  // }, []);

  useEffect(() => {
    if (!location) return;
    setLoading(true);
    (async () => {
      try {
        const weatherData = await getWeather(
          location.latitude,
          location.longitude
        );
        setWeather(weatherData);
        setLoading(false);
        // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setLoading(false);

        setError(true);
      }
    })();
  }, [location]);

  useEffect(() => {
    if (!city) return;
    setLoading(true);
    (async () => {
      try {
        const weatherData = await getWeather(city);
        setWeather(weatherData);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    })();
  }, [city]);

  const handleSubmit = (value) => {
    setCity(value);
    setLoading(false);

    setWeather(null);
    setError(null);
  };

  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit} />{" "}
      {weather === null && !loading && !city && (
        <div className="start">Let’s begin search 🔎</div>
      )}
      {loading && <p className="try">Loading...Please wait</p>}
      {error && (
        <p className="error">
          Failed to load weather data for current location.
        </p>
      )}
      {weather && <Info weather={weather} />}
    </div>
  );
}

export default App;
