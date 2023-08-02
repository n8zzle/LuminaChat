"use client";

import React from "react";
import ChatIcon from "@mui/icons-material/Chat";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Link from "next/link";
import { IconButton } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";

function NavBar() {
  const [menuButton, openMenu] = React.useState(true);
  if (menuButton) {
    return (
      <main className="h-screen w-80 flex flex-col justify-between p-5 bg-green-100 duration-300">
        <Link href="/">
          <div className="text-center">
            <ChatIcon />
            <h1 className="font-bold">Lumina-Chat</h1>
          </div>
        </Link>

        <div className="flex justify-between">
          <IconButton onClick={() => signOut(auth)}>
            <ExitToAppIcon />
          </IconButton>
          <IconButton onClick={() => openMenu(!menuButton)}>
            <ArrowBackIosIcon />
          </IconButton>
        </div>
      </main>
    );
  } else {
    return (
      <main className="h-screen w-32 flex flex-col justify-between p-5 bg-red-100 duration-300">
        <Link href="/">
          <div className="text-center">
            <ChatIcon />
            <h1 className="hidden">Lumina-Chat</h1>
          </div>
        </Link>

        <div className="flex justify-between">
          <IconButton onClick={() => signOut(auth)}>
            <ExitToAppIcon />
          </IconButton>
          <IconButton onClick={() => openMenu(!menuButton)}>
            <ArrowForwardIosIcon />
          </IconButton>
        </div>
      </main>
    );
  }
}

export default NavBar;
