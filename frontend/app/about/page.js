import Link from "next/link";
import "./page.css";
export default function About() {
  return (
    <div className="about">
      <Link href="/">
        <h2>About Tourist Trails 🏔️🌏</h2>
      </Link>
      <p>
        Welcome to <b>Tourist Trails,</b> your go-to platform for exploring the
        best tourist places in India! Whether you're looking for serene beaches,
        historical landmarks, or hidden gems, we bring you a curated collection
        of must-visit destinations.
      </p>

      <h3>What We Offer 🚀</h3>
      <div>
        <Link href="/states/searchPlaces">
          <h4>🔍 Search Tourist Places</h4>
        </Link>
        -<p>Easily find places across India.</p>
      </div>
      <div>
        <Link href="/states/savedList">
          <h4>❤️ Like & Save Places</h4>
        </Link>
        -<p>Mark your favorite destinations for quick access.</p>
      </div>
      <div>
        <Link href="/users//login">
          <h4>👤 User Login</h4>
        </Link>
        -<p>Create an account to personalize your experience.</p>
      </div>
      <div>
        <Link href="/states/places">
          <h4>📍 Discover Hidden Gems</h4>
        </Link>
        -<p>Explore offbeat locations and iconic spots.</p>
      </div>

      <h3>Start Exploring Today! 🚀</h3>
      <p>
        Sign in, browse stunning locations, and build your collection of
        must-visit places in India. Your next adventure starts here! 🌟
      </p>
    </div>
  );
}
