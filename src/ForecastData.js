import axios from "axios";
import React, {useState} from "react";
import FormatDate from "./FormatDate";


export default function ForecastData(props){
    let [forecastData, setforecastData] = useState(null);
    let [loaded, SetLoaded] = useState(false)

    function handleForecast(response){
        console.log(response);
        setforecastData(response.data.daily);
        SetLoaded(true);
    }
    function getForecastData(){
        let apiKey="1ee4264117b73d2263eecd562f31ef5c";
        let lat = props.data.lat;
        let lon = props.data.lon;
        let url=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        axios.get(url).then(handleForecast);
    }
    if (loaded){
        {forecastData?.map(( forecastDaily,index) => {

            return (
                <div class="d-flex justify-content-around flex-fill border m-1 p-1" key={index}>
                  <img src={`http://openweathermap.org/img/wn/${forecastDaily.weather[0].icon}@2x.png`} alt="weatherIcon1" class="weatherIcon"/>
                  {/* <span id={`weekDay${index}`}>${FormatDate(forecastDaily.dt)}</span> */}
                  <span id="maxTag">${Math.round(forecastDaily.temp.max)}°</span>
                  <span id="minTag">${Math.round(forecastDaily.temp.min)}°</span>
                </div>
            )
        })}
    }
    else{
        getForecastData();
        return null;
    }
}