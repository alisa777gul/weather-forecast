import axios from "axios";

const API_KEY = "38d48b435590fbdcbcafb9257b26ca5b";
axios.defaults.baseURL = "https://api.openweathermap.org/";

export default async function getWeather(query = "London", isCity = true) {
  try {
    const params = isCity
      ? { q: query, appid: API_KEY, units: "metric" }
      : {
          lat: query.latitude,
          lon: query.longitude,
          appid: API_KEY,
          units: "metric",
        };

    const { data } = await axios.get("data/2.5/weather", { params });
    console.log("Api response: ", data);
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
    throw error;
  }
}
