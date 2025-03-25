"use client";

import Header from "@/components/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main style={{ marginTop: "60px" }}>{children}</main>
    </>
  );
}
