import React from "react";

const LaunchItem = (props) => {
  if (!props.launch) return null;

  const translateDate = () => {
    const event = new Date(props.launch.launch_date_utc);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    const translatedDate = event.toLocaleDateString(undefined, options);
    return translatedDate; //this turns the UTC date into the more readable format requested in wireframe
  };

  return (
    <div>
      <div className="launch-item">
        <h1> #{props.launch.flight_number} </h1>
        <h2>{props.launch.mission_name}</h2>
        <div className="launch-item__date">
          <p> {translateDate(props.launch.launch_date_utc)}</p>
          <h3> {props.launch.rocket.rocket_name} </h3>
        </div>
      </div>
    </div>
  );
};

export default LaunchItem;
