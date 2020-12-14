import React from "react";

const LaunchItem = (props) => {
  if (!props.launch) return null;

  const translateDate = () => {
    const event = new Date(props.launch.launch_date_utc);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const translatedDate = event.toLocaleDateString(undefined, options);
    console.log("rocket is", props.launch.rocket);
    return translatedDate;
  };

  return (
    <div className="launch-item">
      <p> #{props.launch.flight_number} </p>
      <h1>{props.launch.mission_name}</h1>
      <p> {props.launch.rocket.rocket_name} </p>
      <p> {translateDate(props.launch.launch_date_utc)}</p>
    </div>
  );
};

export default LaunchItem;
