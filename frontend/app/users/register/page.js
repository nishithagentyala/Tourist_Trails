"use client";
import Link from "next/link";
import styles from "../form.module.css";
import { IoMail } from "react-icons/io5";
import { FaLock, FaUser } from "react-icons/fa6";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../../lib/slices/userSlice";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const router = useRouter();
  const userRegister = async (e) => {
    e.preventDefault();

    setError(null);
    try {
      const response = await axios.post(
        "http://localhost:8000/users/register",
        {
          username,
          email,
          password,
        }
      );
      dispatch(login(response.data));
      router.push("/states/home");
    } catch (err) {
      setError(err.response ? err.response.data.message : err.message);
    }
  };

  return (
    <form className={styles.form} onSubmit={userRegister}>
      <label htmlFor="username">Username</label>
      <div className={styles.box}>
        <FaUser />
        <input
          type="username"
          id="username"
          placeholder="Enter your username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <label htmlFor="email">Email</label>
      <div className={styles.box}>
        <IoMail />
        <input
          type="email"
          id="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <label htmlFor="password">Password</label>
      <div className={styles.box}>
        <FaLock />
        <input
          type={showPassword ? "password" : "text"}
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className={styles.showPass}
        >
          {showPassword ? "👁️" : "🙈"}
        </button>
      </div>
      {error && <p>{error}</p>}
      <button className={styles.btn} type="submit">
        Sign Up
      </button>
      <p className={styles.acc}>
        Already have an account{" "}
        <span>
          <Link href="/users/login">Sign In </Link>
        </span>
      </p>
    </form>
  );
}
