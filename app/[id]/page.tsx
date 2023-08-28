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

// const Chat = ({ chat, messages }) => {
const Chat = ({ searchParams }) => {
  const [user] = useAuthState(auth);
  console.log(searchParams.email);
  console.log(searchParams.photoUrl);

  const data = getData(user).then((d) => {
    /* console.log(d.chat.id, d.messages); */
    const newData = [d.chat.id, d.messages];
    return {
      newData,
    };
  });
  return (
    <div className=" w-screen flex flex-col">
      <div className="p-5 flex items-center bg-gray-50 space-x-5">
        <Image
          src={searchParams.photoUrl}
          height="40"
          width="40"
          className="rounded-full"
        />
        <div className="flex justify-between w-full">
          <div>
            <p>{searchParams.email}</p>
            <p className="text-xs text-gray-500">Last Seen: 16:38</p>
          </div>
          <div>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
      </div>
      <Messages data={data} />
    </div>
  );
};
// --TODO Test
//
export default Chat;

async function getData(user) {
  //Preparing the messages on the server
  const chatRef = doc(collection(db, "chats"), user.uid);
  const messagesQuery = query(
    collection(chatRef, "messages"),
    orderBy("timestamp", "asc"),
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

  // console.log("Original:" + messages, chat);
  return {
    messages: JSON.stringify(messages),
    chat: chat,
  };
}
