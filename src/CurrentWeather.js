import React from "react";
import "./StylesCss.css";
import weatherIcon from "./images/weatherIcon.png";
import searchIcon from "./images/search.png";

export default function CurrentWeather() {
  let weatherData = {
    temperature: 32,
    description: "Sunny",
    city: "Tehran",
    currentDate: "Sunday 18:05"
  };
  return (
    <div
      className="d-flex flex-column align-items-stretch justify-content-between"
      style={{ width: 30 + "%" }}
    >
      <div className="d-flex blurPic flex-column m-2 p-1 border w-99 h-50">
        <div className="d-flex m-1 p-1 justify-content-around">
          <div className="align-self-start">
            <img
              src={weatherIcon}
              alt="currentLogo"
              className="currentLogo mt-4 ms-3"
              id="weatherIcon"
            />
          </div>
          <div className="bold align-self-end position-relative">
            <div id="temperatureTag">{weatherData.temperature}</div>
            <span className="position-absolute top-0 start-100 thin translate-middle">
              <a href="/" id="celciusTag" className="m-1 active">
                °C
              </a>
              <a href="/" id="fahrenheitTag">
                °F
              </a>
            </span>
          </div>
        </div>
        <div className="d-flex ms-2 textFont" id="descriptionTag">
          {weatherData.description}
        </div>
        <hr />
        <div className="d-flex ms-2 textFont" id="cityTag">
          {weatherData.city}
        </div>
        <div className="d-flex m-1 p-1 textFont" id="currentDateTime">
          {weatherData.currentDate}
        </div>
      </div>
      <form action="" id="searchForm">
        <div className="border m-1 p-1 blurPic">
          <input
            type="text"
            placeholder="Search"
            id="searchText"
            style={{
              background: "transparent",
              border: "none",
              width: 90 + "%"
            }}
            autocomplete="off"
          />
          <input
            type="image"
            src={searchIcon}
            value="Search"
            id="searchSubmit"
            width="20px"
            alt="Search"
          />
        </div>
      </form>
      <div
        className="d-flex blurPic flex-column m-2 p-1 border w-99 h-50 forecastFont"
        id="forecastTag"
      ></div>
    </div>
  );
}
