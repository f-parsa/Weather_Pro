import React from "react";
import AdditionalStatus from "./AdditionalStatus";
import "./StylesCss.css";

import CurrentWeather from "./CurrentWeather";

export default function Content() {
  
  return (
    <div className="d-flex background p-2 border width justify-content-between">
      <CurrentWeather />
      <AdditionalStatus />
    </div>
  );
}
