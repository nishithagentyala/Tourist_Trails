"use client";
import { useParams } from "next/navigation";
import destinations from "../../../../lib/data.js";
import { motion } from "framer-motion";
import styles from "../../page.module.css";

export default function viewPlaces() {
  const params = useParams();
  const data = destinations.find((dest) => dest.id == params.viewPlaces);
  if (!data) return <p>Destination not found!</p>;
  return (
    <div>
      <div className={styles.viewImage}>
        {data.images.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`Image ${index + 1}`}
            initial={{ opacity: 0, scale: 0.8 }}
            width="450px"
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          />
        ))}
      </div>
      <div className={styles.data}>
        <h2>{data.name}</h2>
        <p>
          <b>Best Time To Visit: </b>
          {data.BestTimetoVisit}
        </p>
        <p>{data.Detail}</p>
      </div>
    </div>
  );
}
