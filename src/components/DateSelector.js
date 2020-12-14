import React from "react";

const DateSelector = (props) => {
  function handleChange(event) {
    props.onDateSelected(event.target.value);
  }
  //this sets the chosen date to be the value selected

  const uniqueDateList = props.allLaunchYears.map((date) => {
    return (
      <option value={date} key={date}>
        {date}
      </option> //this makes a dropdown of all the dates passed in from the state of all the launch years
    );
  });

  return (
    <>
      <div>
        <select onChange={handleChange} value={props.selectedLaunchYear}>
          <option value="none">Filter by Year</option>
          {uniqueDateList}
        </select>
      </div>
    </>
  );
};

export default DateSelector;
