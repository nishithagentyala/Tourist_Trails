"use client";
import styles from "../page.module.css";
import destinations from "../../../lib/data.json";
import { useSelector } from "react-redux";
import Places from "@/components/Places";

export default function StateWisePlaces() {
  const user = useSelector((state) => state.user.user);

  return (
    <>
      {user ? (
        <div className={styles.content}>
          <h2 className={styles.headline}>
            Explore the heart of India—one state, one marvel at a time!
          </h2>
          <Places currentPlaces={destinations} />
        </div>
      ) : null}
    </>
  );
}
