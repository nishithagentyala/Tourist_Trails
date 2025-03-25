import styles from "../page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <h2>30+ Tourist Attractions in India</h2>
      <div className={styles.homeImage}>
        <h1>
          Welcome <br />
          to
          <br /> Tourist Trails
        </h1>
      </div>
    </div>
  );
}
