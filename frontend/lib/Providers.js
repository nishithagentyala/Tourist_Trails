"use client";

import { Provider } from "react-redux";
import store from "./store"; // Ensure this path is correct

export default function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
