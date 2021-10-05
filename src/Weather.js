import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="search" placeholder="Search for a city..." className="form-control" />
                    </div>
                    <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary" />
                </div>
                </div>
                </form>
            <h2>Copenhagen</h2>
            <ul>
                <li>
                    Tuesday 11:30
                </li>
                <li>
                    Mostly Cloudy
                </li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="mostly cloudy" />
                    6°C
                 </div>   
                    <div className="col-6">
                        <ul>
                            <li>
                                Precipitation: 85%
                            </li>
                            <li>
                                Humidity: 85%
                            </li>
                            <li>
                                Wind: 4m/s
                            </li>
                        </ul>
                  </div>
                </div>
            </div>
    )
};
