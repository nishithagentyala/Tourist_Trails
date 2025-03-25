import Link from "next/link";
import styles from "../app/page.module.css";
export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <img src="./images/icon.png" />
          <p>Tourist Trails</p>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/about"> About Us</Link>
            </li>
            <li>
              <Link href="/highlights">Highlights</Link>
            </li>
            <li>
              <Link href="/users/login">Log in</Link>
            </li>
            <li>
              <Link href="/users/register">Register</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className={styles.para}>
        <p>
          Traveling through India is like stepping into a living storybook,
          where every journey unfolds a new chapter of history, culture, and
          unforgettable experiences."
        </p>
        <button className={styles.explore}>Explore</button>
      </div>
    </div>
  );
}
