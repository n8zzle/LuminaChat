"use client";

import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth, db } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import Image from "next/image";
import ChatIcon from "@mui/icons-material/Chat";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import * as EmailValidator from "email-validator";
import {
  addDoc,
  collection,
  doc,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import Chat from "./Chat";

function NavBar() {
  const [user] = useAuthState(auth);

  const userChatRef = query(
    collection(db, "chats"),
    where("users", "array-contains", user.email)
  );
  const chatRef = doc(collection(db, "chats"));
  const [chatsSnapshot] = useCollection(userChatRef);

  //console.log(userChatRef);

  const createChat = () => {
    const input = prompt(
      "Please enter email address for the user you wish to chat with"
    );
    if (!input) return null;
    if (
      EmailValidator.validate(input) &&
      input !== user.email &&
      !chatAlreadyExists(input)
    ) {
      setDoc(chatRef, {
        users: [user?.email, input],
      });
    }
  };
  const chatAlreadyExists = (recepientEmail) =>
    !!chatsSnapshot?.docs.find(
      (chat) =>
        chat.data().users.find((user) => user === recepientEmail)?.length > 0
    );

  return (
    <main className="h-screen w-[30%] flex flex-col  duration-300 bg-gray-50">
      <div className="w-full flex p-3 justify-between items-center">
        <div>
          <IconButton
            className="hover:opacity-80"
            onClick={() => signOut(auth)}
          >
            <Image
              src={user.photoURL}
              width={40}
              height={40}
              className="rounded-full"
            />
          </IconButton>
          {user?.displayName}
        </div>
        <div>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="h-full  p-3 space-y-5">
        <form className="flex flex-row items-center hover:outline hover:outline-2 hover:rounded-lg hover:outline-gray-200  ">
          <SearchIcon className="text-gray-400" />
          <input
            type="search"
            placeholder={"Search..."}
            className="w-full p-3 bg-transparent outline-none"
          />
        </form>
        <button
          className="text-center w-full p-3 hover:text-blue-500"
          onClick={createChat}
        >
          Start a new chat
        </button>

        {chatsSnapshot?.docs.map((chat) => (
          <Chat key={chat.id} id={chat.id} users={chat.data().users} />
        ))}
      </div>
    </main>
  );
}

export default NavBar;
