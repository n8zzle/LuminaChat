"use client";
import React, { useEffect } from "react";
import Login from "./Login";
import Loading from "./Loading";
import NavBar from "./Navbar";
import { auth, db } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

export default function Provider({ children }: { children: React.ReactNode }) {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    const createRecordInDB = async () => {
      await setDoc(
        doc(db, "users", user.uid),
        {
          email: user.email,
          photoUrl: user.photoURL,
          lastSeen: serverTimestamp(),
        },
        { merge: true }
      );
    };
    if (user) {
      createRecordInDB();
    }
  });

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Login />;
  } else {
    return (
      <html lang="en">
        <body className="w-screen h-screen flex ">
          <NavBar />
          {children}
        </body>
      </html>
    );
  }
}
