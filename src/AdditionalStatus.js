import React from "react";
import "./Footer";

export default function AdditionalStatus(props) {
  return (
    <div
      className="d-flex flex-column align-items-stretch justify-content-between"
      style={{ width: 70 + "%" }}
    >
      <div className="d-flex blurPic border m-2 p-1 w-99 h-50 justify-content-between">
        <div className="d-flex flex-fill flex-column">
          <div className="d-flex flex-column justify-content-between w-100 h-100">
            <div
              className="d-flex flex-column border m-1 p-2 statusFont justify-content-between align-items-stretch"
              style={{ height: 70 + "%" }}
            >
              <div style={{ height: 10 + "%" }} className="mb-2">
                wind status
              </div>
              <div style={{ height: 80 + "%" }}>
                <canvas id="windChart" className="canvasStyle"></canvas>
              </div>
              <div
                className="d-flex justify-content-center"
                style={{ height: 10 + "%" }}
              >
                <span id="windSpeedTag">{props.data.wind} </span>
                <span>&nbsp;km/h</span>
              </div>
            </div>
            <div
              className="d-flex border m-1 p-2 statusFont justify-content-between"
              style={{ height: 30 + "%" }}
            >
              <div className="d-flex flex-column justify-content-between">
                <div>Humidity</div>
                <div>
                  <span id="humidityTag">{props.data.humidity}</span>
                  <span> &nbsp;%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-fill flex-column">
          <div className="d-flex flex-column justify-content-between w-100 h-100">
            <div
              className="d-flex flex-column border m-1 p-2 statusFont justify-content-between align-items-stretch"
              style={{ height: 70 + "%" }}
            >
              <div style={{ height: 10 + "%" }} className="mb-2">
                UV Index
              </div>
              <div style={{ height: 80 + "%" }}>
                <canvas id="uvChart" className="canvasStyle"></canvas>
              </div>
              <div
                className="d-flex justify-content-center"
                style={{ height: 10 + "%" }}
              >
                <span id="pressureTag">{props.data.pressure}</span>
                <span> &nbsp; PA</span>
              </div>
            </div>
            <div
              className="d-flex border m-1 p-2 statusFont justify-content-between"
              style={{ height: 30 + "%" }}
            >
              <div className="d-flex flex-column justify-content-between">
                <div>Visibility</div>
                <div>
                  <span id="visibilityTag">{props.data.visibility/1000} </span>
                  <span>&nbsp;km</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-fill flex-column">
          <div className="d-flex flex-column justify-content-between w-100 h-100">
            <div
              className="d-flex flex-column border m-1 p-2 statusFont justify-content-between align-items-stretch"
              style={{ height: 70 + "%" }}
            >
              <div style={{ height: 15 + "%" }}>Sunrise & Sunset</div>
              <div
                style={{
                  height: 100 + "px",
                  width: 200 + "px",
                  overflow: "hidden"
                }}
              >
                <div className="sun"></div>
              </div>
              <div
                className="d-flex m-1 p-1 justify-content-between"
                style={{ height: 15 + "%" }}
              >
                <span id="sunriseTag"></span>
                <span id="sunsetTag"></span>
              </div>
            </div>
            <div
              className="d-flex border m-1 p-2 statusFont justify-content-between"
              style={{ height: 30 + "%" }}
            >
              <div className="d-flex flex-column justify-content-between">
                <div>Feels Like</div>
                <div>
                  <span id="feelslikeTag">{props.data.feelsLike}</span>
                  <span>°</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-2 p-1">Weather Condition Map</div>
      <div className="d-flex border m-2 p-1 w-99 h-50 blurPic" id="map"></div>
      <div>
        <script src="/src/script.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>
        <script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAuWt3h5qY2C0tk3ymHrUft4ED9UaaCgMo&callback=initMap&v=weekly"
          defer
        ></script>
      </div>
    </div>
  );
}
