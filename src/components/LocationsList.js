import React, { Fragment, useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import axios from "axios";

export default function LocationsList() {
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
    <section className="location-list grid-view">
      {locations.map(location => (
        <LocationCard key={location.id} data={location} />
      ))}
    </section>
  );
}
