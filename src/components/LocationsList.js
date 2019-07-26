import React, { Fragment, useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import axios from "axios";

export default function LocationsList(props) {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location/")
      .then(response => {
        setLocations(response.data.results);
      })
      .catch(error => {
        console.log("Server Error", error);
      });
  }, []);

  return (
    <section className="character-list grid-view">
      {locations.map(location => (
        <LocationCard data={location} />
      ))}
    </section>
  );
}
