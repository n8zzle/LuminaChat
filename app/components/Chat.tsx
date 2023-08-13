import { IconButton } from "@mui/material";
import Image from "next/image";
import React from "react";
import getRecipientEmail from "@/utils/getRecipientEmail";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/firebase";
import { collection, query, where } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

const Chat = ({ id, users }) => {
  //console.log(id, users);
  const [user] = useAuthState(auth);
  const recipientEmail = getRecipientEmail(users, user);
  //console.log(recipientEmail);
  const [recipientSnapshot] = useCollection(
    query(collection(db, "users"), where("email", "==", recipientEmail))
  );
  console.log(recipientSnapshot);
  const recipient = recipientSnapshot?.docs?.[0]?.data();
  console.log(recipient);
  return (
    <div>
      {recipient ? (
        <Image src={recipient.photoURL} width={40} height={40} />
      ) : (
        <p>{recipientEmail}</p>
      )}
      {/*<IconButton className="hover:opacity-80">
        <Image
          src={props.users.photoURL}
          width={40}
          height={40}
          className="rounded-full"
        />
      </IconButton>
      */}
    </div>
  );
};

export default Chat;
