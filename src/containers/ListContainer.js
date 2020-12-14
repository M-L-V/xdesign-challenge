import React, { Component } from "react";
import LaunchContainer from "./LaunchContainer";

class ListContainer extends Component {
  render() {
    return (
      <div className="launch-container">
        <div className="launch-container__images">
          <div className="launch-container__images_container">
            <img src={"/assets/img/spacex-logo.png"} className="logo" />
            <img src={"/assets/img/launch-home.png"} className="rocket-image" />
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
