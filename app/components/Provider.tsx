"use client";
import React from "react";
import Login from "./Login";
import NavBar from "./Navbar";
import { auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Provider({ children }: { children: React.ReactNode }) {
  const [user] = useAuthState(auth);
  if (!user) {
    return <Login />;
  } else {
    return (
      <html lang="en">
        <body className="w-screen h-screen flex">
          <NavBar />
          {children}
        </body>
      </html>
    );
  }
}
