"use client";
import { IoSearch } from "react-icons/io5";
import "./Header.css";
import Link from "next/link";
import { useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import { useRef, useEffect, useState } from "react";
import axios from "axios";

export default function Header() {
  const user = useSelector((state) => state.user.user);
  const route = useRouter();
  const [showProfile, setShowProfile] = useState(false);
  const pathname = usePathname();
  const profileRef = useRef(null);
  const submitPlaces = (e) => {
    e.preventDefault();
    setShowProfile(false);
    route.push("/states/searchPlaces");
  };
  useEffect(() => {
    setShowProfile(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const logout = async () => {
    setShowProfile(false);
    try {
      const response = await axios.post(
        "https://tourist-trails.onrender.com/users/logout",
        {
          credentails: "include",
        }
      );
      if (response.status === 200) {
        route.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <header className="headers">
        <Link href="/">
          <h2>Tourist Trails</h2>
        </Link>
        <div className="nav">
          <div
            onClick={() => {
              route.push(user ? "/states/home" : "/");
            }}
          >
            <h3>Home</h3>
          </div>
          <div
            onClick={() => {
              route.push(user ? "/states/places" : "/");
            }}
          >
            <h3>Places</h3>
          </div>
          <span>
            <IoSearch onClick={submitPlaces} fontSize={"20px"} />
          </span>
          <p
            className="profile"
            onClick={() => {
              setShowProfile(!showProfile);
            }}
          >
            {user ? user.email[0].toUpperCase() : "?"}
          </p>
        </div>
      </header>
      {showProfile && (
        <div className="profileBtn">
          <Link href="/states/savedList" className="btns">
            Saved List
          </Link>
          <Link href="/users/profile" className="btns">
            Settings
          </Link>
          <div className="btns" onClick={logout}>
            Logout
          </div>
        </div>
      )}
    </div>
  );
}
