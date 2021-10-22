import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast() {
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
