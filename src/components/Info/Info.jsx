import style from "./Info.module.css";

export default function Info({ weather }) {
  if (!weather) return null;

  const { name, main, weather: weatherDetails, wind } = weather;

  return (
    <div className={style.container}>
      <h2 className={style.name}>{name}</h2>
      <p className={style.temp}> {Math.round(main.temp)}°C</p>
      <img
        className={style.photo}
        src={`https://openweathermap.org/img/wn/${weatherDetails[0].icon}@2x.png`}
        alt={weatherDetails[0].description}
      />
      <p className={style.descr}>{weatherDetails[0].description}</p>
      <p className={style.wind}>Wind speed: {wind.speed} m/s</p>
    </div>
  );
}
