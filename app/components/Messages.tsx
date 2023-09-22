"use client";
import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Box, IconButton, Modal } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
const Messages = ({ data }) => {
  // console.log(data);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="login-bg w-full h-full flex">
      <div className="my-auto mx-auto w-[90%] h-[90%] glassmorphism rounded-lg p-5">
        <IconButton onClick={handleOpen} className="absolute right-5">
          <InfoIcon />
        </IconButton>

        <div className="h-[93%]">
          <h1 className="text-4xl font-bold">
            Here i should display all messages
          </h1>
        </div>
        <div className="h-[10%] flex justify-between items-center bg-gray-50 rounded-full p-3">
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

            <Modal open={open} onClose={handleClose}>
              <Box className="absolute top-[50%] left-[50%]">
                <h1 className="text-white">
                  <span className="font-bold">Chat ID:</span> {data?.chat.id}
                </h1>
                <p className="text-white">
                  <span className="font-bold">Messages:</span> {data?.messages}
                </p>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
//
