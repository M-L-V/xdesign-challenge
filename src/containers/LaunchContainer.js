import React, { useState, useEffect } from "react";
import LaunchItem from "../components/LaunchItem";

const LaunchContainer = () => {
  const [launches, setLaunches] = useState([]);
  const [allLaunchYears, setAllLaunchYears] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState("");
  const [selectedLaunchYear, setSelectedLaunchYear] = useState("");

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

  return (
    <>
      <div>
        {launches.map((element) => (
          <LaunchItem launch={element} key={element.mission_name} />
        ))}
      </div>
    </>
  );
};

export default LaunchContainer;
