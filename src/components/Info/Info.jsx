import style from "./Info.module.css";
import { IoLocationOutline } from "react-icons/io5";

export default function Info({ weather }) {
  if (!weather) return null;

  const { name, main, weather: weatherDetails, wind } = weather;
  const weatherIcon = weatherDetails?.[0]?.icon || "";
  const weatherDescription = weatherDetails?.[0]?.description || "Weather icon";

  return (
    <div className={style.container}>
      <h2 className={style.name}>
        <IoLocationOutline /> {name}
      </h2>
      <div className={style.tempAll}>
        <p className={`gradient-text ${style.temp}`}>
          {Math.round(main.temp)}°C
        </p>
        <p className={style.feels}>
          Feels like: {Math.round(main.feels_like)}°C
        </p>
      </div>
      {weatherIcon && (
        <img
          className={style.photo}
          src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
          alt={weatherDescription}
        />
      )}
      <p className={style.descr}>{weatherDescription}</p>
      <p className={style.wind}>Wind speed: {wind.speed} m/s</p>
    </div>
  );
}
