import React from "react";
import FixedDate from "./FixedDate.js";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h3>{props.data.city}</h3>
      <ul>
        <li>
          <FixedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <WeatherIcon code={props.data.icon} />
          <div className="temperature">
            {Math.round(props.data.temperature)}
          </div>
          <span className="unit"> °C </span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 85%</li>
            <li>Humidity: {props.data.humidity}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
