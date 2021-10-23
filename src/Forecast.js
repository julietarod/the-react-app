import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "1c74ccab4b5e12f86079c6c084d79be2";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Day</div>
          <WeatherIcon code="01d" size={30} />
          <div className="forecast-temperature">
            <span className="max">19º</span>
            <span className="min"> 10º</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
