import React from "react";

export default function ForecastDay(props){
    function Day(){

        let date = new Date(props.date * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day]
    }
     return (
        <span id={`weekDay`}>{Day()}</span>
     )
}