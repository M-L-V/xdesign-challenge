import React, { Component } from "react";
import LaunchContainer from "./LaunchContainer";
import logo from "../assets/img/spacex-logo.png";
import launchImage from "../assets/img/launch-home.png";

class ListContainer extends Component {
  render() {
    return (
      <div className="launch-container">
        <div className="launch-container__images">
          <div className="launch-container__images_container">
            <div className="logo-wrapper">
              <img src={logo} className="logo" />
              <p> LAUNCHES</p>
            </div>
            <img src={launchImage} className="rocket-image" />
          </div>
        </div>

        <div className="launch-container__launches">
          <LaunchContainer />
        </div>
      </div>
    );
  }
}

export default ListContainer;
