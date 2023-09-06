"use client";
import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import { IconButton } from "@mui/material";

const Messages = ({ data }) => {
  console.log(data);
  return (
    <div className="login-bg w-full h-full flex">
      <div className="my-auto mx-auto w-[90%] h-[90%] glassmorphism rounded-lg p-5">
        <div className="h-[95%]">Chat</div>
        <div className="h-[5%] flex justify-between items-center bg-gray-50 rounded-full p-3">
          <div className="w-[95%] ">
            <input
              type="text"
              placeholder={"Message..."}
              className="w-full bg-transparent outline-none"
            />
          </div>
          <div className="w-[5%] text-center ">
            <IconButton>
              <TelegramIcon className="text-black" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
