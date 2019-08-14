import React, { Fragment, useEffect, useState } from "react";
import EpisodeCard from "./EpisodeCard";
import axios from "axios";

export default function EpisodesList() {
  const [episodes, setLocations] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episode/")
      .then(response => {
        setLocations(response.data.results);
      })
      .catch(error => {
        console.log("Server Error", error);
      });
  }, []);

  return (
    <section className="episode-list grid-view">
      {episodes.map(episode => (
        <EpisodeCard key={episode.id} data={episode} />
      ))}
    </section>
  );
}
