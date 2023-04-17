import React from "react";

export default function CityName(props){
    return (
        <div className="d-flex ms-2 textFont" id="cityTag">
            {props.cityName.city}
        </div>
    )
}