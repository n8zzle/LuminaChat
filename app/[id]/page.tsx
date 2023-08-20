"use client";
import { Avatar, IconButton } from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import Messages from "../components/Messages";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { auth, db } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

async function getData(user) {
  //Preparing the messages on the server
  const chatRef = doc(collection(db, "chats"), user.uid);
  const messagesQuery = query(
    collection(chatRef, "messages"),
    orderBy("timestamp", "asc")
  );

  const messagesSnapshot = await getDocs(messagesQuery);

  const messages = messagesSnapshot.docs
    .map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    .map((messages) => ({
      ...messages,
      timestamp: messages.timestamp.toDate().getTime(),
    }));

  //Preparing the chats
  const chatDoc = await getDoc(chatRef);
  const chat = {
    id: chatDoc.id,
    ...chatDoc.data(),
  };

  // console.log(messages, chat);

  return {
    props: {
      messages: JSON.stringify(messages),
      chat: chat,
    },
  };
}

const Chat = ({ chats, messages }) => {
  const [user] = useAuthState(auth);
  console.log(chats, messages);
  useEffect(() => {
    getData(user);
  });

  if (!user.photoURL) {
    return (
      <div className=" w-screen flex flex-col">
        <div className="p-5 flex items-center bg-gray-50 space-x-5">
          <Avatar sx={{ width: 40, height: 40 }}>C</Avatar>
          <div className="flex justify-between w-full">
            <div>
              <p>cickalenko.igors@jak.lv</p>
              <p className="text-xs text-gray-500">Last Seen: 16:38</p>
            </div>
            <div>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <Messages />
      </div>
    );
  } else {
    return (
      <div className=" w-screen flex flex-col">
        <div className="p-5 flex items-center bg-gray-50 space-x-5">
          <Image
            src={user.photoURL}
            height="40"
            width="40"
            className="rounded-full"
          />
          <div className="flex justify-between w-full">
            <div>
              <p>{user.email}</p>
              <p className="text-xs text-gray-500">Last Seen: 16:38</p>
            </div>
            <div>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <Messages />
      </div>
    );
  }
};

export default Chat;
