"use client";
import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { IconButton } from "@mui/material";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/firebase";

function Login() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <div className="login-bg h-screen w-screen flex justify-center items-center">
      <div className="glassmorphism w-[100%] md:w-[40%] h-auto rounded-lg p-10 shadow-lg flex flex-col justify-between">
        <div className="flex flex-col text-center  w-full pb-3">
          <h1 className="text-4xl font-bold">Log in</h1>
          <p className="text-sm">
            Dont't have an account?{" "}
            <u className="hover:font-bold duration-300">Sign up</u>
          </p>
        </div>

        <div className="flex flex-col space-y-3 pb-3">
          <button
            onClick={signInWithGoogle}
            className="flex w-full bg-white border duration-150 justify-center space-x-3 rounded-full p-3 text-center hover:outline hover:outline-blue-400 hover:outline-offset-2 "
          >
            <GoogleIcon />
            <p className="font-bold">Continue with Google</p>
          </button>

          <button className="flex w-full bg-white border duration-150 justify-center space-x-3 rounded-full p-3 text-center hover:outline hover:outline-blue-400 hover:outline-offset-2 ">
            <FacebookIcon />
            <p className="font-bold">Continue with Facebook</p>
          </button>

          <button className="flex w-full bg-white border duration-150 justify-center space-x-3 rounded-full p-3 text-center hover:outline hover:outline-blue-400 hover:outline-offset-2 ">
            <GitHubIcon />
            <p className="font-bold">Continue with Facebook</p>
          </button>
        </div>

        <div className=" flex flex-col space-y-3 ">
          <div className="flex flex-row justify-center items-center">
            <hr className="w-1/4 h-1  bg-gray-500 border-0 rounded" />
            <AlternateEmailIcon className="w-2/4 m-3" />
            <hr className="w-1/4 h-1  bg-gray-500 border-0 rounded" />
          </div>
          <input
            type="email"
            placeholder="E-mail"
            className="p-3 rounded-md  focus:outline-blue-400"
          />
          <div className="flex w-full space-x-5">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-md  focus:outline-blue-400 "
            />
            <IconButton className="">
              <VisibilityIcon />
            </IconButton>
          </div>
          <input
            type="submit"
            value="Log in"
            className="bg-gray-500 hover:bg-black hover:outline hover:outline-blue-400 hover:outline-offset-2 text-white duration-150 font-bold  rounded-full p-3"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
