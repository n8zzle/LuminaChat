"use client";
import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";

function Login() {
  const phrases = ["Loading..."];
  return (
    <div className="login-bg h-screen w-screen flex flex-col justify-center items-center">
      <TelegramIcon className=" text-8xl self-center text-white animate-ping" />
      <h1 className="text-white">{phrases}</h1>
    </div>
  );
}

export default Login;
