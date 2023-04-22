import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function ShowMap(props){

  const defaultProps = {
    center: {
      lat: props.data.lat,
      lng: props.data.lon
    },
    zoom: 11
  };
  
  return (
    // Important! Always set the container height explicitly
    <div className="d-flex border m-2 p-1 w-99 h-50 blurPic" id="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAuWt3h5qY2C0tk3ymHrUft4ED9UaaCgMo"}}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={props.data.lat}
          lng={props.data.lon}
          text="Map"
        />
      </GoogleMapReact>
    </div>
  );
}