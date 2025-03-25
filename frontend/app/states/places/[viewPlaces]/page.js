"use client";
import { useParams } from "next/navigation";
import { destinations } from "../../../../lib/data.json";
import { motion } from "framer-motion";
import styles from "../../page.module.css";

export default function viewPlaces() {
  const params = useParams();
  const data = destinations.find((dest) => dest.id == params.viewPlaces);
  if (!data) return <p>Destination not found!</p>;
  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        {data.images.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`Image ${index + 1}`}
            width="450"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          />
        ))}
      </div>
      <div className={styles.data}>
        <h2>{data.name}</h2>
        <p>{data.Description}</p>
      </div>
    </div>
  );
}
