import { Avatar } from "@mui/material";
import Image from "next/image";
import React from "react";

const Chat = ({ searchParams }) => {
  console.log(searchParams.lastSeen);
  if (!searchParams.photoUrl) {
    return (
      <div className=" w-screen h-screen">
        <div className="p-5 flex items-center bg-gray-50 space-x-5">
          <Avatar sx={{ width: 40, height: 40 }}>
            {searchParams.email[0]}
          </Avatar>
          <div>
            <p>{searchParams.email}</p>
            <p className="text-xs text-gray-500">
              Last Seen:{searchParams.lastSeen}
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className=" w-screen h-screen">
        <div className="p-5 flex items-center bg-gray-50 space-x-5">
          <Image
            src={searchParams.photoUrl}
            height="40"
            width="40"
            className="rounded-full"
          />
          <div>
            <p>{searchParams.email}</p>
            <p className="text-xs text-gray-500">
              Last Seen:{searchParams.lastSeen}
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default Chat;
