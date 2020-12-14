import React, { Component } from "react";
import LaunchContainer from "./LaunchContainer";

class ListContainer extends Component {
  render() {
    return (
      <div>
        <img src={"/assets/img/launch-home.png"} />
        <LaunchContainer />
      </div>
    );
  }
}

export default ListContainer;
