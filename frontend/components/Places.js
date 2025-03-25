"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  FaRegHeart,
  FaHeart,
  FaRegBookmark,
  FaBookmark,
} from "react-icons/fa6";
import styles from "../app/states/page.module.css";
import axios from "axios";

export default function Places({ currentPlaces }) {
  const user = useSelector((state) => state.user.user);
  const [index, setIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [savedList, setSavedList] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const itemsPage = 6;
  let totalPages = Math.ceil(currentPlaces.length / itemsPage);
  const numbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  const startIndex = (currentPage - 1) * itemsPage;
  const endIndex = startIndex + itemsPage;
  const AllPlaces = currentPlaces.slice(startIndex, endIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex >= 2 ? 0 : prevIndex + 1));
    }, 10000);
    return () => clearInterval(interval);
  }, [index]);

  const fetchSavedList = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/users/savedList/${user._id}`
      );
      setSavedList(response.data.savedList);
    } catch (err) {
      console.log("Error fetching saved places:", err);
    }
  };
  const fetchFavourites = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/users/favourites/${user._id}`
      );

      setFavourites(response.data.favourites);
    } catch (err) {
      console.log("Error fetching saved places:", err);
    }
  };
  useEffect(() => {
    if (user?._id) {
      fetchSavedList();
      fetchFavourites();
    }
  }, [user?._id]);

  const savePlaces = async (placeId) => {
    try {
      await axios.put(`http://localhost:8000/users/savedList/${user._id}`, {
        savedList: placeId,
      });
      await fetchSavedList();
    } catch (err) {
      console.log("error", err);
    }
  };

  const toggleLikes = async (placeId) => {
    if (!user?._id) return;
    try {
      await axios.put(`http://localhost:8000/users/favourites/${user._id}`, {
        favourites: placeId,
      });
      await fetchFavourites();
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <>
      <div className={styles.places}>
        {AllPlaces.map((place) => {
          return (
            <div key={place.id} className={styles.touristPlace}>
              <Link href={`/states/places/${place.id}`}>
                <img
                  src={place.images[index]}
                  alt={place.name}
                  className={styles.images}
                />
              </Link>
              <div className={styles.info}>
                <h2>{place.name}</h2>
                <h5>
                  {place.Location},&nbsp;<span>{place.State}</span>
                </h5>
                <h6>{place.Description}</h6>
              </div>
              <div className={styles.bookmark}>
                <span
                  onClick={() => {
                    toggleLikes(place.id);
                  }}
                >
                  {favourites.includes(place.id.toString()) ? (
                    <FaHeart color="red" />
                  ) : (
                    <FaRegHeart />
                  )}
                </span>

                <span
                  onClick={() => {
                    savePlaces(place.id);
                  }}
                >
                  {savedList.includes(place.id.toString()) ? (
                    <FaBookmark />
                  ) : (
                    <FaRegBookmark />
                  )}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.pagination}>
        {numbers.map((num, index) => (
          <span
            key={num}
            onClick={() => setCurrentPage(num)}
            className={num == currentPage ? styles.activePage : ""}
          >
            {num}
            {index !== numbers.length - 1 && "|"}
          </span>
        ))}
      </div>
    </>
  );
}
