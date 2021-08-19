import React, { useState, useEffect } from "react";
import axios from "axios";

export default function WeatherApi(props) {
  let { city } = props;
  let baseURI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0c8a1ab5717f74d9705a27b1da25fbc5`;
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(baseURI)
      .then((res) => {
        setWeather((res.data));
        console.log(res.data)
        setError(null)
      })
      .catch((err) => setError(err));
  }, [baseURI]);

  if (!weather) return <div>Loading</div>
  if (error) return <div>City name is not correct.</div>
  return (
    <>
      <div className="weather">
        <h1>Weather</h1>
        <p>City Name : {weather.name}</p>
        <p>Country : {weather.sys.country}</p>
        <p>Temprature : {Math.round(weather.main.temp - 273.15)} &#x2103;</p>
        <p>Weather : {weather.weather[0].main}</p>
        <p>Latitude : {weather.coord.lat}</p>
        <p>Longitude : {weather.coord.lon}</p>
      </div>
    </>
  );
}