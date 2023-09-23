"use client";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import {
  // FacebookAuthProvider,
  // getAdditionalUserInfo,
  // GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  // updateProfile,
} from "firebase/auth";
import { auth } from "@/firebase";
import { Typewriter } from "react-simple-typewriter";
import { useAuthState } from "react-firebase-hooks/auth";

function Login() {
  const [user] = useAuthState(auth);
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  // const signInWithFacebook = () => {
  //   const provider = new FacebookAuthProvider();
  //   signInWithPopup(auth, provider).then((result) => {
  //     // The signed-in user info.
  //     const user = result.user;
  //     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  //     const credential = FacebookAuthProvider.credentialFromResult(result);
  //     const accessToken = credential.accessToken;
  //     updateProfile(user, {
  //       photoURL: getAdditionalUserInfo(result)?.profile.picture.data.url,
  //     });
  //   });
  // };
  // const signInWithGitHub = () => {
  //   const provider = new GithubAuthProvider();
  //   signInWithPopup(auth, provider);
  // };
  const phrases = [
    "Welcome to Lumina-Chat",
    "Keys click, ideas flow",
    "Tap, type, connect",
    "Chat with rhythm, type with flair",
  ];
  return (
    <div className="login-bg h-screen w-screen flex justify-center items-center">
      <div className="glassmorphism w-[100%] md:w-[50%] h-auto rounded-lg p-10 shadow-lg flex flex-col justify-between space-y-5">
        <div className="flex flex-col text-center  w-full space-y-3 ">
          <TelegramIcon className="flex text-8xl self-center text-blue-400 animate-pulse" />
          <h1 className="font-bold text-2xl">
            <Typewriter words={phrases} />
          </h1>
          <p>Sign in with:</p>
          {/*TODO: */}
          {/* <p className="text-sm">
            Dont't have an account?{" "}
            <u className="hover:font-bold duration-300">Sign up</u>
          </p> */}
        </div>

        <div className="flex flex-col space-y-3 pt-3">
          <button
            onClick={signInWithGoogle}
            className="flex w-full bg-white border duration-150 justify-center space-x-3 rounded-full p-3 text-center hover:outline hover:outline-blue-400 hover:outline-offset-2 "
          >
            <GoogleIcon />
            <p className="font-bold">Continue with Google</p>
          </button>
          {/**/}
          {/* <button */}
          {/*   onClick={signInWithFacebook} */}
          {/*   className="flex w-full bg-white border duration-150 justify-center space-x-3 rounded-full p-3 text-center hover:outline hover:outline-blue-400 hover:outline-offset-2 " */}
          {/* > */}
          {/*   <FacebookIcon /> */}
          {/*   <p className="font-bold">Continue with Facebook</p> */}
          {/* </button> */}
          {/**/}
          {/* <button */}
          {/*   onClick={signInWithGitHub} */}
          {/*   className="flex w-full bg-white border duration-150 justify-center space-x-3 rounded-full p-3 text-center hover:outline hover:outline-blue-400 hover:outline-offset-2 " */}
          {/* > */}
          {/*   <GitHubIcon /> */}
          {/*   <p className="font-bold">Continue with GitHub</p> */}
          {/* </button> */}
        </div>
        {/*TODO: */}
        {/* <div className=" flex flex-col space-y-3 ">
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
        </div> */}
      </div>
    </div>
  );
}

export default Login;
