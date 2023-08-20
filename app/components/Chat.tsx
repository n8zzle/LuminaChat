import { Avatar, IconButton } from "@mui/material";
import Image from "next/image";
import React from "react";
import getRecipientEmail from "@/utils/getRecipientEmail";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/firebase";
import { collection, query, where } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import Link from "next/link";

const Chat = ({ id, users }) => {
  //console.log(id, users);
  const [user] = useAuthState(auth);
  const recipientEmail = getRecipientEmail(users, user);
  //console.log(recipientEmail);
  const [recipientSnapshot] = useCollection(
    query(collection(db, "users"), where("email", "==", recipientEmail))
  );
  //console.log(recipientSnapshot?.docs?.[0]?.data());
  const recipient = recipientSnapshot?.docs?.[0]?.data();
  //console.log(recipient);

  return (
    <div>
      {recipient ? (
        <Link
          href={{
            pathname: `/${id}/`,
            query: {
              email: `${recipientEmail}`,
              photoUrl: `${recipient.photoUrl}`,
              lastSeen: recipient.lastSeen.seconds,
            },
          }}
        >
          <div className="flex items-center space-x-2 hover:bg-gray-200 w-full p-3 rounded-lg">
            <Image
              src={recipient.photoUrl}
              height={40}
              width={40}
              className="rounded-full"
            />
            <p>{recipientEmail}</p>
          </div>
        </Link>
      ) : (
        <Link
          href={{
            pathname: `/${id}/`,
            query: {
              email: `${recipientEmail}`,
              photoUrl: null,
            },
          }}
        >
          <div className="flex items-center space-x-2 hover:bg-gray-200 w-full p-3 rounded-lg">
            <Avatar>{recipientEmail[0]}</Avatar>
            <p>{recipientEmail}</p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Chat;
