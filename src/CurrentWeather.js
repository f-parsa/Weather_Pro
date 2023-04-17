import React, {useState} from "react";
import "./StylesCss.css";
import axios from "axios";
import AdditionalStatus from "./AdditionalStatus";

import searchIcon from "./images/search.png";

export default function CurrentWeather() {
  
  const [city, setCity] = useState("Tehran");
  let [weatherData, setWeatherDAta] = useState({ready: false})
  function searchChange(event){
    setCity(event.target.value);

  }
  function handleCitySearch(response){
    console.log(response)
    setWeatherDAta({
    ready: true,
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    description: response.data.weather[0].description,
    icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    wind: response.data.wind.speed,
    visibility: response.data.visibility,
    feelsLike: response.data.main.feels_like,
    sunrise: response.data.sys.subrise,
    sunset: response.data.sys.sunset,
    currentDate: new Date(response.data.dt * 1000),
    pressure: response.data.main.pressure
  })
  }
  function searchWeather(event){
    // event.preventDefault();
    let api_key ="70edadbf67937e8918129e60665f2802";
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
    axios.get(url).then(handleCitySearch);
  }

  if (weatherData.ready){

  return (
    <div className="d-flex background p-2 border width justify-content-between">
    <div
      className="d-flex flex-column align-items-stretch justify-content-between"
      style={{ width: 30 + "%" }}
    >
      <div className="d-flex blurPic flex-column m-2 p-1 border w-99 h-50">
        <div className="d-flex m-1 p-1 justify-content-around">
          <div className="align-self-start">
            <img
              src={weatherData.icon}
              alt="currentLogo"
              className="currentLogo mt-4 ms-3"
              id="weatherIcon"
            />
          </div>
          <div className="bold align-self-end position-relative">
            <div id="temperatureTag">{Math.round(weatherData.temperature)}</div>
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
          {city}
        </div>
        <div className="d-flex m-1 p-1 textFont" id="currentDateTime">
          {/* {weatherData.currentDate} */}
        </div>
      </div>
      <form action="" id="searchForm" onSubmit={searchWeather}>
        <div className="border m-1 p-1 blurPic">
          <input
            type="text"
            placeholder="Search"
            id="searchText"
            onChange={searchChange}
            style={{
              background: "transparent",
              border: "none",
              width: 90 + "%"
            }}
            autoComplete="off"
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
    <AdditionalStatus data={weatherData}/>
    </div>
  );
}
else{
  searchWeather();
  return"Loading.."
}
}
