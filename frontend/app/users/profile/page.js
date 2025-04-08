"use client";
import Link from "next/link";
import { FaLock } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "../form.module.css";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Profile() {
  const user = useSelector((state) => state.user.user);
  const [username, setUsername] = useState("");
  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [showCurrentPass, setShowCurrentPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const route = useRouter();

  useEffect(() => {
    if (!user) {
      route.push("/");
    }
  }, [user, route]);
  const togglePassword = (field) => {
    if (field === "current") setShowCurrentPass(!showCurrentPass);
    if (field === "new") setShowNewPass(!showNewPass);
    if (field === "confirm") setShowConfirmPass(!showConfirmPass);
  };
  const profileUpdate = async (e) => {
    e.preventDefault();
    if (newPass !== confirmPass) {
      alert("New password and confirm password does not match!");
      return;
    }
    const updatedUser = { username, currentPass, newPass };
    try {
      const response = await axios.put(
        `http://localhost:8000/users/profile/${user._id}`,
        updatedUser
      );
      response.data ? route.push("/states/home") : route.push("/");
    } catch (err) {
      console.log("Error", err);
    }
  };
  return (
    <form className={styles.form} onSubmit={profileUpdate}>
      Edit Your Profile
      <div className={styles.box}>
        <FaUser />
        <input
          type="username"
          id="username"
          placeholder={user?.username}
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <label htmlFor="email">Email</label>
      <div className={styles.box}>
        <IoMail />
        <input type="email" id="email" readOnly />
      </div>
      <label htmlFor="Currentpassword">Current Password</label>
      <div className={styles.box}>
        <FaLock />
        <input
          type={showCurrentPass ? "password" : "text"}
          id="Currentpassword"
          placeholder="Enter your password"
          value={currentPass}
          onChange={(e) => {
            setCurrentPass(e.target.value);
          }}
        />
        <button
          type="button"
          onClick={() => togglePassword("current")}
          className={styles.showPass}
        >
          {showCurrentPass ? "👁️" : "🙈"}
        </button>
      </div>
      <label htmlFor="newPassword">New Password</label>
      <div className={styles.box}>
        <FaLock />
        <input
          type={showNewPass ? "password" : "text"}
          id="newPassword"
          placeholder="Enter your password"
          value={newPass}
          onChange={(e) => {
            setNewPass(e.target.value);
          }}
        />
        <button
          type="button"
          onClick={() => togglePassword("new")}
          className={styles.showPass}
        >
          {showNewPass ? "👁️" : "🙈"}
        </button>
      </div>
      <label htmlFor="confirmPassword">Confirm Password</label>
      <div className={styles.box}>
        <FaLock />
        <input
          type={showConfirmPass ? "password" : "text"}
          id="confirmPassword"
          placeholder="Enter your password"
          value={confirmPass}
          onChange={(e) => {
            setConfirmPass(e.target.value);
          }}
        />
        <button
          type="button"
          onClick={() => togglePassword("confirm")}
          className={styles.showPass}
        >
          {showConfirmPass ? "👁️" : "🙈"}
        </button>
      </div>
      <Link href="/states/home">&larr; Back</Link>
      <br />
      <button className={styles.btn} type="submit">
        Submit
      </button>
    </form>
  );
}
