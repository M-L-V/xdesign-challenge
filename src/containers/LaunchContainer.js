import React, { useState, useEffect } from "react";
import LaunchItem from "../components/LaunchItem";
import DateSelector from "../components/DateSelector";

const LaunchContainer = () => {
  const [launches, setLaunches] = useState([]);
  const [allLaunchYears, setAllLaunchYears] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState("");
  const [selectedLaunchYear, setSelectedLaunchYear] = useState("");
  const [displayedButton, setDisplayedButton] = useState("descendingButton");

  async function fetchAllLaunches() {
    const res1 = await fetch("https://api.spacexdata.com/v3/launches");
    res1.json().then((res1) => setLaunches(res1));

    const res2 = await fetch(
      "https://api.spacexdata.com/v3/launches?filter=launch_year"
    );
    res2
      .json()
      .then(function (res2) {
        const manyDates = res2.map(({ launch_year }) => launch_year); ///this turns the array of key-value pairs into just an array of the launch year values
        return manyDates;
      })
      .then(function (manyDates) {
        const newSet = [...new Set(manyDates)]; //this makes an array of only unique dates with no repetition
        return newSet;
      })
      .then((newSet) => setAllLaunchYears(newSet)) //this sets the LaunchYears to the unique set of launch years
      .then(() => setLoading(false))
      .catch((errors) => setErrors(errors));
  }

  useEffect(() => {
    fetchAllLaunches();
  }, []);

  if (loading) {
    return <h2 className="loading"> loading the launches </h2>;
  }

  if (!loading) {
    console.log("loaded!");
  }

  async function getDescending() {
    setLoading(true);
    const descending = await fetch(
      `https://api.spacexdata.com/v3/launches?order=desc`
    );
    descending
      .json()
      .then((descending) => setLaunches(descending))
      .then(() => setDisplayedButton("ascendingButton"))
      .then(() => setLoading(false));
  }

  ///this gets the launches in a descending order

  async function getAscending() {
    setLoading(true);
    const ascending = await fetch(
      `https://api.spacexdata.com/v3/launches?order=asc`
    );
    ascending
      .json()
      .then((ascending) => setLaunches(ascending))
      .then(() => setDisplayedButton("descendingButton"))
      .then(() => setLoading(false));
  }
  //this gets the launches in an ascending order

  async function getReloadedData() {
    setLoading(true);
    const reloadedData = await fetch(
      `https://api.spacexdata.com/v3/launches?order=asc`
    );
    reloadedData
      .json()
      .then((reloadedData) => setLaunches(reloadedData))
      .then(() => setSelectedLaunchYear(""))
      .then(() => setLoading(false));
  }
  //this fetches all launches from API again

  async function handleDateSelected(selectedLaunchYear) {
    setSelectedLaunchYear(selectedLaunchYear);
    setLoading(true);
    const results = await fetch(
      `https://api.spacexdata.com/v3/launches?launch_year=${selectedLaunchYear}` //here, the API is fetched to load all results that match this query
    );
    results
      .json()
      .then((results) => setLaunches(results))
      .then(() => setLoading(false));
  }

  function renderButton() {
    switch (displayedButton) {
      case "ascendingButton":
        return (
          <button onClick={getAscending} className="button">
            <p> Sort ascending </p>
          </button>
        );
      case "descendingButton":
        return (
          <button onClick={getDescending} className="button">
            <p> Sort descending </p>
          </button>
        );
    } ///this toggles the button sorting the launches from ascending to descending - so if you click on ascending, it turns into the descending one for resorting the data
  }

  return (
    <>
      <div>
        <div className="button-container">
          <button onClick={getReloadedData} className="reload-button">
            <p> Reload data </p>
          </button>

          <div className="button-wrapper">
            <DateSelector
              launches={launches}
              allLaunchYears={allLaunchYears}
              selectedLaunchYear={selectedLaunchYear}
              onDateSelected={handleDateSelected}
            />
            <div>{renderButton()}</div>
          </div>
        </div>

        <div className="launches-list">
          {launches.map((element) => (
            <LaunchItem launch={element} key={element.mission_name} />
          ))}
        </div>
      </div>
    </>
  );
};

export default LaunchContainer;
