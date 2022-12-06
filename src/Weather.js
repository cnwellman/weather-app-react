import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    date: "Tuesday 10:00",
    wind: "10",
    humidity: "20",
    description: "Cloudy",
    imgUrl: "https://openweathermap.org/img/wn/01d@2x.png",
    temperature: "55",
  };

  return (
    <div className="Weather">
      <div className="weather-app">
        <div className="row">
          <div className="col-6">
            <form className="mb-5">
              <div className="row">
                <input
                  type="search"
                  placeholder="Enter a City (e.g. Portland)"
                  className="form-control"
                  id="enter-city"
                  autoComplete="off"
                />
                <div className="col-9">
                  <input
                    type="button"
                    value="Current City"
                    className="btn btn-primary w-100"
                    id="current-button"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-primary"
                    id="search-button"
                  />
                </div>
              </div>
            </form>
            <h1 id="city">{weatherData.city}</h1>
            <ul>
              <li>
                <span>Last updated: {weatherData.date} </span>
              </li>
              <li>
                <span>Humidity: {weatherData.humidity}</span>%
              </li>
              <li>
                <span>Wind: {weatherData.wind}mph</span>
              </li>
            </ul>
          </div>
          <div className="col-6" id="second-col">
            <li id="description">{weatherData.description}</li>
            <img
              src={weatherData.imgUrl}
              alt="{weatherData.description}"
              className="float-left current-weather-icon"
            />
            <ul>
              <li>
                <strong>{weatherData.temperature} </strong>
                <span className="units">
                  <a href="/">°C</a> | <a href="/">°F</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="weather-forecast" id="forecast"></div>
      </div>
      <small>
        <a href="https://github.com/cnwellman/my-weather-app" target="_blank">
          Open-source code
        </a>
        <span> by Chelsea Wellman</span>
      </small>
    </div>
  );
}
