"use client";
import Places from "@/components/Places";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import destinations from "../../../lib/data.js";
import styles from "../page.module.css";
import axios from "axios";

export default function SavedList() {
  const user = useSelector((state) => state.user.user);
  const [savedList, setSavedList] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  useEffect(() => {
    const fetchSavedList = async () => {
      try {
        const response = await axios.get(
          `https://tourist-trails.onrender.com/users/savedList/${user._id}`
        );

        setSavedList(response.data.savedList);
      } catch (err) {
        console.log("Error fetching saved places:", err);
      }
    };

    if (user?._id) {
      fetchSavedList();
    }
  }, [user?._id]);

  useEffect(() => {
    setFilteredPlaces(
      destinations.filter((place) => savedList.includes(place.id.toString()))
    );
  }, [savedList, destinations]);

  return (
    <div className={styles.savedList}>
      <h3>Your Saved List</h3>
      {filteredPlaces.length > 0 ? (
        <Places currentPlaces={filteredPlaces} />
      ) : (
        <p>You didn't saved any Places</p>
      )}
    </div>
  );
}
