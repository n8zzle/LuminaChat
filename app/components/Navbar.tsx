"use client";

import React from "react";
import ChatIcon from "@mui/icons-material/Chat";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";

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

        <div className="text-center">
          <ArrowBackIosIcon onClick={() => openMenu(!menuButton)} />
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

        <div className="text-center">
          <ArrowForwardIosIcon onClick={() => openMenu(!menuButton)} />
        </div>
      </main>
    );
  }
}

export default NavBar;
