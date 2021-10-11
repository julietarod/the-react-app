import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    
    const [weatherData, setWeatherData] = useState({ready: false});
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true, 
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.main.wind,
            city: response.data.name,
            date: "Monday 11:26",
            description: response.data.weather[0].description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"

        });


        
    
    }
    if(weatherData.ready) {
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
            <h3>{weatherData.city}</h3>
            <ul>
                <li>
                    {weatherData.date}
                </li>
                <li className="text-capitalize" >
                    {weatherData.description}
                </li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <img src={weatherData.iconUrl} alt={weatherData.description} />
                <span className="temperature">{Math.round(weatherData.temperature)}</span><span className="unit"> °C </span>
                 </div>   
                    <div className="col-6">
                        <ul>
                            <li>
                                Precipitation: 85%
                            </li>
                            <li>
                                Humidity: {weatherData.humidity}
                            </li>
                            <li>
                                Wind: {weatherData.wind} 
                            </li>
                        </ul>
                  </div>
                </div>
            </div>
    )
    } else {
      const apiKey = "1c74ccab4b5e12f86079c6c084d79be2";
    
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading...";
    }

    
    
};
