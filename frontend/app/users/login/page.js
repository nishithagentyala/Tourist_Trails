"use client";
import Link from "next/link";
import styles from "../form.module.css";
import { IoMail } from "react-icons/io5";
import { FaLock } from "react-icons/fa6";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { login } from "../../../lib/slices/userSlice";
import { useDispatch } from "react-redux";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [error, setError] = useState(null);

  const router = useRouter();
  const dispatch = useDispatch();

  const loginUser = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await axios.post("http://localhost:8000/users/login", {
        headers: { "Content-Type": "application/json" },
        email,
        password,
        credentails: "include",
      });

      dispatch(login(response.data));
      router.push(`/states/home`);
    } catch (err) {
      console.log(
        "Error",
        err.response ? err.response.data.message : err.message
      );
      setError(err.response ? err.response.data.message : err.message);
      //throw new Error(err.response ? err.response.data.message : err.message);
    }
  };

  return (
    <form className={styles.form} onSubmit={loginUser}>
      <label htmlFor="email">Email </label>
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
        Sign In
      </button>
      <p className={styles.acc}>
        Don't have an account?{" "}
        <span>
          <Link href="/users/register">Sign Up </Link>
        </span>
      </p>
    </form>
  );
}
