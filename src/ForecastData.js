import axios from "axios";
import React, {useState, useEffect} from "react";
import ForecastDay from "./ForecastDay";


function ForecastData(props){
    const [loaded, setLoaded] = useState(false)
    const [forecastData, setforecastData] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.data]);

    function handleForecast(response){
        // console.log(response);
        setforecastData(response.data.daily);
        setLoaded(true);
    }
    function getForecastData(){
        let apiKey="1ee4264117b73d2263eecd562f31ef5c";
        let lat = props.data.lat;
        let lon = props.data.lon;
        let url=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        axios.get(url).then(handleForecast);
    }
    
    if (loaded){
        return(
            <div
            className="d-flex blurPic flex-column m-2 p-1 border w-99 h-50 forecastFont"
            id="forecastTag"
          >   
        {forecastData.map(( forecastDaily,index) => {
            // console.log(new Date( forecastDaily.dt * 1000));
            if (index < 5){
                return(
                <div className="d-flex justify-content-around flex-fill border m-1 p-1" key={index}>
                  <img src={`http://openweathermap.org/img/wn/${forecastDaily.weather[0].icon}@2x.png`} alt="weatherIcon1" className="weatherIcon"/>
                  {/* <span id={`weekDay`}>{FormatDate(new Date(forecastDaily.dt * 1000))}</span> */}
                  <ForecastDay date={forecastDaily.dt} />
                  <span id="maxTag">{Math.round(forecastDaily.temp.max)}°</span>
                  <span id="minTag">{Math.round(forecastDaily.temp.min)}°</span>
                </div>
                )
            
            }
            else{
                return null
            }
        })}
            </div>

        )
    }
    else{
        getForecastData();
        return null;
    }
}
export default ForecastData;