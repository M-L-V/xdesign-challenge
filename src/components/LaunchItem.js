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
    return translatedDate;
  };

  return (
    <div className="launch-item">
      <div className="launch-item__wrapper">
        <p> #{props.launch.flight_number} </p>
        <h1>{props.launch.mission_name}</h1>
        <div>
          <p> {translateDate(props.launch.launch_date_utc)}</p>
          <p> {props.launch.rocket.rocket_name} </p>
        </div>
      </div>
    </div>
  );
};

export default LaunchItem;
