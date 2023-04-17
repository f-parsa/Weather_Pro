import { useState } from "react";
import React from "react";

export default function TempratureConvert(props){
    let [temp, setTemp] = useState("celcius");

    function showCelcius(event){
        event.preventDefault();
        setTemp("celcius")
        return props.data.temperature;

    }
    function showFahrenhiet(event){
        event.preventDefault();
        setTemp("fahrenheit")
        
    }

    function fahrenhiet(){
        return ((props.data.temperature) * 9/5 + 32);
    }

    if (temp === "celcius")
    {
        return(
            <div className="bold align-self-end position-relative">
            <div id="temperatureTag">{Math.round(props.data.temperature)}</div>
            <span className="position-absolute top-0 start-100 thin translate-middle">
                °C
              <a href="/" id="fahrenheitTag" onClick={showFahrenhiet}>
                °F
                </a>
            </span>
          </div>
            

        )

    }else{
        return (
            <div className="bold align-self-end position-relative">
            <div id="temperatureTag">{Math.round(fahrenhiet())}</div>
            <span className="position-absolute top-0 start-100 thin translate-middle">
              <a href="/" id="celciusTag" className="m-1" onClick={showCelcius}>
                °C
              </a>
                °F
            </span>
          </div>

        )

    }
}