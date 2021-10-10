import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
    const [ready, setReady] = useState(false);
    const [temperature, setTemperature] = useState(null);
    function handleResponse(response) {
        console.log(response.data);
        setTemperature(response.data.main.temp);
        setReady(true);
    }
    if(ready) {
return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="search" placeholder="Search for a city..." className="form-control" autoFocus="on" />
                    </div>
                    <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100" />
                </div>
                </div>
                </form>
            <h3>Copenhagen</h3>
            <ul>
                <li>
                    Tuesday 11:30
                </li>
                <li>
                    Mostly Cloudy
                </li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="mostly cloudy" />
                <span className="temperature">{Math.round(temperature)}</span><span className="unit"> °C </span>
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
    } else {
      const apiKey = "1c74ccab4b5e12f86079c6c084d79be2";
    let city = "Copenhagen";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading...";
    }

    
    
};
