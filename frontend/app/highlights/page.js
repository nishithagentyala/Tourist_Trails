import "./page.css";
import Link from "next/link";
export default function Highlights() {
  return (
    <div className="highlights">
      <h2>🚀 Project Highlights: Tourist Trails</h2>
      <p>
        <b>Tourist Trails</b> is a platform that helps users explore the best
        tourist destinations across India. Built with passion, this project
        allows users to search, like, and save their favorite places! 🌏✨
      </p>

      <h3>🌟 Key Features</h3>
      <ul>
        <li>
          🔍 <b>Search Functionality:</b> Easily find tourist places across
          India.
        </li>
        <li>
          ❤️ <b>Like & Save Places:</b> Users can bookmark and revisit their
          favorite locations.
        </li>
        <li>
          👤 <b>User Authentication:</b> Secure login and registration system.
        </li>
        <li>
          📷 <b>Dynamic Images:</b> Each place showcases multiple images in a
          carousel format.
        </li>
        <li>
          📌 <b>Pagination:</b> Smooth browsing experience for exploring
          multiple places.
        </li>
      </ul>

      <h3>🛠️ Tech Stack Used</h3>
      <ul>
        <li>
          ⚡ <b>Frontend:</b> Next.js, React.js, CSS Modules
        </li>
        <li>
          💾 <b>State Management:</b> React Hooks
        </li>
        <li>
          🖼️ <b>Icons:</b> React Icons
        </li>
      </ul>

      <h3>💡 Challenges & Learnings</h3>
      <ul>
        <li>✅ Implementing user authentication and session handling.</li>
        <li>✅ Handling state efficiently with `useState` and `useEffect`.</li>
        <li>✅ Creating a smooth UI experience with responsive design.</li>
      </ul>

      <h3>🚀 Future Enhancements</h3>
      <ul>
        <li>✅ Add user profiles with a personalized saved list.</li>
        <li>
          ✅ Implement filters for searching by state, type (beaches, mountains,
          etc.).
        </li>
        <li>✅ Improve UI with animations and dark mode.</li>
      </ul>

      <h3>🎯 Built by Nishitha</h3>
      <p>
        This project is my personal initiative, built with love for travel and
        tech! 💙
        <Link href="/">
          <b>Want to connect?</b>
        </Link>{" "}
        Reach out to me for feedback or collaboration!
      </p>
    </div>
  );
}
