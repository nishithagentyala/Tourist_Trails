"use client";
import { useState } from "react";
import destinations from "../../../lib/data.js";
import Places from "@/components/Places";
import styles from "../page.module.css";

export default function SearchPlaces() {
  const [searchPlace, setSearchPlace] = useState("");
  const [currentPlaces, setCurrentPlaces] = useState([]);

  const submitSearch = () => {
    if (!searchPlace.trim()) {
      setCurrentPlaces([]);
      return;
    }

    const filteredPlaces = destinations.filter((place) => {
      const searchPlaces = place.Category.toLowerCase().split(/[\s/,-]+/);
      return searchPlaces.includes(searchPlace.toLowerCase());
    });

    setCurrentPlaces(filteredPlaces);
  };

  return (
    <div className={styles.searchPlace}>
      <input
        type="text"
        value={searchPlace}
        placeholder="Search Category"
        onChange={(e) => setSearchPlace(e.target.value)}
      />
      <button onClick={submitSearch}>Search</button>
      <ul>
        {currentPlaces.length > 0 ? (
          <div>
            <Places currentPlaces={currentPlaces} />
          </div>
        ) : (
          <p>No results Found!</p>
        )}
      </ul>
    </div>
  );
}
