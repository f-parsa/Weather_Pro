import React from "react";
import logo from "./images/logo.png";
import location from "./images/location.png";
import "./StylesCss.css";

export default function ToolBar() {
  return (
    <div className="p-3 border background">
      <div>
        <img src={logo} alt="logo" className="tollbarImage" />
      </div>
      <div>
        <img
          src={location}
          alt="location"
          className="mt-4 tollbarImage"
          id="locationTag"
        />
      </div>
    </div>
  );
}
