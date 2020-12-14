import React from "react";

const LaunchItem = (props) => {
  if (!props.launch) return null;

  return (
    <div>
      <h1>{props.launch.mission_name}</h1>
      <p> {props.launch.flight_number} </p>
    </div>
  );
};

export default LaunchItem;
